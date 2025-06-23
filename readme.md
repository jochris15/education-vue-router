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
3. **Import `createRouter` dan `createWebHistory`** dari vue-router.
4. **Buat folder views** di dalam folder `src` untuk menyimpan komponen yang akan digunakan sebagai halaman.
5. **Import komponen** yang akan digunakan sebagai halaman di dalam file `router/index.js`.
6. **Buat routes** yang berisi array objek dengan properti path dan component.
7. **Buat router** dengan memanggil createRouter dan mengatur history mode. 
8. **Ekspor router** agar bisa digunakan di file lain.
9. **Import router** di dalam file `main.js` dan gunakan `.use(router)` untuk menghubungkan router dengan aplikasi Vue.
10. **Dengan menggunakan `.use(router)`**, kita bisa mengakses router di dalam komponen Vue kita tanpa import di masing2 file, karena `<RouterView />` & `<RouterLink />` sudah terpasang secara global.
11. **Pasang `<RouterView />`** di dalam file `App.vue` untuk menampilkan komponen yang sesuai dengan route yang dipilih.
12. **Pasang `<RouterLink />`** pada NavBar untuk navigasi antar halaman dengan atribut `to` yang mengarah ke path yang diinginkan.

## [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation.html)
Bagaimana jika kita ingin melakukan navigasi secara otomatis? Kita bisa menggunakan `Programmatic Navigation` vue router dengan method `router.push()` untuk berpindah ke route yang diinginkan. Contohnya, sehabis login kita ingin berpindah ke halaman dashboard. 

Step-by-step menggunakan `Programmatic Navigation`:
1. **Import `useRouter`** dari vue-router di dalam file `Login.vue`.
2. **Buat variabel router** dengan memanggil `useRouter()`.
3. **Panggil method `router.push()`** di dalam method `login()` setelah login berhasil, dan arahkan ke path yang diinginkan.

## [Named Routes](https://router.vuejs.org/guide/essentials/named-routes.html#Named-Routes)
Dengan menggunakan `Named Routes`, kita bisa memberikan nama pada route yang kita buat. Hal ini memudahkan kita dalam melakukan navigasi ke route tersebut tanpa harus mengingat pathnya.
Step-by-step menggunakan `Named Routes`:
1. **Buat properti name** di dalam route yang kita buat di dalam file `router/index.js`.
2. **Gunakan nama route** di dalam file vue pada `<RouterLink />` dengan menggunakan `:to="{ name: 'namaRoute' }"`.

## [Nested Routes](https://router.vuejs.org/guide/essentials/nested-routes.html)
Dalam aplikasi ini, Navbar dibutuhkan di semua halaman kecuali login, kurang efisien jika kita memasang Navbar di setiap halaman. 

Kita bisa menggunakan `Nested Routes` untuk mengatasi hal ini. Dengan menggunakan `Nested Routes`, kita bisa membuat struktur routing yang lebih terorganisir dan memudahkan dalam pengelolaan komponen yang memiliki hierarki.

Step-by-step menggunakan `Nested Routes`:
1. **Buat file baru** di dalam folder `views` dengan nama `BaseLayout.vue`.
2. **Tambahkan `BaseLayout.vue`** di dalam file `router/index.js` dan properti component & children. Pindahkan home & add ke dalam children.
3. **Pindahkan Navbar** ke dalam file `BaseLayout.vue` dan pasang `<RouterView />` di bawahnya.

## [Dynamic Routes](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Dynamic-Route-Matching-with-Params)
Dalam aplikasi ini, ada halaman detail yang membutuhkan data satuan berdasarkan id. Kita bisa menggunakan `Dynamic Routes` untuk mengatasi hal ini. Dengan menggunakan `Dynamic Routes`, kita bisa membuat route yang dinamis berdasarkan parameter yang diberikan.

Step-by-step menggunakan `Dynamic Routes`:
1. **Tambahkan `Detail.vue`** di dalam file `router/index.js` dan tambahkan properti path dengan parameter id.
2. **Import `Detail.vue`** di dalam file `router/index.js`.
3 **Buat navigasi di product card** dengan menggunakan `$router.push()` untuk mengarahkan ke halaman detail dengan parameter id yang sesuai pada saat click gambar.
4. **Ambil parameter id** di dalam file `Detail.vue` dengan menggunakan `useRoute()` dari vue-router.
5. **Ambil data produk** berdasarkan id yang didapat dari parameter di dalam file `Detail.vue`.

## [Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
Navigation Guards adalah fitur yang memungkinkan kita untuk mengontrol akses ke route tertentu dalam aplikasi kita. Kita bisa menggunakan Navigation Guards untuk melakukan pengecekan sebelum mengizinkan pengguna untuk mengakses route tertentu, seperti memeriksa apakah pengguna sudah login atau belum.

Terbagi menjadi 3 jenis:
1. [**Global Guards**](https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards): Didefinisikan di dalam file `router/index.js` dan berlaku untuk semua route. 
2. [**Per-Route Guards**](https://router.vuejs.org/guide/advanced/navigation-guards.html#Per-Route-Guard): Didefinisikan di dalam route yang bersangkutan di dalam file `router/index.js`.
3. [**In-Component Guards**](https://router.vuejs.org/guide/advanced/navigation-guards.html#In-Component-Guards): Didefinisikan di dalam komponen yang bersangkutan dengan menggunakan properti `beforeRouteEnter`, `beforeRouteUpdate`, dan `beforeRouteLeave`.


Dalam aplikasi ini, kita akan menggunakan `Per-Route Guards` untuk mengizinkan akses untuk pengguna yang sudah login. Kita bisa menggunakan `beforeEnter` di dalam route yang bersangkutan untuk melakukan pengecekan apakah pengguna sudah login atau belum.

Step-by-step menggunakan `Per-Route Guards`:
1. **Buat property `beforeEnter`** di dalam route `BaseLayout` di dalam file `router/index.js`.
2. **Buat kondisi** untuk mengecek apakah pengguna sudah login atau belum dengan mengecheck localStorage.
3. **Jika belum login**, arahkan pengguna ke halaman login dengan menggunakan `return {name : "home"}`.
