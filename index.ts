import cors from "cors"
import express from "express"
import "./config/db"
import verifyToken from "./middlewares/verifyToken"
import { AdminRouter } from "./routers/AdminRouter"
import { AnggotaRouter } from "./routers/AnggotaRouter"
import { DivisiRouter } from "./routers/DivisiRouter"
import { JabatanRouter } from "./routers/JabatanRouter"
import { KategoriKegiatanRouter } from "./routers/KategoriKegiatanRouter"
import { KegiatanRouter } from "./routers/KegiatanRouter"
import { LoginRouter } from "./routers/LoginRouter"
import { MiniclassRouter } from "./routers/MiniclassRouter"
import { PresensiRouter } from "./routers/PresensiRouter"
const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.use("/login", LoginRouter)

app.use(verifyToken)
app.use("/anggota", AnggotaRouter)
app.use("/divisi", DivisiRouter)
app.use("/jabatan", JabatanRouter)
app.use("/miniclass", MiniclassRouter)
app.use("/presensi", PresensiRouter)
app.use("/kegiatan", KegiatanRouter)
app.use("/kategoriKegiatan", KategoriKegiatanRouter)
app.use("/admin", AdminRouter)

app.listen(process.env.PORT || 3000, () => console.log("server started"))
