package database

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func NewDatabase() (*sql.DB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", 
			os.Getenv("DB_USER"), 
			os.Getenv("DB_PASSWORD"), 
			os.Getenv("DB_HOST"), 
			os.Getenv("DB_PORT"), 
			os.Getenv("DB_NAME"))

	db, err := sql.Open("mysql", dsn)

	if err != nil {
		return nil, err
	}

	if err = db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}