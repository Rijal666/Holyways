package donatedto

type DonateRequest struct {
	UserID       int    `json:"user_id"`
	DonateAmount int    `json:"donate_amount" validate:"required"`
	Status       string `json:"status" gorm:"type: varchar(255)"`
}