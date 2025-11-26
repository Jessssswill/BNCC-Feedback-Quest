# 🚀 BNCC Feedback System - Quest Rolling Week

**Divisi Research and Development (RnD) - BNCC 37**

Website CRUD berbasis **React.js** dan **Express.js** untuk mengumpulkan dan mengelola feedback acara internal BNCC. Proyek ini menggunakan **JSON File** sebagai database lokal (tanpa perlu install MySQL/MongoDB) sehingga mudah dijalankan di mana saja.

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS (Glassmorphism UI)
* **Backend:** Node.js, Express.js
* **Database:** Local JSON File (`data.json`)
* **Icons:** SVG Icons (No external library heavy dependency)


## ✨ Fitur Utama

### 📝 Public Form (User)
* Input data peserta (Nama, Email, Divisi).
* Input detail acara (Nama Event, Rating Bintang).
* Input feedback (Komentar & Saran).
* Validasi form sederhana.
* Tampilan **Dark Mode Glassmorphism** yang modern.

### 📊 Admin Dashboard (Pengurus)
* **Overview Statistik:** Melihat Total Feedback, Rata-rata Rating, dan Pending Review secara *real-time*.
* **Table Management:** Melihat semua data feedback yang masuk.
* **Search & Filter:** Cari berdasarkan Nama/Event dan filter berdasarkan Status (Open, In-Review, Resolved).
* **Sorting:** Urutkan data berdasarkan Terbaru atau Rating Tertinggi.
* **CRUD Actions:** Edit status feedback dan Hapus feedback.
* **Export CSV:** Fitur untuk mendownload rekap data feedback ke dalam format Excel/CSV.
* **Skeleton Loading:** Animasi loading yang smooth saat mengambil data.


## 💻 Cara Menjalankan (Run Lokal)

Pastikan komputer Anda sudah terinstal **Node.js**.

### 1. Clone Repository
Buka terminal dan clone project ini:
```bash
git clone [https://github.com/USERNAME-GITHUB-KAMU/NAMA-REPO-KAMU.git](https://github.com/USERNAME-GITHUB-KAMU/NAMA-REPO-KAMU.git)
cd NAMA-REPO-KAMU