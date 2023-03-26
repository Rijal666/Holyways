package database

import (
	"fmt"
	"holyways/models"
	"holyways/pkg/mysql"
)

func RunMigration() {
	err := mysql.ConnDB.AutoMigrate(
		&models.User{},
		&models.Funding{},
		&models.Donate{},
		&models.Profile{},
	)

	if err != nil {
		fmt.Println(err)
		panic("Migration Failed")
	}

	fmt.Println("Migration Success")
}
