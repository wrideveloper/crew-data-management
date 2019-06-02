import { model, Schema } from "mongoose"
import { ILevel } from "../interfaces"

const LevelSchema = new Schema({
  nama: {
    type: String,
  },
  akses: {
    type: [String],
  },
})

export const Level = model<ILevel>("Level", LevelSchema, "Level")
