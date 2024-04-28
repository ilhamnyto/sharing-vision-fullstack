package main

import (
	"log"

	"github.com/ilhamnyto/sharing-vision-fullstack/backend/database"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load(".env")

	db, err := database.NewDatabase()

	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}

	query := `
		CREATE TABLE IF NOT EXISTS articles (
			id INT AUTO_INCREMENT PRIMARY KEY,
			title VARCHAR(200),
			content TEXT,
			category VARCHAR(100),
			status VARCHAR(100),
			created_at timestamp DEFAULT CURRENT_TIMESTAMP,
			updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
		);
	`

	stmt, err := db.Prepare(query)

	if err != nil {
		log.Fatalf("Failed create table: %v", err)
	}

	if _, err := stmt.Exec(); err != nil {
		log.Fatalf("Failed create table: %v", err)
	}

	defer db.Close()
}