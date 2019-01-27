import { Request, Response } from "express"
import { KategoriKegiatan } from "../models/KategoriKegiatan"

export class KategoriKegiatanController {
  public index(req: Request, res: Response) {
    KategoriKegiatan.find({}).then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    KategoriKegiatan.findById(req.params._id).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    KategoriKegiatan.create(req.body).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    KategoriKegiatan.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    KategoriKegiatan.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
