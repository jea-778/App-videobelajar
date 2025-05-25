# EduCourse App - Backend (Node.js)

EduCourse App adalah backend aplikasi edukasi berbasis Node.js dan Express.js. Aplikasi ini memiliki fitur autentikasi, verifikasi email, upload gambar, hingga manajemen data edukasi seperti kelas, kategori, dan materi. Proyek ini dikerjakan sebagai bagian dari pembelajaran backend lanjutan untuk memahami Express, REST API, dan fitur real-world lainnya.

---

## ✅ Fitur yang Diimplementasikan

1. ✅ Autentikasi dengan register dan login menggunakan JWT
2. ✅ Verifikasi email menggunakan token UUID dan Nodemailer
3. ✅ CRUD data untuk entitas seperti Users, Kelas, Kategori, Modul, Review, dsb
4. ✅ Filter, sort, dan search data produk/kelas
5. ✅ Upload gambar menggunakan Multer
6. ✅ Uji coba endpoint menggunakan Postman
7. ✅ Struktur REST API modular
8. ✅ Validasi dan error handling
9. ✅ Penyimpanan file upload ke folder /uploads
10. ✅ Penyembunyian credential sensitif menggunakan dotenv
11. ✅ Struktur database menggunakan MySQL
12. ✅ Penggunaan UUID untuk verifikasi token
13. ✅ Penerapan struktur folder bersih (controllers, routes, services)

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Nodemailer
- JSON Web Token (JWT)
- UUID
- bcryptjs
- dotenv
- Multer
- Postman (untuk testing API)

---

## Struktur Folder

App_videobelajar/backend/
│
├── config/ # Koneksi DB
├── controllers/ # Logika endpoint (auth, users, products, dll)
├── middlewares/ #
├── routes/ # Rute API
├── services/ # Service seperti kirim email
├── uploads/ # Tempat penyimpanan gambar yang diunggah
├── .env # Konfigurasi variabel lingkungan
├── server.js / index.js # File utama
└── README.md

---

## Instalasi & Setup

1. Clone project ini:
   ```bash
   git clone https://github.com/username/edu-course-backend.git
   cd edu-course-backend
   ```
2. Install dependencies:
   npm install

3. Buat file .env dan isi seperti berikut:
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=passwordmu
   DB_NAME=namadatabasekamu

   JWT_SECRET=kodejwtkamu (boleh acak semakin banyak semakin bagus, contoh: jqi3579waf8ea29)

   EMAIL_USER=emailkamu@gmail.com
   EMAIL_PASSWORD=passwordappkamu (dari Gmail)

4. Jalankan server:
   npm run dev

---

## Autentikasi & Verifikasi Email

- Setelah register, user akan menerima email verifikasi berisi token.

Endpoint:

POST /api/auth/register

POST /api/auth/login

POST /api/auth/verify-email?token=<token_dari_email>

Verifikasi akan mengubah kolom is_verified menjadi true.

---

## Upload Gambar

Endpoint: POST /api/upload

Payload: FormData berisi file image

Gambar disimpan ke folder /uploads

---

## Filter, Sort, Search Produk/Kelas

Endpoint: GET /api/products

Query param:

kategori (ex: pemasaran)

durasi (ex: <4, 4–8, >8)

sort (ex: harga_terendah, rating_tertinggi)

search (cari berdasarkan judul/keywords)

---

## Testing

Semua endpoint diuji menggunakan Postman

Email verifikasi diuji menggunakan akun Gmail pribadi + App Password

Token JWT diuji validasi dan penyimpanan di localStorage frontend

---

## Skill Set yang Dicapai

1. Mengimplementasikan autentikasi (Login/Register)

2. REST API lanjutan (filter, sort, search)

3. Mengirim dan memverifikasi email

4. Upload file ke server

5. Struktur kode modular dan reusable

6. Konfigurasi dan penggunaan .env

7. Koneksi database dan SQL query

---

# Catatan

- Gunakan App Password dari Gmail, bukan password asli, untuk Nodemailer.

- File .env jangan diupload ke GitHub (sudah masuk di .gitignore).

- Pastikan folder /uploads tersedia untuk menyimpan file.

---

### Dibuat oleh: [Jea Darmarifa]

### EduCourse/Videobelajar App - Backend Node.js Harisenin Bootcamp Mission
