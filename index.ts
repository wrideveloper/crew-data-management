import express from 'express'
import cors from 'cors'
require('dotenv').config()
require('./config/db')
import { AnggotaRouter } from './routers/AnggotaRouter'
import { DivisiRouter } from './routers/DivisiRouter'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/anggota', AnggotaRouter)
app.use('/divisi', DivisiRouter)

app.listen(process.env.PORT || 3000, () => console.log('server started'))
