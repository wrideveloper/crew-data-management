import { model, Schema } from "mongoose"
import { IDivisi } from "../interfaces"

const DivisiSchema = new Schema({
  nama: {
    type: String,
  },
})

export const Divisi = model<IDivisi>("Divisi", DivisiSchema, "Divisi")
