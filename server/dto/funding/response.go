package fundingdto

type FundingResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Thumbnail   string `json:"thumbnail"`
	Goals       int    `json:"goals"`
	Description string `json:"description"`
}