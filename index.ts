import cors from "cors"
import express from "express"
import "./config/db"
import { AnggotaRouter } from "./routers/AnggotaRouter"
import { DivisiRouter } from "./routers/DivisiRouter"
import { JabatanRouter } from "./routers/JabatanRouter"
import { MiniclassRouter } from "./routers/MiniclassRouter"
const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.use("/anggota", AnggotaRouter)
app.use("/divisi", DivisiRouter)
app.use("/jabatan", JabatanRouter)
app.use("/miniclass", MiniclassRouter)

app.listen(process.env.PORT || 3000, () => console.log("server started"))
