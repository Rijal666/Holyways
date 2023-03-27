package main

import (
	"fmt"
	"holyways/database"
	"holyways/pkg/mysql"
	"holyways/routes"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	e := echo.New()

	// untuk mengakses data yg akan dikirimkan ke frontEnd
	// Middleware CORS (Cross-Origin Resource Sharing) digunakan untuk mengizinkan atau membatasi akses dari sebuah sumber daya web (website) pada domain yang berbeda
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"},
	  }))

	mysql.DataBaseInit()
	database.RunMigration()

	routes.Routes(e.Group("api/v1"))

	e.Static("/uploads", "./uploads")

	var port = os.Getenv("PORT");
	
	fmt.Println("server running on port " + port)
	e.Logger.Fatal(e.Start(":" +port))
}