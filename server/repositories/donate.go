package repositories

import (
	"holyways/models"

	"gorm.io/gorm"
)

type DonateRepository interface {
	FindDonate() ([]models.Donate, error)
	GetDonate(ID int) (models.Donate, error)
	CreateDonate(donate models.Donate) (models.Donate, error)
}

func RepositoryDonate(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindDonate() ([]models.Donate, error) {
	var donations []models.Donate
	err := r.db.Preload("User").Preload("UsersDonate").Find(&donations).Error

	return donations, err
}

func (r *repository) GetDonate(ID int) (models.Donate, error) {
	var Donations models.Donate
	err := r.db.Preload("User").Preload("UsersDonate").First(&Donations, ID).Error

	return Donations, err
}

func (r *repository) CreateDonate(donate models.Donate) (models.Donate, error) {
	err := r.db.Create(&donate).Error

	return donate, err
}

