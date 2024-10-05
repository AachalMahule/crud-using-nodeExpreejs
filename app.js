//Routing
//const express =require('express')
import express from 'express'
import connectDB from "./db/connectdb.js"
import web from './routes/web.js'
import { join } from 'path'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

//DATABASE CONNECTION
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }))

//static files
app.use('/student', express.static(join(process.cwd(), "public")))
app.use('/student/edit', express.static(join(process.cwd(), "public")))

//set template engine
app.set("view engine", "ejs");
//load route
app.use('/student', web);


app.listen(port, () => {
    console.log(`Server listing at http://localhost:${port}`)
})