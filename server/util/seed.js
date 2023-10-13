const {db}=require('./database')
const {Items}=require('../models/items')

const items =[
    {
        title:"Coffee Mug",
        photo_url:"../../src/assets/mugs.jpg",
        price:"25.00$",
        favorites:true,
        categories:"Mugs"

    }
]

const seedDatabase=async()=>{
    await Items.bulkCreate(items)
}

module.exports={seedDatabase}

// /Users/laman/Desktop/Devmountain lessons/Devmountain Spec/spec-project/coffee-shop/src/assets/mugs.jpg