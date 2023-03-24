package models

import "time"

type Funding struct {
	ID          int       `json:"id" gorm:"primary_key:auto_increment"`
	Title       string    `json:"title" form:"title" gorm:"type: varchar(255)"`
	Thumbnail   string    `json:"thumbnail" form:"thumbnail" gorm:"type: varchar(255)"`
	Goals       int    	  `json:"goals" form:"goals" gorm:"type: int"`
	Description string    `json:"description" form:"description" gorm:"type: varchar(255)"`
	UserID int `json:"user_id" form:"user_id"`
	CreatedAt   time.Time `json:"-"`
	UpdatedAt   time.Time `json:"-"`
}

type FundingResponse struct{
	ID          int       `json:"fund_id" form:"fund_id" gorm:"primary_key:auto_increment"`
	Title       string    `json:"title"`
	Thumbnail   string    `json:"thumbnail"`
	Goals       int    	  `json:"goals"`
	Description string    `json:"description"`
}

func (FundingResponse) TableName() string {
	return "fundings"
}