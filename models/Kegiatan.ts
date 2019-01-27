import { model, Schema } from "mongoose"
import { IKegiatan } from "../interfaces"

const KegiatanSchema = new Schema({
  nama: {
    type: String,
  },
  laporan: {
    type: String,
  },
  kategori: {
    type: Schema.Types.ObjectId,
    ref: "KategoriKegiatan",
  },
})

export const Kegiatan = model<IKegiatan>(
  "Kegiatan",
  KegiatanSchema,
  "Kegiatan",
)
