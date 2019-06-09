import { model, Schema } from "mongoose"
import { IAdmin } from "../interfaces"

const AdminSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  level: {
    type: Schema.Types.ObjectId,
    ref: "Level",
  },
})

export const Admin = model<IAdmin>("Admin", AdminSchema, "Admin")
