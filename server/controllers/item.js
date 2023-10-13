const { Items } = require('../models/items');

module.exports = {
  getFavoriteItems: async (req, res) => {
    try {
      const favoriteItems = await Items.findAll({
        where: { favorites: true },
        attributes: ['title', 'photo_url','price'], 
      });
      res.status(200).send(favoriteItems);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  },
};
