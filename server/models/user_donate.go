package models

type UsersDonate struct {
	ID       int            `json:"id" gorm:"primary_key:auto_increment"`
	UserID   int            `json:"user_id"`
	Users    UsersResponse  `json:"users"`
	DonateID int            `json:"donate_id"`
	Donates  DonateResponse `json:"donates"`
}