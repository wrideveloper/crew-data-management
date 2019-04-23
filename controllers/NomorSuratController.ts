import { Request, Response } from "express"
import { NomorSurat } from "../models/NomorSurat"

export class NomorSuratController {
  public async index(req: Request, res: Response) {
    res.json(await NomorSurat.find({}).populate("anggota"))
  }

  public async show(req: Request, res: Response) {
    res.json(await NomorSurat.findById(req.params._id).populate("anggota"))
  }

  public async store(req: Request, res: Response) {
    res.json(await NomorSurat.create(req.body))
  }

  public async update(req: Request, res: Response) {
    res.json(
      await NomorSurat.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true },
      ),
    )
  }

  public async destroy(req: Request, res: Response) {
    res.json(await NomorSurat.findOneAndDelete({ _id: req.params._id }))
  }
}
