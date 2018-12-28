import { Schema, model } from 'mongoose'

const JabatanSchema = new Schema({
  nama: {
    type: String
  }
})

export const Jabatan = model('Jabatan', JabatanSchema, 'Jabatan')
