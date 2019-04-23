import { model, Schema } from "mongoose"
import { INomorSurat } from "../interfaces"

const NomorSuratSchema = new Schema({
  nomor: {
    type: String,
  },
  keperluan: {
    type: String,
  },
  anggota: {
    type: Schema.Types.ObjectId,
    ref: "Anggota",
  },
})

export const NomorSurat = model<INomorSurat>(
  "NomorSurat",
  NomorSuratSchema,
  "NomorSurat",
)
