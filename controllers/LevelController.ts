import { Request, Response } from "express"
import { Level } from "../models/Level"

export class LevelController {
  public index(req: Request, res: Response) {
    Level.find({}).then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    Level.findById(req.params._id).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Level.create(req.body).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Level.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Level.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data))
  }
}
