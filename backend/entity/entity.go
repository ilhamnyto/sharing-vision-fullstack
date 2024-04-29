package entity

type Article struct {
	Title string `json:"title"`
	Content string `json:"content"`
	Category string `json:"category"`
	CreatedAt string `json:"created_at,omitempty"`
	UpdatedAt string `json:"updated_at,omitempty"`
	Status string `json:"status"`
	ID int `json:"id,omitempty"`
}

type CreateOrUpdateArticleRequest struct {
	Title string `json:"title" validate:"required,min=20"`
	Content string `json:"content" validate:"required,min=200"`
	Category string `json:"category" validate:"required,min=3"`
	Status string `json:"status" validate:"required,oneof=publish draft trash"`
}