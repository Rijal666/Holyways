package routes

import (
	"holyways/handlers"
	"holyways/pkg/middleware"
	"holyways/pkg/mysql"
	"holyways/repositories"

	"github.com/labstack/echo/v4"
)

func DonateRoutes(e *echo.Group) {
	DonateRepository := repositories.RepositoryDonate(mysql.ConnDB)
	UserRepository := repositories.RepositoryUser(mysql.ConnDB)
	FundingRepository := repositories.RepositoryFunding(mysql.ConnDB)
	h := handlers.HandlerDonate(DonateRepository, UserRepository, FundingRepository)

	e.GET("/donates", h.FindDonate)
	e.GET("/donate/:id", h.GetDonate)
	e.POST("/donate", middleware.Auth(h.CreateDonate))
}