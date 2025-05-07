# Single Page Application (SPA) with Vue Router

## What is Single Page Application (SPA)?
Single Page Application (SPA) adalah implementasi aplikasi web yang memuat satu halaman HTML dan menggunakan JavaScript untuk mengubah konten halaman tersebut secara dinamis. Dengan SPA, pengguna tidak perlu memuat ulang seluruh halaman setiap kali berinteraksi dengan aplikasi, sehingga memberikan pengalaman pengguna yang lebih cepat dan responsif.

## [Vue Router](https://router.vuejs.org/introduction.html)

Vue Router adalah package resmi untuk mengelola routing dalam aplikasi Vue.js. Dengan Vue Router, kita dapat membuat aplikasi SPA dengan mudah, mengatur rute, dan menavigasi antar halaman tanpa memuat ulang seluruh halaman.

## [Instalasi Vue Router](https://router.vuejs.org/installation.html)

Jika kita menggunakan project yang sudah ada, kita bisa menginstal Vue Router dengan command :

```bash
npm install vue-router@4
``` 

Jika kita membuat project baru, kita bisa menggunakan Vue CLI untuk menginstal Vue Router secara otomatis saat membuat project baru dengan command :

```bash
npm create vue@latest
```

## [Basic Route](https://router.vuejs.org/guide/)

Untuk membuat routing dasar, kita perlu mengimpor Vue Router dan mendefinisikan routes yang akan digunakan dalam aplikasi kita. Step by stepnya adalah sebagai berikut:

1. **Buat folder baru** di dalam folder `src` dengan nama `router`.
2. **Buat file baru** di dalam folder `router` dengan nama `index.js`.
3. **Import `createRouter` dan `createMemoryHistory`** dari vue-router.
4. **Buat routes** yang berisi array objek dengan properti path dan component.
5. **Buat router** dengan memanggil createRouter dan mengatur history mode. 
6. **Ekspor router** agar bisa digunakan di file lain.
7. **Import router** di dalam file `main.js` dan gunakan `.use(router)` untuk menghubungkan router dengan aplikasi Vue.
8. **Dengan menggunakan `.use(router)`**, kita bisa mengakses router di dalam komponen Vue kita tanpa import di masing2 file, karena `<RouterView />` & `<RouterLink />` sudah terpasang secara global.
9. **Pasang `<RouterView />`** di dalam file `App.vue` untuk menampilkan komponen yang sesuai dengan route yang dipilih.
10. **Pasang `<RouterLink />`** pada NavBar untuk navigasi antar halaman dengan atribut `to` yang mengarah ke path yang diinginkan.

## [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation.html)

Bagaimana jika kita ingin melakukan navigasi secara otomatis? Kita bisa menggunakan `Programmatic Navigation` vue router dengan method `router.push()` untuk berpindah ke route yang diinginkan. Contohnya, sehabis login kita ingin berpindah ke halaman dashboard.

## [Nested Routes](https://router.vuejs.org/guide/essentials/nested-routes.html)

Dalam aplikasi ini, Navbar dibutuhkan di semua halaman kecuali login, kurang efisien jika kita memasang Navbar di setiap halaman. 

Kita bisa menggunakan `Nested Routes` untuk mengatasi hal ini. Dengan menggunakan `Nested Routes`, kita bisa membuat struktur routing yang lebih terorganisir dan memudahkan dalam pengelolaan komponen yang memiliki hierarki.

Untuk menggunakan `Nested Routes`, kita perlu melakukan beberapa langkah:
1. **Buat file baru** di dalam folder `views` dengan nama `BaseLayout.vue`.
2. **Tambahkan `BaseLayout.vue`** di dalam file `router/index.js` dan buat properti path, component & children. Pindahkan home & add ke dalam children.
3. **Pindahkan Navbar** ke dalam file `BaseLayout.vue` dan pasang `<RouterView />` di bawahnya.

## [Dynamic Routing](https://router.vuejs.org/guide/advanced/dynamic-routing.html)
