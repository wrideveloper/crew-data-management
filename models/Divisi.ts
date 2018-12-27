import { Schema, model } from 'mongoose'

const DivisiSchema = new Schema({
  nama: {
    type: String
  }
})

export const Divisi = model('Divisi', DivisiSchema, 'Divisi')
