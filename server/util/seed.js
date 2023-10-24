const {db}=require('./database')
const {Items}=require('../models/items')

const items =[
    {
      
        title:"Coffee Mugs",
        photo_url:"https://m.media-amazon.com/images/I/711mw-D-EtL.jpg",
        price:"25.00$",
        favorites:true,
        categories:"Mugs",
    },
    {
        
        title:"Coffee Mug",
        photo_url:"https://images-na.ssl-images-amazon.com/images/I/41B3PO266rS.jpg",
        price:"20.00$",
        favorites:true,
        categories:"Mugs",
    },
    {
        
        title:"Coffee Beans",
        photo_url:"https://wholesaleca.grosche.ca/cdn/shop/products/coffee-labels-on-brown-bag-Signature-blend-wholesale_coffee_beans.jpg?v=1607958531",
        price:"11.00$",
        favorites:true,
        categories:"Coffee",
    },
    {
        
        title:"Coffee Beans",
        photo_url:"https://www.gosupps.com/media/catalog/product/4/1/41MsP5-hnPL.jpg",
        price:"13.00$",
        favorites:true,
        categories:"Coffee",
    },
]

const seedDatabase=async()=>{
    await Items.bulkCreate(items)
}

module.exports={seedDatabase}

// /Users/laman/Desktop/Devmountain lessons/Devmountain Spec/spec-project/coffee-shop/src/assets/mugs.jpg