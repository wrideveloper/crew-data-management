import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { Admin } from "../models/Admin"

export class LoginController {
  public async login(req: Request, res: Response) {
    const { username, password } = req.body
    const user = await Admin.findOne({ username, password }).populate("level")
    if (user) {
      res.json({
        success: true,
        token: jwt.sign({ user }, "randomStuff"),
        user,
      })
    } else {
      res.json({ success: false })
    }
  }
}
