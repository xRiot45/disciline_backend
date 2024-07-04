<p align="center">
  <a href="#" target="blank"><img src="./assets/images/logo_light.png" width="90" alt="NoteMatic Logo" /></a>
</p>

<p align="center">Disciline RESTful API</p>
<p align="center">

## Description

Disciline adalah aplikasi Sistem Informasi Pelanggaran Siswa (SIPS) yang bertujuan untuk mencatat, mengelola, dan melaporkan pelanggaran yang dilakukan siswa di lingkungan sekolah.

- **Version :** v1.0.0
- **Developer :** Rumah Kodingku
- **Released On :** July 04, 2024
- **Status :** Stable Release
- **Contact :** [rumahkodingku45@gmail.com](mailto:rumahkodingku45@gmail.com)

## Contents

1. [Description](#description)
2. [System Requirements](#system-requirements)
3. [Tech Stack](#tech-stack)
4. [Security](#security)
5. [Installation](#installation)
6. [Setup Environment Variable](#setup-environtment-variable)
7. [Project Structure](#project-structure)
8. [Running the App](#running-the-app)
9. [API Endpoints](#api-endpoints)
   - [Users API](#users-api)
   - [Agama API](#agama-api)
   - [Tipe Pelanggaran API](#tipe-pelanggaran-api)
   - [Status API](#status-api)
   - [Jabatan API](#jabatan-api)
   - [Golongan API](#golongan-api)
   - [Pendidikan API](#pendidikan-api)
   - [Jurusan API](#jurusan-api)
   - [Guru API](#guru-api)
   - [Kelas API](#kelas-api)
   - [Siswa API](#siswa-api)
   - [Pelanggaran API](#pelanggaran-api)
10. [Authorization](#authorization)
11. [API Documentation](#api-documentation)

## System Requirements

- Linux, Windows or MacOS
- Node.js v14 or later
- MySQL 5.7 or later
- npm (Node Package Manager)

## Tech Stack

- Nest JS
- Type ORM
- MySQL
- TypeScript
- Node JS

## Security

- Authentication
- Encryption and Hasing
- Authorization
- Cors
- Rate Limiting
- Helmet

## Installation

```bash
# Navigate to project repository
$ cd disciline_backend

# Install all dependencies
$ npm install
```

## Setup Environment Variable

```bash
# Change name file
$ cp .env.example .env

# Environment
PORT= # Your Port RESTful API
DATABASE_HOST= # Your Host Database
DATABASE_PORT= # Your Port Database
DATABASE_USERNAME= # Your Username Database
DATABASE_PASSWORD= # Your Password Database
DATABASE_SYNCHRONIZE= # Your Synchronize Database
JWT_SECRET= # Your Secret Key JWT
```

## Project Structure

```plaintext
NoteMatic/
|-- assets/                                         	# Assets file
|-- docs/  						# Documentation file
|-- dist/                                           	# Distribution file
|-- node_modules/                                   	# Node.js modules
|-- src/
|   |-- api/                                        	# API application
|   |   |-- guru/                           		# Guru API
|   |   |   |-- dto/                                	# Data transfer object (dto)
|   |   |   |-- entities/                           	# Entity tabel
|   |   |   |-- guru.controller.ts
|   |   |   |-- guru.module.ts
|   |   |   |-- guru.service.ts
|   |   |   |-- guru.validation.ts
|   |   |-- kelas/                        		# Kelas API
|   |   |   |-- dto/                                	# Data transfer object (dto)
|   |   |   |-- entities/                           	# Entity tabel
|   |   |   |-- kelas.controller.ts
|   |   |   |-- kelas.module.ts
|   |   |   |-- kelas.service.ts
|   |   |   |-- kelas.validation.ts
|   |   |-- master/                                 	# Master API application
|   |   |   |-- agama/					# Agama API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- agama.controller.ts
|   |   |   |	|-- agama.module.ts
|   |   |   |	|-- agama.validation.ts
|   |   |   |-- golongan/				# Golongan API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- golongan.controller.ts
|   |   |   |	|-- golongan.module.ts
|   |   |   |	|-- golongan.validation.ts
|   |   |   |-- jabatan/				# Jabatan API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- jabatan.controller.ts
|   |   |   |	|-- jabatan.module.ts
|   |   |   |	|-- jabatan.validation.ts
|   |   |   |-- jurusan/				# Jurusan API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- jurusan.controller.ts
|   |   |   |	|-- jurusan.module.ts
|   |   |   |	|-- jurusan.validation.ts
|   |   |   |-- pendidikan/				# Pendidikan API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- pendidikan.controller.ts
|   |   |   |	|-- pendidikan.module.ts
|   |   |   |	|-- pendidikan.validation.ts
|   |   |   |-- status/					# Status API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- status.controller.ts
|   |   |   |	|-- status.module.ts
|   |   |   |	|-- status.validation.ts
|   |   |   |-- tipe-pelanggaran/			# Tipe Pelanggaran API
|   |   |   |	|-- dto/				# Data transfer object (dto)
|   |   |   |	|-- entities/				# Entity tabel
|   |   |   |	|-- tipe-pelanggaran.controller.ts
|   |   |   |	|-- tipe-pelanggaran.module.ts
|   |   |   |	|-- tipe-pelanggaran.validation.ts
|   |   |-- pelanggaran/                           	# Pelanggaran API
|   |   |   |-- dto/                                	# Data transfer object (dto)
|   |   |   |-- entities/                           	# Entity tabel
|   |   |   |-- pelanggaran.controller.ts
|   |   |   |-- pelanggaran.module.ts
|   |   |   |-- pelanggaran.service.ts
|   |   |   |-- pelanggaran.validation.ts
|   |   |-- siswa/                            		# Siswa API
|   |   |   |-- dto/                                	# Data transfer object (dto)
|   |   |   |-- entities/                           	# Entity tabel
|   |   |   |-- siswa.controller.ts
|   |   |   |-- siswa.module.ts
|   |   |   |-- siswa.service.ts
|   |   |   |-- siswa.validation.ts
|   |   |-- users/                                  	# Users API
|   |   |   |-- dto/                                	# Data transfer object (dto)
|   |   |   |-- entities/                           	# Entity tabel
|   |   |   |-- users.controller.ts
|   |   |   |-- users.module.ts
|   |   |   |-- users.service.ts
|   |   |   |-- users.validation.ts
|   |   |-- api.module.ts                           	# API module
|   |-- common/                                     	# Common file
|   |   |-- database/
|   |   |-- decorator/
|   |   |-- dto/
|   |   |-- error/
|   |   |-- guard/
|   |   |-- libs/
|   |   |-- middleware/
|   |   |-- strategy/
|   |   |-- validation/
|   |   |-- common.module.ts                        	# Module common
|   |-- app.module.ts                               	# Root module for the application
|   |-- main.ts                                     	# Entry point for the application
|-- .env                                            	# Environment variables
|-- .eslintrc.js                                    	# Eslint file
|-- .gitignore                                      	# Git ignore file
|-- .prettier                                       	# Prettier formater file
|-- nest-cli.json                                   	# NestJS configuration
|-- package-lock.json                               	# Exact version dependencies
|-- package.json                                    	# Node.js project metadata
|-- README.md                                       	# Project README file
|-- tsconfig.build.json                             	# TypeScript build configuration
|-- tsconfig.json                                   	# TypeScript configuration
```

## Running The App

```bash
# watch mode
$ npm run start

# development mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

### Users API

|         Summary          |          Endpoint          | Method | Authorization |
| :----------------------: | :------------------------: | :----: | :-----------: |
|       Sign up user       |     /api/users/signup      |  POST  |       -       |
|       Sign in user       |     /api/users/signin      |  POST  |       -       |
| Get data user with token |         /api/users         |  GET   | Bearer Token  |
|     Update password      | /api/users/update-password |  PUT   | Bearer Token  |
|      Sign out user       |     /api/users/signout     | DELETE | Bearer Token  |

### Agama API

|       Summary        |          Endpoint           | Method | Authorization |
| :------------------: | :-------------------------: | :----: | :-----------: |
|     Create Agama     |      /api/master/agama      |  POST  | Bearer Token  |
|  Get All Data Agama  |      /api/master/agama      |  GET   | Bearer Token  |
| Get Data Agama By ID | /api/master/agama/{agamaId} |  GET   | Bearer Token  |
|     Update Agama     | /api/master/agama/{agamaId} |  PUT   | Bearer Token  |
|     Delete Agama     | /api/master/agama/{agamaId} | DELETE | Bearer Token  |

### Tipe Pelanggaran API

|             Summary             |                     Endpoint                     | Method | Authorization |
| :-----------------------------: | :----------------------------------------------: | :----: | :-----------: |
|     Create Tipe Pelanggaran     |           /api/master/tipe-pelanggaran           |  POST  | Bearer Token  |
|  Get All Data Tipe Pelanggaran  |           /api/master/tipe-pelanggaran           |  GET   | Bearer Token  |
| Get Data Tipe Pelanggaran By ID | /api/master/tipe-pelanggaran/{tipePelanggaranId} |  GET   | Bearer Token  |
|     Update Tipe Pelanggaran     | /api/master/tipe-pelanggaran/{tipePelanggaranId} |  PUT   | Bearer Token  |
|     Delete Tipe Pelanggaran     | /api/master/tipe-pelanggaran/{tipePelanggaranId} | DELETE | Bearer Token  |

### Status API

|        Summary        |           Endpoint            | Method | Authorization |
| :-------------------: | :---------------------------: | :----: | :-----------: |
|     Create Status     |      /api/master/status       |  POST  | Bearer Token  |
|  Get All Data Status  |      /api/master/status       |  GET   | Bearer Token  |
| Get Data Status By ID | /api/master/status/{statusId} |  GET   | Bearer Token  |
|     Update Status     | /api/master/status/{statusId} |  PUT   | Bearer Token  |
|     Delete Status     | /api/master/status/{statusId} | DELETE | Bearer Token  |

### Jabatan API

|        Summary         |            Endpoint             | Method | Authorization |
| :--------------------: | :-----------------------------: | :----: | :-----------: |
|     Create Jabatan     |       /api/master/jabatan       |  POST  | Bearer Token  |
|  Get All Data Jabatan  |       /api/master/jabatan       |  GET   | Bearer Token  |
| Get Data Jabatan By ID | /api/master/jabatan/{jabatanId} |  GET   | Bearer Token  |
|     Update Jabatan     | /api/master/jabatan/{jabatanId} |  PUT   | Bearer Token  |
|     Delete Jabatan     | /api/master/jabatan/{jabatanId} | DELETE | Bearer Token  |

### Golongan API

|         Summary         |             Endpoint              | Method | Authorization |
| :---------------------: | :-------------------------------: | :----: | :-----------: |
|     Create Golongan     |       /api/master/golongan        |  POST  | Bearer Token  |
|  Get All Data Golongan  |       /api/master/golongan        |  GET   | Bearer Token  |
| Get Data Golongan By ID | /api/master/golongan/{golonganId} |  GET   | Bearer Token  |
|     Update Golongan     | /api/master/golongan/{golonganId} |  PUT   | Bearer Token  |
|     Delete Golongan     | /api/master/golongan/{golonganId} | DELETE | Bearer Token  |

### Pendidikan API

|          Summary          |               Endpoint                | Method | Authorization |
| :-----------------------: | :-----------------------------------: | :----: | :-----------: |
|     Create Pendidikan     |        /api/master/pendidikan         |  POST  | Bearer Token  |
|  Get All Data Pendidikan  |        /api/master/pendidikan         |  GET   | Bearer Token  |
| Get Data Pendidikan By ID | /api/master/pendidikan/{pendidikanId} |  GET   | Bearer Token  |
|     Update Pendidikan     | /api/master/pendidikan/{pendidikanId} |  PUT   | Bearer Token  |
|     Delete Pendidikan     | /api/master/pendidikan/{pendidikanId} | DELETE | Bearer Token  |

### Jurusan API

|        Summary         |            Endpoint             | Method | Authorization |
| :--------------------: | :-----------------------------: | :----: | :-----------: |
|     Create Jurusan     |       /api/master/jurusan       |  POST  | Bearer Token  |
|  Get All Data Jurusan  |       /api/master/jurusan       |  GET   | Bearer Token  |
| Get Data Jurusan By ID | /api/master/jurusan/{jurusanId} |  GET   | Bearer Token  |
|     Update Jurusan     | /api/master/jurusan/{jurusanId} |  PUT   | Bearer Token  |
|     Delete Jurusan     | /api/master/jurusan/{jurusanId} | DELETE | Bearer Token  |

### Guru API

|       Summary       |      Endpoint      | Method | Authorization |
| :-----------------: | :----------------: | :----: | :-----------: |
|     Create Guru     |     /api/guru      |  POST  | Bearer Token  |
|  Get All Data Guru  |     /api/guru      |  GET   | Bearer Token  |
| Get Data Guru By ID | /api/guru/{guruId} |  GET   | Bearer Token  |
|     Update Guru     | /api/guru/{guruId} | PATCH  | Bearer Token  |
|     Delete Guru     | /api/guru/{guruId} | DELETE | Bearer Token  |

### Kelas API

|       Summary        |       Endpoint       | Method | Authorization |
| :------------------: | :------------------: | :----: | :-----------: |
|     Create Kelas     |      /api/kelas      |  POST  | Bearer Token  |
|  Get All Data Kelas  |      /api/kelas      |  GET   | Bearer Token  |
| Get Data Kelas By ID | /api/kelas/{kelasId} |  GET   | Bearer Token  |
|     Update Kelas     | /api/kelas/{kelasId} | PATCH  | Bearer Token  |
|     Delete Kelas     | /api/kelas/{kelasId} | DELETE | Bearer Token  |

### Siswa API

|       Summary        |       Endpoint       | Method | Authorization |
| :------------------: | :------------------: | :----: | :-----------: |
|     Create Siswa     |      /api/siswa      |  POST  | Bearer Token  |
|  Get All Data Siswa  |      /api/siswa      |  GET   | Bearer Token  |
| Get Data Siswa By ID | /api/siswa/{siswaId} |  GET   | Bearer Token  |
|     Update Siswa     | /api/siswa/{siswaId} | PATCH  | Bearer Token  |
|     Delete Siswa     | /api/siswa/{siswaId} | DELETE | Bearer Token  |

### Pelanggaran API

|         Summary          |             Endpoint             | Method | Authorization |
| :----------------------: | :------------------------------: | :----: | :-----------: |
|    Create Pelanggaran    |         /api/pelanggaran         |  POST  | Bearer Token  |
| Get All Data Pelanggaran |         /api/pelanggaran         |  GET   | Bearer Token  |
|  Get Pelanggaran By ID   | /api/pelanggaran/{pelanggaranId} |  GET   | Bearer Token  |
|    Update Pelanggaran    | /api/pelanggaran/{pelanggaranId} | PATCH  | Bearer Token  |

## Authorization

Use the following steps to get an authorization token:

- Log in using the /api/users/signin endpoints.
- Use the token received in the response to authorize further requests.

## API Documentation

- http://{your_url}/api/documentation
