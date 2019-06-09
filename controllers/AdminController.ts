import { Request, Response } from "express"
import { Admin } from "../models/Admin"

export class AdminController {
  public index(req: Request, res: Response) {
    Admin.find({})
      .populate("level")
      .then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    Admin.findById(req.params._id).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Admin.create(req.body).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Admin.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Admin.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data))
  }
}
