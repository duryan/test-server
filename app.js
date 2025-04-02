require('dotenv').config()
const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.status(200)
       .send("Home page!");
})

app.get("/about", (req, res) => {
    res.status(200)
       .send("About page!");
})

app.get("/profile", (req, res) => {
    res.status(200)
       .send("Profile page!");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})