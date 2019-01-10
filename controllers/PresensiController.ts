import { Request, Response } from "express"
import { Presensi } from "../models/Presensi"

export class PresensiController {
  public async index(req: Request, res: Response) {
    res.json(
      await Presensi.find({})
        .populate("miniclass")
        .populate("peserta"),
    )
  }

  public async show(req: Request, res: Response) {
    res.json(await Presensi.findById(req.params._id).populate("miniclass"))
  }

  public async store(req: Request, res: Response) {
    res.json(await Presensi.create(req.body))
  }

  public async update(req: Request, res: Response) {
    res.json(
      await Presensi.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true },
      ),
    )
  }

  public async destroy(req: Request, res: Response) {
    res.json(await Presensi.findOneAndDelete({ _id: req.params._id }))
  }
}
