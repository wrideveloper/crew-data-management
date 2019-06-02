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

export interface IKategoriKegiatan extends Document {
  nama: string
  keterangan: string
}

export interface IKegiatan extends Document {
  nama: string
  kategoriKegiatan: string
  laporan: string
  tanggal: Date
  album: string
}

export interface INomorSurat extends Document {
  nomor: string
  keperluan: string
  anggota: string
}

export interface IAdmin extends Document {
  username: string
  password: string
}

export interface ILevel extends Document {
  nama: string
  akses: string[]
}
