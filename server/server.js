import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()
import connect from './db/connect.js'
import userRoute from './router/users.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extends: false }))
app.use(morgan('dev'))

//router
app.use('/api/v1/users', userRoute)

// db
connect()

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`)
})
