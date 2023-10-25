const { Items } = require('../models/items');
const {Orders}=require('../models/orders')
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
  getOrderHistory:async(req,res)=>{
    try {
      const { user_id, item_id } = req.body;
      const order = await Orders.bulkCreate(req.body.newOrders);
      res.status(201).json(order);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  },
   getHistory : async (req, res) => {
    const user_id = req.params.user_id; 
  
    try {
      const orderHistory = await Orders.findAll({
        where: { user_id },
        attributes: ['id', 'date'],
        include:[{
          model:Items,
          attributes:['title','photo_url']
        }]
      });
  
      res.status(200).json(orderHistory);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
};

