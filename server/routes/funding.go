package routes

import (
	"holyways/handlers"
	"holyways/pkg/middleware"
	"holyways/pkg/mysql"
	"holyways/repositories"

	"github.com/labstack/echo/v4"
)

func FundingRoutes(e *echo.Group){
	FundingRepository := repositories.RepositoryFunding(mysql.ConnDB)
	h := handlers.HandlerFunding(FundingRepository)

	e.GET("/fundings", h.FindFunding)
	e.GET("/funding/:id", h.GetFunding)
	e.POST("/funding", middleware.Auth(middleware.UploadFile(h.CreateFunding)))
	e.DELETE("/funding/:id", middleware.Auth(h.DeleteFunding))
	e.PATCH("/funding/:id", middleware.Auth(middleware.UploadFile(h.UpdateFunding)))
}