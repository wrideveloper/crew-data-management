import { Divisi } from '../models/Divisi'
import { Request, Response } from 'express'

export class DivisiController {
  public index(req: Request, res: Response) {
    Divisi.find({}).then(data => res.json(data))
  }

  public show(req: Request, res: Response) {
    Divisi.findById(req.params._id).then(data => res.json(data))
  }

  public store(req: Request, res: Response) {
    Divisi.create(req.body.divisi).then(data => res.json(data))
  }

  public update(req: Request, res: Response) {
    Divisi.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.divisi },
      { new: true }
    ).then(data => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Divisi.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }
}
