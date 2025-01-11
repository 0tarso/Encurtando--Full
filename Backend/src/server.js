//
require("dotenv").config()
const express = require('express')
const cors = require('cors')

//Routes
const linksRouter = require("./routes/links")

//Tasks
const startCronJobs = require("./tasks/cronJob")

//Middlewares
// const configCors = require("./middlewares/cors")
// const limiter = require("./middlewares/rateLimit")

const app = express()

// Midd
// Comentado pois você pode usar em sua aplicação ou não
// app.use(cors(configCors))
// app.use(limiter)

app.use(express.json())

//Router
app.use("/", linksRouter)

startCronJobs()

//Listener
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Servidor rodando em -->> ${PORT}`))