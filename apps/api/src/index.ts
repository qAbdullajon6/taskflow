import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import healthRoure from './routes/health.routes.js'
import apiRoute from './routes/index.js'

dotenv.config()

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use('/api', healthRoure)
app.use('/api', apiRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT} portida ishga tushdi`);
})