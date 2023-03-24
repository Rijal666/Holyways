package models

import "time"

type Donate struct {
	ID           int          `gorm:"primary_key:auto_increment" json:"id"`
	DonateAmount int       `gorm:"type:int" json:"donateAmount" form:"donateAmount"`
	Status       string       `gorm:"type:varchar(300)" json:"status" form:"status"`
	CreatedAt    time.Time    `json:"startdate"`
	UserID       int          `json:"user_id" gorm:"type:int"`
	User         UsersDonate `json:"user"`
	// UserResponse []user
}
