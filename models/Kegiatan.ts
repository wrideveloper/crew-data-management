import { model, Schema } from "mongoose"
import { IKegiatan } from "../interfaces"

const KegiatanSchema = new Schema({
  nama: {
    type: String,
  },
  laporan: {
    type: String,
  },
  kategoriKegiatan: {
    type: Schema.Types.ObjectId,
    ref: "KategoriKegiatan",
  },
  tanggal: {
    type: Date,
  },
  album: {
    type: String,
  },
})

export const Kegiatan = model<IKegiatan>("Kegiatan", KegiatanSchema, "Kegiatan")
