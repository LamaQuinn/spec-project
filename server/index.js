const express=require('express')
const cors=require('cors')
const app=express()

const {sequelize}=require('./util/database')
const {Items}=require('./models/items')
const {User}=require('./models/user')
const {Review}=require('./models/itemsReview')
const {Orders}=require('./models/orders')
const {seedDatabase}=require('../server/util/seed')
const {register,login}=require('./controllers/auth')

const {getFavoriteItems,getAllItems,getOrderHistory,getHistory}=require('./controllers/item')

app.use(express.json())
app.use(cors())

Review.belongsTo(User);
Review.belongsTo(Items);
User.hasMany(Review);
Items.hasMany(Review);
User.hasMany(Orders);
Items.hasMany(Orders);
Orders.belongsTo(User);
Orders.belongsTo(Items);

app.post('/register',register)
app.post('/login',login)
app.post('/seed',seedDatabase)
app.get('/favorite-items',getFavoriteItems)
app.get('/items',getAllItems)
app.post('/orders',getOrderHistory)
app.get('/orders/history/:user_id', getHistory)

sequelize.sync()
.then(()=>{
    app.listen(4004,()=>console.log('Running on port 4004.'))
})