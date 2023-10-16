'use strict'

// lv0

// const config = {
//     app:{
//         port:3000
//     },
//     db:{
//         host:'localhost',
//         port:27017,
//         name:'db'
//     }
// }

// lv 01
// const dev = {
//     app:{
//         port:3000
//     },
//     db:{
//         host:'localhost',
//         port:27017,
//         name:'dbDev'
//     }
// }
// const prod = {
//     app:{
//         port:3000
//     },
//     db:{
//         host:'localhost',
//         port:27017,
//         name:'dbProduct'
//     }
// }
// lv 02
const dev = {
    app:{
        port:process.env.DEV_APP_PORT || 3000
    },
    db:{
        host:process.env.DEV_DB_HOST || 'localhost',
        port:process.env.DEV_DB_PORT || 27017,
        name:process.env.DEV_DB_NAME || 'shopDev'
    }
}
const prod = {
    app:{
        port:process.env.PRO_APP_PORT
    },
    db:{
        host:process.env.PRO_DB_HOST,
        port:process.env.PRO_DB_PORT,
        name:process.env.PRO_DB_NAME
    }
}
const config = {dev,prod}
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]