import { Document } from "mongoose"

interface IAnggota extends Document {
  nim: number
  nama: string
  email: string
  kontak: string
  angkatan: number
  foto?: string
  jabatan?: string
  divisi?: string
}

interface IDivisi extends Document {
  nama: string
}

interface IJabatan extends Document {
  nama: string
}

export { IAnggota, IDivisi, IJabatan }
