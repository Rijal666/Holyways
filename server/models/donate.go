package models

import "time"

type Donate struct {
	ID           int          `gorm:"primary_key:auto_increment" json:"id"`
	DonateAmount int       `gorm:"type:int" json:"donate_amount" form:"donation"`
	CreatedAt    time.Time    `json:"startdate"`
	Status       string                  `json:"status" gorm:"type: varchar(255)"`
	UserID       int          `json:"user_id" gorm:"type:int"`
	User         UsersResponse `json:"user"`
	FundingID int `json:"funding_id" gorm:"type:int"`
	Funding Funding `json:"funding"`
	// UsersDonate []UsersDonate `json:"users_donate" gorm:"foreignKey:DonateID"`
	// UserResponse []user
}

type DonateResponse struct {
	ID int
	DonateAmount int
	Status string
}

func (DonateResponse) TableName() string {
	return "donates"
}