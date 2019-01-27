import { model, Schema } from "mongoose"
import { IKategoriKegiatan } from "../interfaces"

const KategoriKegiatanSchema = new Schema({
  nama: {
    type: String,
  },
})

export const KategoriKegiatan = model<IKategoriKegiatan>(
  "KategoriKegiatan",
  KategoriKegiatanSchema,
  "KategoriKegiatan",
)
