import { Request, Response } from "express"
import fs from "fs"
import { Anggota } from "../models/Anggota"

export class AnggotaController {
  public async index(req: Request, res: Response) {
    res.json(
      await Anggota.find({})
        .populate("divisi")
        .populate("jabatan")
        .populate("miniclass"),
    )
  }

  public async show(req: Request, res: Response) {
    res.json(
      await Anggota.findById(req.params._id)
        .populate("divisi")
        .populate("jabatan")
        .populate("miniclass"),
    )
  }

  public async store(req: Request, res: Response) {
    delete req.body.foto
    res.json(await Anggota.create(req.body))
  }

  public async update(req: Request, res: Response) {
    delete req.body.foto
    res.json(
      await Anggota.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true },
      ),
    )
  }

  public async updateFoto(req: Request, res: Response) {
    const anggota = await Anggota.findById(req.params._id)
    if (anggota!.foto && fs.existsSync(anggota!.foto!)) {
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
