import { Request, Response } from "express"
import { Kegiatan } from "../models/Kegiatan"

export class KegiatanController {
  public async index(req: Request, res: Response) {
    res.json(await Kegiatan.find({}).populate("kategoriKegiatan"))
  }

  public async show(req: Request, res: Response) {
    res.json(
      await Kegiatan.findById(req.params._id).populate("kategoriKegiatan"),
    )
  }

  public async store(req: Request, res: Response) {
    delete req.body.foto
    res.json(await Kegiatan.create(req.body))
  }

  public async update(req: Request, res: Response) {
    delete req.body.foto
    res.json(
      await Kegiatan.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true },
      ),
    )
  }

  public async destroy(req: Request, res: Response) {
    res.json(await Kegiatan.findOneAndDelete({ _id: req.params._id }))
  }
}
