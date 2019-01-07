import { model, Schema } from "mongoose"
import { IMiniclass } from "../interfaces"

const MiniclassSchema = new Schema({
  nama: {
    type: String,
  },
  divisi: {
    type: Schema.Types.ObjectId,
    ref: "Divisi",
  },
})

export const Miniclass = model<IMiniclass>(
  "Miniclass",
  MiniclassSchema,
  "Miniclass",
)
