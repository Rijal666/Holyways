package handlers

import (
	donatedto "holyways/dto/donate"
	dto "holyways/dto/result"
	"holyways/models"
	"holyways/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerDonate struct {
	DonateRepository repositories.DonateRepository
	UserRepository repositories.UserRepository
	FundingRepository repositories.FundingRepository
}

func HandlerDonate(DonateRepository repositories.DonateRepository, UserRepository repositories.UserRepository,FundingRepository repositories.FundingRepository) *handlerDonate{
	return &handlerDonate{
		DonateRepository: DonateRepository,
		UserRepository: UserRepository,
		FundingRepository: FundingRepository,
	}
}

func (h *handlerDonate) FindDonate(c echo.Context) error {
	donates, err := h.DonateRepository.FindDonate()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	if len(donates) > 0 {
		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Data for all fundings was successfully obtained", Data: convertResponseDonates(donates)})
	} else {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: "No record found"})
	}
}

func (h *handlerDonate) GetDonate(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	donations, err := h.DonateRepository.GetDonate(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Donate data successfully obtained", Data: donations})
}

func (h *handlerDonate) CreateDonate(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userAdmin := userLogin.(jwt.MapClaims)["is_admin"].(bool)
	if !userAdmin{
		donateAmount, _ := strconv.Atoi(c.FormValue("donate_amount"))
		UserID, _ := strconv.Atoi(c.FormValue("user_id"))

		request := donatedto.DonateRequest{
			UserID: UserID,
			DonateAmount: donateAmount,
			Status: c.FormValue("status"),
		}
		validation := validator.New()
		err := validation.Struct(request)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		donate := models.Donate{
			UserID: request.UserID,
			DonateAmount: request.DonateAmount,
			Status: request.Status,
		}

		donate, err = h.DonateRepository.CreateDonate(donate)
		if err != nil {
			return c.JSON(http.StatusInternalServerError,dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		donate, _ = h.DonateRepository.GetDonate(donate.ID)
		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Donate data created seccessfully", Data: convertResponseDonate(donate)})
	} else {
		return c.JSON(http.StatusUnauthorized, dto.ErrorResult{Status: http.StatusUnauthorized, Message: "Sorry, you're not Admin"})
	}
}


func convertResponseDonate(u models.Donate) donatedto.DonateResponse {
	return donatedto.DonateResponse{
		ID: u.ID,
		User: models.UsersDonate{},
		DonateAmount: u.DonateAmount,
		Status: u.Status,
	}
}


func convertResponseDonates(Donates []models.Donate) []donatedto.DonateResponse {
	var responseDonates []donatedto.DonateResponse

	for _, donate := range Donates {
		responseDonates = append(responseDonates, convertResponseDonate(donate))
	}
	return responseDonates
}