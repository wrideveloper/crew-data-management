import { model, Schema } from "mongoose"
import { IPresensi } from "../interfaces"

const PresensiSchema = new Schema({
  topik: {
    type: String,
  },
  miniclass: {
    type: Schema.Types.ObjectId,
    ref: "Miniclass",
  },
  angkatan: {
    type: Number,
  },
  tanggal: {
    type: Date,
  },
  peserta: {
    type: [Schema.Types.ObjectId],
    ref: "Anggota",
  },
})

export const Presensi = model<IPresensi>(
  "Presensi",
  PresensiSchema,
  "Presensi",
)
