import { model, Schema } from "mongoose"
import { IAdmin } from "../interfaces"

const AdminSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
})

export const Admin = model<IAdmin>("Admin", AdminSchema, "Admin")
