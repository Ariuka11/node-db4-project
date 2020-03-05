const express = require("express")
const recipesRouter = require('./recipes/recipes-router')
const server = express();
const PORT = process.env.PORT || 4000

server.use(express.json())
server.use("/api/recipes", recipesRouter)

server.get("/", (req, res) => {
    res.send(`<h2>Let's do Some Data Modeling</h2>`)
})

server.use((req, res) => {
    res.status(404).json({
        message: "Route was not found"
    })
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: "Error retrieving the data"
    })
})

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`)
})