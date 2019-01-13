import { Document } from "mongoose"

export interface IAnggota extends Document {
  nim: number
  nama: string
  email: string
  kontak: string
  angkatan: number
  foto?: string
  jabatan?: string
  divisi?: string
  miniclass?: string
}

export interface IDivisi extends Document {
  nama: string
}

export interface IJabatan extends Document {
  nama: string
}

export interface IMiniclass extends Document {
  nama: string
  divisi: string
}

export interface IPresensi extends Document {
  topik: string
  miniclass: string
  angkatan: number
  tanggal: Date
  peserta: string[]
}

export interface IAdmin extends Document {
  username: string
  password: string
}
