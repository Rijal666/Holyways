package donatedto

type DonateRequest struct {
	UserID       int    `json:"user_id"`
	DonateAmount int    `json:"donate_amount"`
	Status       string `json:"status"`
}