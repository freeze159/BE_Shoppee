'use strict'
 
const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/shopDev`

mongoose.connect(connectString).then(_ => console.log('Connect success')).catch(err => console.log(`Error Connect`))

if(1===0){
    mongoose.set('debug',true)
    mongoose.set('debug',{color:true})
}

module.exports = mongoose