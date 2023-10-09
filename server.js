const app = require("./src/app");


const PORT = 3055
const server = app.listen(PORT,() => {
    console.log(`WSV::::::: ${PORT}`)
})

process.on('SIGINT',() => {
    server.close(() => console.log('Exit server Express'))
})


