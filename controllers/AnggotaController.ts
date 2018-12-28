import { Request, Response } from "express"
import fs from "fs"
import { Anggota } from "../models/Anggota"

export class AnggotaController {
  public async index(req: Request, res: Response) {
    res.json(await Anggota.find({}))
  }

  public async show(req: Request, res: Response) {
    res.json(await Anggota.findById(req.params._id))
  }

  public async store(req: Request, res: Response) {
    res.json(await Anggota.create(req.body.anggota))
  }

  public async update(req: Request, res: Response) {
    res.json(
      await Anggota.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body.anggota },
        { new: true },
      ),
    )
  }

  public async updateFoto(req: Request, res: Response) {
    const anggota = await Anggota.findById(req.params._id)
    if (anggota!.foto) {
      fs.unlinkSync(anggota!.foto!)
    }

    Anggota.findOneAndUpdate(
      { _id: req.params._id },
      { $set: { foto: req.file.path } },
      { new: true },
    ).then((data) => res.json(data))
  }

  public async destroy(req: Request, res: Response) {
    res.json(await Anggota.findOneAndDelete({ _id: req.params._id }))
  }
}
