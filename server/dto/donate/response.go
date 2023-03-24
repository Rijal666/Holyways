package donatedto

import "holyways/models"

type DonateResponse struct {
	ID           int      `json:"id"`
	User         models.UsersDonate `json:"user"`
	DonateAmount int      `json:"donate_amount"`
	Status       string   `json:"status"`
}