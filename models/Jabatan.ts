import { Schema, model } from 'mongoose'
import { IJabatan } from '../interfaces'

const JabatanSchema = new Schema({
  nama: {
    type: String
  }
})

export const Jabatan = model<IJabatan>('Jabatan', JabatanSchema, 'Jabatan')
