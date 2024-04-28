package handler

import (
	"database/sql"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/ilhamnyto/sharing-vision-fullstack/backend/entity"
)

type ArticleHandler struct {
	db       *sql.DB
	validate *validator.Validate
}

func NewArticleHandler(db *sql.DB, validate *validator.Validate) *ArticleHandler {
	return &ArticleHandler{
		db:       db,
		validate: validate,
	}
}

func (a *ArticleHandler) GetArticle(ctx *gin.Context) {
	limit := ctx.DefaultQuery("limit", "10")
	offset := ctx.DefaultQuery("offset", "0")
	status := ctx.DefaultQuery("status", "")

	intOffset, err := strconv.Atoi(offset)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	intLimit, err := strconv.Atoi(limit)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	query := "SELECT id, title, content, category, status from articles "

	if status != "" {
		query += "WHERE status = " + "'" + status + "'"
	}

	query += " order by created_at DESC LIMIT ? OFFSET ?"

	stmt, err := a.db.Prepare(query)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	rows, err := stmt.Query(limit, offset)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	defer rows.Close()

	listArticle := []entity.Article{}

	for rows.Next() {
		tempArticle := new(entity.Article)
		if err := rows.Scan(&tempArticle.ID, &tempArticle.Title, &tempArticle.Content, &tempArticle.Category, &tempArticle.Status); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
			return
		}

		listArticle = append(listArticle, *tempArticle)
	}

	query = "SELECT count(*) as total from articles "

	if status != "" {
		query += "WHERE status = " + "'" + status + "'"
	}

	nstmt, err := a.db.Prepare(query)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	var total int

	if err := nstmt.QueryRow().Scan(&total); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"data": listArticle, "meta": map[string]int{"limit": intLimit, "offset": intOffset, "total": total}})
}

func (a *ArticleHandler) GetArticleByID(ctx *gin.Context) {
	articleId := ctx.Param("id")

	query := "SELECT title, content, category, status from articles where id = ?"

	stmt, err := a.db.Prepare(query)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	defer stmt.Close()

	var article entity.Article

	if err := stmt.QueryRow(articleId).Scan(&article.Title, &article.Content, &article.Category, &article.Status); err == sql.ErrNoRows {
		ctx.JSON(http.StatusNotFound, gin.H{"message": "article not found"})
		return
	} else if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": article})
}

func (a *ArticleHandler) CreateArticle(ctx *gin.Context) {

	var req entity.CreateOrUpdateArticleRequest

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	if err := a.validate.Struct(req); err != nil {
		validationErrors := err.(validator.ValidationErrors)
		for _, e := range validationErrors {
			ctx.JSON(http.StatusBadRequest, gin.H{"message": e.Error()})
			return
		}
	}

	query := "INSERT INTO articles (title, content, category, status) values (?, ?, ?, ?)"

	stmt, err := a.db.Prepare(query)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	defer stmt.Close()

	if _, err := stmt.Exec(req.Title, req.Content, req.Category, req.Status); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "article created"})
}

func (a *ArticleHandler) UpdateArticle(ctx *gin.Context) {
	var req entity.CreateOrUpdateArticleRequest

	articleId := ctx.Param("id")

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	if err := a.validate.Struct(req); err != nil {
		validationErrors := err.(validator.ValidationErrors)
		for _, e := range validationErrors {
			ctx.JSON(http.StatusBadRequest, gin.H{"message": e.Error()})
			return
		}
	}

	query := "UPDATE articles SET title = ?, content = ?, category = ?, status = ? WHERE id = ?"

	stmt, err := a.db.Prepare(query)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	defer stmt.Close()

	if _, err := stmt.Exec(req.Title, req.Content, req.Category, req.Status, articleId); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "article updated"})
}

func (a *ArticleHandler) DeleteArticle(ctx *gin.Context) {
	articleId := ctx.Param("id")

	query := "DELETE FROM articles WHERE id = ?"

	stmt, err := a.db.Prepare(query)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	defer stmt.Close()

	if _, err := stmt.Exec(articleId); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "article deleted"})
}
