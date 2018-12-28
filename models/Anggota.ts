import { model, Schema } from "mongoose"
import { IAnggota } from "../interfaces"

const AnggotaSchema = new Schema({
  nim: {
    type: Number,
  },
  nama: {
    type: String,
  },
  email: {
    type: String,
  },
  kontak: {
    type: String,
  },
  foto: {
    type: String,
  },
  jabatan: {
    type: Schema.Types.ObjectId,
    ref: "Jabatan",
  },
  angkatan: {
    type: Number,
  },
  divisi: {
    type: Schema.Types.ObjectId,
    ref: "Divisi",
  },
})

export const Anggota = model<IAnggota>("Anggota", AnggotaSchema, "Anggota")
