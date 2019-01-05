import { Request, Response } from "express"
import { Jabatan } from "../models/Jabatan"

export class JabatanController {
  public index(req: Request, res: Response) {
    Jabatan.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Jabatan.create(req.body).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Jabatan.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Jabatan.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
