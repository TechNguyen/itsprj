const express = require('express')
const route = express.Router();
const Home = require('../app/controllers/home')
route.get('/create', Home.create)
route.post('/store', Home.storeUser)
route.get('/storeUser', Home.getUser)
route.get('/edit/:id', Home.editUser)
route.put('/store/:id', Home.updateUser)
route.delete('/:id', Home.deleteUser)
route.get('/:id', Home.show)
module.exports = route