import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const bearerHeader = req.headers.authorization
  const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined
  if (token) {
    jwt.verify(token, "randomStuff", (err, payload) => {
      if (err) {
        throw err
      }
      next()
    })
  } else {
    res.sendStatus(403)
  }
}
