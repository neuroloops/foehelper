package player

import (
	"FoeBack/database"

	"github.com/gofiber/fiber"
	"github.com/jinzhu/gorm"
)

type Player struct {
	gorm.Model
	Name string `json:"name"`
	Nb   int    `json:"nb"`
}

func GetPlayers(c *fiber.Ctx) {
	db := database.DBConn
	var players []Player
	db.Find(&players)
	c.JSON(players)
}

func GetPlayer(c *fiber.Ctx) {
	id := c.Params("id")
	db := database.DBConn
	var player Player
	db.Find(player, id)
	c.JSON(player)
}

func PutPlayer(c *fiber.Ctx) {
	name := c.Params("name")
	db := database.DBConn
	var player Player
	db.Find(player, name)
	c.JSON(player)
}

func NewPlayer(c *fiber.Ctx) {
	db := database.DBConn
	player := new(Player)
	if err := c.BodyParser(player); err != nil {
		c.Status(503).Send(err)
		return
	}
	db.Create(&player)
	c.JSON(player)
}

func DeletePlayers(c *fiber.Ctx) {

	id := c.Params("id")
	db := database.DBConn

	var player Player
	db.First(&player, id)
	if player.Name == "" {
		c.Status(500).Send("No player found with given ID")
	}

	db.Delete(&player)
	c.Send("book successfully deleted")
}
