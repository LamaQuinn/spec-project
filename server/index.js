const express=require('express')
const cors=require('cors')
const app=express()

const {sequelize}=require('./util/database')
const {Items}=require('./models/items')
const {User}=require('./models/user')
const {seedDatabase}=require('../server/util/seed')
const {register,login}=require('./controllers/auth')

const {getFavoriteItems}=require('./controllers/item')

app.use(express.json())
app.use(cors())


app.post('/register',register)
app.post('/login',login)
app.post('/seed',seedDatabase)
app.get('/favorite-items',getFavoriteItems)

sequelize.sync()
.then(()=>{
    app.listen(4004,()=>console.log('Running on port 4004.'))
})