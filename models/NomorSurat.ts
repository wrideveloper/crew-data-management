import { model, Schema } from "mongoose"
import { INomorSurat } from "../interfaces"

const NomorSuratSchema = new Schema({
  nomor: {
    type: String,
  },
  keperluan: {
    type: String,
  },
  pemohon: {
    type: Schema.Types.ObjectId,
    ref: "Anggota",
  },
})

export const NomorSurat = model<INomorSurat>(
  "NomorSurat",
  NomorSuratSchema,
  "NomorSurat",
)
