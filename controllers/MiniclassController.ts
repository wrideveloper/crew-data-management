import { Request, Response } from "express"
import { Anggota } from "../models/Anggota"
import { Miniclass } from "../models/Miniclass"

export class MiniclassController {
  public async index(req: Request, res: Response) {
    res.json(await Miniclass.find({}).populate("divisi"))
  }

  public async show(req: Request, res: Response) {
    res.json(await Miniclass.findById(req.params._id).populate("divisi"))
  }

  public async showAnggota(req: Request, res: Response) {
    const { _id: miniclassId, angkatan } = req.params
    res.json(await Anggota.find({ miniclass: miniclassId, angkatan }))
  }

  public async store(req: Request, res: Response) {
    res.json(await Miniclass.create(req.body))
  }

  public async update(req: Request, res: Response) {
    res.json(
      await Miniclass.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true },
      ),
    )
  }

  public async destroy(req: Request, res: Response) {
    res.json(await Miniclass.findOneAndDelete({ _id: req.params._id }))
  }
}
