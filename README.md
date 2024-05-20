# DISCORD BOT

## Instalasi

### 1. Instalasi dependensi
#### Menggunakan npm
```
npm install
```

#### Menggunakan pnpm
```
pnpm add
```
#### Menggunakan yarn
```
yarn add
```

## 2. Struktur folder
```
    src
    ├───bot        // Main programs
    ├───commands   // All comands promt
    │   └───gemini // spesici comand prompt
    ├───config     // All config bot
    ├───constants  // Conctant value 
    ├───events     // Event handler
    ├───libs       // All libs or feature
    │   ├───gdrive // Specific feature
    │   └───gemini
    ├───types      // Type initialization
    └───utils      // Utils funcitons
```

## 3. Konfigurasi

### 1. Ubah file configs
```
./configs/bot.example.ts
TOKEN: "XXXX",
ME: "12121XXX"

rename bot.ts
```

```
./configs/chanles.example.ts
TESTBOT : "1191682151448584202",
WELCOME: "1191315992329076797",
ANOUNCMENT: "1191690310091276380"

rename chanles.ts
```
## Penggunaan

Setelah instalasi selesai, gunakan perintah-perintah berikut untuk menjalankan proyek di setiap sisinya:

#### 1. Pengembangan

Untuk mode pengembangan gunakan:
```cmd
$ npm run dev
```
#### 2. Production

Untuk melihat pratinjau proyek gunakan:

```cmd
// untuk server
$ npm run serve
```
> [!NOTE]
> Pastikan untuk menjalankan perintah tersebut di direktori yang sesuai antara backend dan frontend

> [!TIP]
> Happy coding!