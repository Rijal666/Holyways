package routes

import "github.com/labstack/echo/v4"

func Routes(e *echo.Group) {
	AuthRoutes(e)
	UserRoutes(e)
	FundingRoutes(e)
	DonateRoutes(e)
	ProfileRoutes(e)
}
