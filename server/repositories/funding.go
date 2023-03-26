package repositories

import (
	"holyways/models"

	"gorm.io/gorm"
)

type FundingRepository interface {
	FindFundings() ([]models.Funding, error)
	GetFunding(ID int) (models.Funding, error)
	CreateFunding(funding models.Funding) (models.Funding, error)
	DeleteFunding(funding models.Funding) (models.Funding, error)
	UpdateFunding(funding models.Funding) (models.Funding, error)
}

func RepositoryFunding(db *gorm.DB) *repository{
	return &repository{db}
}

func (r *repository) FindFundings() ([]models.Funding, error) {
	var Fundings []models.Funding
	err := r.db.Find(&Fundings).Error

	return Fundings, err
}

func (r *repository) GetFunding(ID int) (models.Funding, error) {
	var funding models.Funding
	err := r.db.First(&funding, ID).Error

	return funding, err
}

func (r *repository) CreateFunding(funding models.Funding) (models.Funding, error) {
	err := r.db.Create(&funding).Error

	return funding, err
}

func (r *repository) DeleteFunding(funding models.Funding) (models.Funding, error) {
	err := r.db.Delete(&funding).Scan(&funding).Error

	return funding, err
}

func (r *repository) UpdateFunding(funding models.Funding) (models.Funding, error) {
	err := r.db.Save(&funding).Error

	return funding, err
}