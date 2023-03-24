package fundingdto

type FundingRequest struct {
	Title       string `json:"title" form:"title" validate:"required"`
	Thumbnail   string `json:"thumbnail" form:"thumbnail" validate:"required"`
	Goals       int    `json:"goals" form:"goals" validate:"required"`
	Description string `json:"description" form:"description" validate:"required"`
}