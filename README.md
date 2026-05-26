# Görev Yönetim Uygulaması (Task Manager) - MERN Stack

Bu proje, Web Programlama dersi dönem projesi kapsamında MERN Stack (MongoDB, Express, React, Node.js) kullanılarak geliştirilmiştir. 

## Kullanılan Teknolojiler
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs
- **Frontend:** React.js (Vite), React Router, Axios, CSS
- **Mimarisi:** MVC mimarisi, RESTful API, Component bazlı yapı

## Özellikler
- Kullanıcı kaydı ve JWT ile kimlik doğrulama.
- Kategori ekleme.
- Görev (Task) ekleme, silme, durumunu güncelleme (Yapılacak, Yapılıyor, Tamamlandı).
- Responsive (Mobil Uyumlu) tasarım.
- Özel (Protected) route'lar.

## Kurulum Adımları

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Terminali açın ve ackend klasörüne girin:
   `ash
   cd backend
   npm install
   `
3. ackend/.env dosyasını kontrol edin. Gerekirse MongoDB URI'sini kendi lokal MongoDB veya Atlas URI'nizle değiştirin.
4. Backend sunucusunu başlatın:
   `ash
   npm start
   `
5. Yeni bir terminal açın ve rontend klasörüne girin:
   `ash
   cd frontend
   npm install
   `
6. Frontend sunucusunu başlatın:
   `ash
   npm run dev
   `
7. Tarayıcınızda http://localhost:5173 adresine giderek uygulamayı kullanmaya başlayabilirsiniz.
