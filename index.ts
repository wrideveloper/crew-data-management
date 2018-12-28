import express from 'express'
import cors from 'cors'
require('./config/db')
import { AnggotaRouter } from './routers/AnggotaRouter'
import { DivisiRouter } from './routers/DivisiRouter'
import { JabatanRouter } from './routers/JabatanRouter'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/anggota', AnggotaRouter)
app.use('/divisi', DivisiRouter)
app.use('/jabatan', JabatanRouter)

app.listen(process.env.PORT || 3000, () => console.log('server started'))
