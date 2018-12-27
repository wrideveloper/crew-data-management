import { Anggota } from '../models/Anggota'
import { Request, Response } from 'express'

export class AnggotaController {
  public index(req: Request, res: Response) {
    Anggota.find({}).then(data => res.json(data))
  }

  public show(req: Request, res: Response) {
    Anggota.findById(req.params._id).then(data => res.json(data))
  }

  public store(req: Request, res: Response) {
    Anggota.create(req.body.anggota).then(data => res.json(data))
  }

  public update(req: Request, res: Response) {
    Anggota.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.anggota },
      { new: true }
    ).then(data => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Anggota.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }
}
