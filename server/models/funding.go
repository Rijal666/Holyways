package models

import "time"

type Funding struct {
	ID          int       `json:"id" gorm:"primary_key:auto_increment"`
	Title       string    `json:"title" form:"title" gorm:"type: varchar(255)"`
	Thumbnail   string    `json:"thumbnail" form:"thumbnail" gorm:"type: varchar(255)"`
	Goals       int    	  `json:"goals" form:"goals" gorm:"type: int"`
	Donation    int           `json:"donation" form:"donation" gorm:"type:int"`
	Description string    `json:"description" form:"description" gorm:"type: varchar(255)"`
	Status      string        `json:"status" gorm:"type: varchar(255)"`
	Funder []Donate `json:"funder"`
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