package authdto

type LoginResponse struct {
	IsAdmin  bool   `json:"is_admin" gorm:"type: bool"`
	Fullname string `json:"fullname" gorm:"type: varchar(255)"`
	Email    string `json:"email" gorm:"type: varchar(255)"`
	Token    string `json:"token" gorm:"type: varchar(255)"`
}
