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
        photo_url:"https://media.istockphoto.com/id/962658860/photo/coffee-bag-with-custom-label-organic-whole-beans.jpg?s=612x612&w=0&k=20&c=oxt9dC6ARQkeSGcIyFdeIRFdeyX6xeGfBJSEWbVm8-U=",
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