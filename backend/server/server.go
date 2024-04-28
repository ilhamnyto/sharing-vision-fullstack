package server

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"github.com/go-playground/validator/v10"
	"github.com/ilhamnyto/sharing-vision-fullstack/backend/handler"
)

type Server struct {
	db *sql.DB
	app *gin.Engine
	validator *validator.Validate
}

func NewServer(db *sql.DB) *Server {
	app := gin.New()
	validate := validator.New()

	app.Use(cors.Default())

	return &Server{
		db: db,
		app: app,
		validator: validate,
	}
}

func (s *Server) Run() {
	s.app.Run()
}

func (s *Server) RegisterRoute() {
	mainRoute := s.app.Group("/api/v1")
	articleHandler := handler.NewArticleHandler(s.db, s.validator)  

	s.app.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, map[string]string{"message": "ok"})
	})

	mainRoute.GET("/article", articleHandler.GetArticle)
	mainRoute.POST("/article", articleHandler.CreateArticle)
	mainRoute.GET("/article/:id", articleHandler.GetArticleByID)
	mainRoute.PATCH("/article/:id", articleHandler.UpdateArticle)
	mainRoute.DELETE("/article/:id", articleHandler.DeleteArticle)
}