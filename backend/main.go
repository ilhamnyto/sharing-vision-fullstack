package main

import (
	"log"

	"github.com/ilhamnyto/sharing-vision-fullstack/backend/database"
	"github.com/ilhamnyto/sharing-vision-fullstack/backend/server"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load(".env")

	db, err := database.NewDatabase()
	if err != nil {
		log.Fatal(err)
	}
	
	defer db.Close()

	s := server.NewServer(db)
	s.RegisterRoute()
	s.Run()
}