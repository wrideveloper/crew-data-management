import { Schema, model } from 'mongoose'

const AnggotaSchema = new Schema({
  nim: {
    type: Number
  },
  nama: {
    type: String
  },
  email: {
    type: String
  },
  kontak: {
    type: String
  },
  foto: {
    type: String
  },
  role: {
    type: String
  },
  angkatan: {
    type: Number
  },
  divisi: {
    type: Schema.Types.ObjectId,
    ref: 'Divisi'
  }
})

export const Anggota = model('Anggota', AnggotaSchema, 'Anggota')
