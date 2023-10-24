const { Items } = require('../models/items');

module.exports = {
  getFavoriteItems: async (req, res) => {
    try {
      const favoriteItems = await Items.findAll({
        where: { favorites: true },
        attributes: ['id','title', 'photo_url','price'], 
      });
      res.status(200).send(favoriteItems);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  },
  getAllItems: async (req, res) => {
    try {
      const allItems = await Items.findAll({attributes:['id','title','photo_url','price']}); 
      res.status(200).send(allItems);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  },
};
