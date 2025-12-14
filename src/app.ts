import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db'
import router from "./routes"

dotenv.config()
connectDB()

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is ON')
})

app.use("/api", router);

export default app
