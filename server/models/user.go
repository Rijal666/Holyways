package models

import "time"

type User struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	IsAdmin   bool   `json:"is_admin" gorm:"type: bool"`
	FullName      string `json:"fullname" gorm:"type: varchar(255)"`
	Email     string `json:"email" gorm:"type: varchar(255)"`
	Password  string `json:"password" gorm:"type: varchar(255)"`
	Phone string `json:"phone" gorm:"type: varchar(255)"`
	Image string `json:"image" gorm:"type: varchar(255)"`
	CreatedAt time.Time `json:"-"`
	UpdateAt time.Time `json:"-"`
}

type UsersResponse struct {
	ID      int    `json:"id"`
	IsAdmin bool   `json:"is_admin"`
	FullName    string `json:"fullname"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	Image string `json:"image"`
}

type UsersDonate struct {
	ID      int    `json:"id"`
	FullName string `json:"fullname"`
	Email string `json:"email"`
}

func (UsersResponse) TableName() string {
	return "users"
}

func (UsersDonate) TableName() string {
	return "users"
}