package routes

import (
	"holyways/handlers"
	"holyways/pkg/middleware"
	"holyways/pkg/mysql"
	"holyways/repositories"

	"github.com/labstack/echo/v4"
)

func ProfileRoutes(e *echo.Group) {
	profileRepository := repositories.RepositoryProfile(mysql.ConnDB)
	h := handlers.HandlerProfile(profileRepository)

	e.GET("/profil", middleware.Auth(h.GetProfile))
	e.POST("/profil", middleware.Auth(middleware.UploadFile(h.CreateProfile)))
	e.PATCH("/profil", middleware.Auth(middleware.UploadFile(h.UpdateProfile)))
	e.DELETE("/profil", middleware.Auth(h.DeleteProfile))
}