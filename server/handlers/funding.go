package handlers

import (
	"context"
	"fmt"
	fundingdto "holyways/dto/funding"
	dto "holyways/dto/result"
	"holyways/models"
	"holyways/repositories"
	"net/http"
	"os"
	"strconv"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

var ctx = context.Background()
var CLOUD_NAME = os.Getenv("CLOUD_NAME")
var API_KEY = os.Getenv("API_KEY")
var API_SECRET = os.Getenv("API_SECRET")

type handlerFunding struct {
	FundingRepository repositories.FundingRepository
}

func HandlerFunding (FundingRepository repositories.FundingRepository) *handlerFunding {
	return &handlerFunding{FundingRepository}
}

func (h *handlerFunding) FindFunding(c echo.Context) error {
	fundings, err := h.FundingRepository.FindFundings()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	if len(fundings) > 0 {
		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Data for all fundings was successfully obtained", Data: convertResponseFundings(fundings)})
	} else {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: "No record found"})
	}
}

func (h *handlerFunding) GetFunding(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	var funding models.Funding
	funding, err := h.FundingRepository.GetFunding(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Funding data successfully obtained", Data: convertResponseFunding(funding)})
}

func (h *handlerFunding) CreateFunding(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userAdmin := userLogin.(jwt.MapClaims)["is_admin"].(bool)
	if userAdmin{
		dataFile := c.Get("dataFile").(string)
		fmt.Println("this is data file", dataFile)

		goals, _ := strconv.Atoi(c.FormValue("goals"))

		request := fundingdto.FundingRequest{
			Title: c.FormValue("title"),
			Thumbnail: dataFile,
			Goals: goals,
			Description: c.FormValue("description"),
		}
		validation := validator.New()
		err := validation.Struct(request)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		// Add your Cloudinary credentials ...
cld, _ := cloudinary.NewFromParams(CLOUD_NAME, API_KEY, API_SECRET)

// Upload file to Cloudinary ...
resp, err := cld.Upload.Upload(ctx, dataFile, uploader.UploadParams{Folder: "dumbmerch"});

if err != nil {
  fmt.Println(err.Error())
}

		funding := models.Funding{
			Title: request.Title,
			Thumbnail: resp.SecureURL, // Modify store file URL to database from resp.SecureURL ...
			Goals: request.Goals,
			Description: request.Description,
		}

		funding, err = h.FundingRepository.CreateFunding(funding)
		if err != nil {
			return c.JSON(http.StatusInternalServerError,dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		funding, _ = h.FundingRepository.GetFunding(funding.ID)
		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Funding data created seccessfully", Data: convertResponseFunding(funding)})
	} else {
		return c.JSON(http.StatusUnauthorized, dto.ErrorResult{Status: http.StatusUnauthorized, Message: "Sorry, you're not Admin"})
	}
}

func (h *handlerFunding) DeleteFunding(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userAdmin := userLogin.(jwt.MapClaims)["is_admin"].(bool)
	if userAdmin {
		id, _ := strconv.Atoi(c.Param("id"))

		funding, err := h.FundingRepository.GetFunding(id)
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
		}

		data, err := h.FundingRepository.DeleteFunding(funding)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		fileName := funding.Thumbnail
		dirPath := "uploads"

		filePath := fmt.Sprintf("%s/%s", dirPath, fileName)

		err = os.Remove(filePath)
		if err != nil {
			fmt.Println("Failed to delete file"+fileName+":", err)
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		fmt.Println("File " + fileName + " deleted successfully")

		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Fuding data deleted successfully", Data: convertResponseFunding(data)})
	} else {
		return c.JSON(http.StatusUnauthorized, dto.ErrorResult{Status: http.StatusUnauthorized, Message: "Sorry, you're not Admin"})
	}
}

func (h *handlerFunding) UpdateFunding(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userAdmin := userLogin.(jwt.MapClaims)["is_admin"].(bool)
	if userAdmin {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, err)
		}

		dataFile := c.Get("dataFile").(string)
		fmt.Println("this is data file", dataFile)

		goals, _ := strconv.Atoi(c.FormValue("goals"))

		request := fundingdto.FundingRequest{
			Title:        c.FormValue("title"),
			Thumbnail: dataFile,
			Goals:       goals,
			Description:       c.FormValue("description"),
		}

		validation := validator.New()
		err = validation.Struct(request)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		funding, err := h.FundingRepository.GetFunding(int(id))
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
		}

		if request.Title != "" {
			funding.Title = request.Title
		}
		if request.Thumbnail != "" {
			fileName := funding.Thumbnail
			dirPath := "uploads"
			
			filePath := fmt.Sprintf("%s/%s", dirPath, fileName)
			
			err = os.Remove(filePath)
			if err != nil {
				fmt.Println("Failed to delete file"+fileName+":", err)
				return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
			}
			
			fmt.Println("File " + fileName + " deleted successfully")
			
			funding.Thumbnail = request.Thumbnail
		}
		if request.Goals != 0 {
			funding.Goals = request.Goals
		}
		if request.Description != "" {
			funding.Description = request.Description
		}
		
		data, err := h.FundingRepository.UpdateFunding(funding)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}

		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Funding data updated successfully", Data: convertResponseFunding(data)})
	} else {
		return c.JSON(http.StatusUnauthorized, dto.ErrorResult{Status: http.StatusUnauthorized, Message: "Sorry, you're not Admin"})
	}
}

func convertResponseFunding(u models.Funding) fundingdto.FundingResponse {
	return fundingdto.FundingResponse{
		ID: u.ID,
		Title: u.Title,
		Thumbnail: u.Thumbnail,
		Goals: u.Goals,
		Description: u.Description,
	}
}


func convertResponseFundings(Fundings []models.Funding) []fundingdto.FundingResponse {
	var responseFundings []fundingdto.FundingResponse

	for _, funding := range Fundings {
		responseFundings = append(responseFundings, convertResponseFunding(funding))
	}
	return responseFundings
}