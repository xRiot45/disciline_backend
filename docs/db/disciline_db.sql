-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: disciline
-- ------------------------------------------------------
-- Server version	8.0.37-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agama`
--

DROP TABLE IF EXISTS `agama`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agama` (
  `id` varchar(36) NOT NULL,
  `nama_agama` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agama`
--

LOCK TABLES `agama` WRITE;
/*!40000 ALTER TABLE `agama` DISABLE KEYS */;
INSERT INTO `agama` VALUES ('31ed04b0-6fd3-42fb-9616-9e4da4ac47f4','Buddha','2024-07-01 14:00:46.146145','2024-07-01 14:00:46.146145'),('3a9b3a2d-68ef-42df-a4e5-ce61afa7be67','Katholik','2024-06-27 05:10:48.810417','2024-06-27 05:10:48.810417'),('608d60dc-48eb-4244-a2a5-40e31a8554de','Islam','2024-06-27 05:11:08.040149','2024-06-27 05:11:08.040149'),('afb3298c-e6b3-49b2-bc48-092f051543f8','Konghucu','2024-07-01 14:01:05.568512','2024-07-01 14:01:05.568512'),('e8a400fe-c49c-4a61-bed7-92bb623c5f3d','Kristen','2024-07-01 14:01:14.460879','2024-07-01 14:01:14.460879'),('f212f277-6a1a-42cc-89f4-f3b904ec5b5e','Hindu','2024-07-04 12:07:24.790037','2024-07-04 12:07:24.790037');
/*!40000 ALTER TABLE `agama` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `golongan`
--

DROP TABLE IF EXISTS `golongan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `golongan` (
  `id` varchar(36) NOT NULL,
  `nama_golongan` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `golongan`
--

LOCK TABLES `golongan` WRITE;
/*!40000 ALTER TABLE `golongan` DISABLE KEYS */;
INSERT INTO `golongan` VALUES ('0dda719d-2a4e-426a-bd08-31ed5244e567','Golongan III B','2024-07-04 12:26:22.673321','2024-07-04 12:26:22.673321'),('15e52854-4cf5-4c62-88c5-5671d6c4aef3','Golongan I D','2024-06-27 12:35:04.372031','2024-07-04 12:25:26.000000'),('163e3331-7ff9-4fc3-a53b-845540bffc06','Golongan IV B','2024-07-04 12:26:40.193400','2024-07-04 12:26:40.193400'),('2b1193a6-9920-4220-b1a7-b95c75d82581','Golongan II D','2024-07-04 12:25:54.210678','2024-07-04 12:25:54.210678'),('2c3b6647-9e6b-4f27-856d-6a24d1fab462','Golongan IV A','2024-07-04 12:26:34.985616','2024-07-04 12:26:34.985616'),('3947f4f8-0a4b-4ed5-abad-5fb15f107477','Golongan II B','2024-07-04 12:25:46.619133','2024-07-04 12:25:46.619133'),('39ac4bd1-71bb-4782-b7c9-4aa8293e0eea','Golongan III A','2024-07-04 12:26:19.338124','2024-07-04 12:26:19.338124'),('3e2e22b7-971b-43f1-95fe-1d79ac70a967','Golongan III D','2024-07-04 12:26:29.496093','2024-07-04 12:26:29.496093'),('59843669-5678-4ebe-b729-8dc464733dd0','Golongan III C','2024-07-04 12:26:26.137668','2024-07-04 12:26:26.137668'),('696d31ce-89cc-43f5-89d7-62110651ae7c','Golongan I B','2024-06-27 12:34:57.857875','2024-07-04 12:25:17.000000'),('9479f830-2961-430b-ae09-ebcbb7bff3af','Golongan IV C','2024-07-04 12:26:44.336024','2024-07-04 12:26:44.336024'),('a8e184b2-92c3-40cc-ad86-bdce68bf3db9','Golongan I A','2024-06-27 12:34:54.343884','2024-07-04 12:25:11.000000'),('d180c53d-063d-4ee1-b61d-4ec4f51c40e8','Golongan II A','2024-07-04 12:25:39.786919','2024-07-04 12:25:39.786919'),('e2d90400-9c0b-42b5-a429-e78e0f68ead2','Tidak Ada Golongan','2024-06-27 12:34:32.761236','2024-06-27 12:34:32.761236'),('ebeb4b1e-2605-4345-b78d-fbf434dc6015','Golongan I C','2024-06-27 12:35:01.751824','2024-07-04 12:25:22.000000'),('f55d46e5-1272-4896-9c70-a1cba306d1fc','Golongan IV D','2024-07-04 12:26:55.279506','2024-07-04 12:26:55.279506'),('fbe446a0-3958-46d5-9dea-c79345254de7','Golongan II C','2024-07-04 12:25:51.152382','2024-07-04 12:25:51.152382');
/*!40000 ALTER TABLE `golongan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guru`
--

DROP TABLE IF EXISTS `guru`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guru` (
  `id` varchar(36) NOT NULL,
  `nama_lengkap` varchar(50) NOT NULL,
  `nip` varchar(50) NOT NULL,
  `jenis_kelamin` varchar(20) NOT NULL,
  `alamat` text NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `no_telp` varchar(20) NOT NULL,
  `statusId` varchar(36) DEFAULT NULL,
  `jabatanId` varchar(36) DEFAULT NULL,
  `golonganId` varchar(36) DEFAULT NULL,
  `agamaId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1658ecee84518b5195a4a6e17cf` (`statusId`),
  KEY `FK_dc8a52e8d3bdbef1267de2049e4` (`jabatanId`),
  KEY `FK_b92f87c8c830967ba605af33daa` (`golonganId`),
  KEY `FK_350f3277b62cf851344f7e51415` (`agamaId`),
  CONSTRAINT `FK_1658ecee84518b5195a4a6e17cf` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`),
  CONSTRAINT `FK_350f3277b62cf851344f7e51415` FOREIGN KEY (`agamaId`) REFERENCES `agama` (`id`),
  CONSTRAINT `FK_b92f87c8c830967ba605af33daa` FOREIGN KEY (`golonganId`) REFERENCES `golongan` (`id`),
  CONSTRAINT `FK_dc8a52e8d3bdbef1267de2049e4` FOREIGN KEY (`jabatanId`) REFERENCES `jabatan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guru`
--

LOCK TABLES `guru` WRITE;
/*!40000 ALTER TABLE `guru` DISABLE KEYS */;
INSERT INTO `guru` VALUES ('095672eb-2637-492a-add1-bafa54057935','Citra Larasati	','198510056','Perempuan','Jl. Diponegoro No. 45, Surabaya','2024-07-04 12:37:26.678331','2024-07-04 12:37:26.678331','083456789012','42617efb-3e43-4b24-a191-89e0d416c7c1','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','e2d90400-9c0b-42b5-a429-e78e0f68ead2','3a9b3a2d-68ef-42df-a4e5-ce61afa7be67'),('0a237945-0d77-4952-9f41-01a7b1b5486d','Budi Santoso	','197512034','Laki-laki','Jl. Sudirman No. 23, Bandung','2024-07-04 12:36:26.509790','2024-07-04 12:36:26.509790','082345678901','dae3fe0b-d6fa-451e-b0f9-76bd0fcfa29e','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','e2d90400-9c0b-42b5-a429-e78e0f68ead2','e8a400fe-c49c-4a61-bed7-92bb623c5f3d'),('2b9666ab-86fe-4c65-aa3b-3b5634a7fedf','Laila Permata Sari','199207174','Perempuan','Jl. Gajah Mada No. 223, Denpasar','2024-07-04 12:45:58.590895','2024-07-04 12:45:58.590895','083456789933','e51d1359-652e-4d7f-80ed-cd14a388f762','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','fbe446a0-3958-46d5-9dea-c79345254de7','e8a400fe-c49c-4a61-bed7-92bb623c5f3d'),('2bd29a20-1f8c-408a-9e34-5b2bb86b31e4','Ahmad Fauzi','196511021','Laki-laki','Jl. Merdeka No. 10, Jakarta','2024-07-04 12:35:17.155287','2024-07-04 12:35:17.155287','081234567890','e51d1359-652e-4d7f-80ed-cd14a388f762','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','59843669-5678-4ebe-b729-8dc464733dd0','608d60dc-48eb-4244-a2a5-40e31a8554de'),('6af08c59-b5ad-41bd-82a9-b03702e362f5','Kurniawan Subagyo','198111162','Laki-laki','Jl. Sultan Agung No. 201, Malang','2024-07-04 12:45:25.463051','2024-07-04 12:45:25.463051','082345678922','dae3fe0b-d6fa-451e-b0f9-76bd0fcfa29e','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','e2d90400-9c0b-42b5-a429-e78e0f68ead2','608d60dc-48eb-4244-a2a5-40e31a8554de'),('91d2d917-c1a3-4c53-bfe2-84ce40a41111','Gita Pratiwi','197908112','Perempuan','Jl. Jend. Sudirman No. 123, Semarang','2024-07-04 12:40:29.506873','2024-07-04 12:40:29.506873','087890123456','dae3fe0b-d6fa-451e-b0f9-76bd0fcfa29e','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','e2d90400-9c0b-42b5-a429-e78e0f68ead2','f212f277-6a1a-42cc-89f4-f3b904ec5b5e'),('9e43776a-5508-45bc-802f-255fbccdd33f','Irma Suryani','197105146','Perempuan','Jl. Gatot Subroto No. 167, Bekasi','2024-07-04 12:41:39.752963','2024-07-04 12:41:39.752963','089012345678','42617efb-3e43-4b24-a191-89e0d416c7c1','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','e2d90400-9c0b-42b5-a429-e78e0f68ead2','afb3298c-e6b3-49b2-bc48-092f051543f8'),('c3a3208e-5a82-4ace-a481-b6125781261b','Dewi Saraswati','199012078','Perempuan','Jl. Gatot Subroto No. 67, Medan','2024-07-04 12:38:14.989276','2024-07-04 12:38:14.989276','084567890123','e51d1359-652e-4d7f-80ed-cd14a388f762','24f058db-961a-49d0-8658-2c83ec7564cc','3e2e22b7-971b-43f1-95fe-1d79ac70a967','608d60dc-48eb-4244-a2a5-40e31a8554de'),('ccd5cdd1-b2fa-454a-a129-f743e7e28e4b','Endah Wulandari','197612091','Perempuan','Jl. Ahmad Yani No. 89, Yogyakarta','2024-07-04 12:39:03.155088','2024-07-04 12:39:03.155088','085678901234','dae3fe0b-d6fa-451e-b0f9-76bd0fcfa29e','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','e2d90400-9c0b-42b5-a429-e78e0f68ead2','31ed04b0-6fd3-42fb-9616-9e4da4ac47f4'),('d781f1f0-76d2-4399-a42b-fe7e273acc7c','Joko Supriyanto','198507158','Laki-laki','Jl. Ahmad Yani No. 189, Tangerang','2024-07-04 12:42:19.222890','2024-07-04 12:42:19.222890','081345678912','e51d1359-652e-4d7f-80ed-cd14a388f762','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','ebeb4b1e-2605-4345-b78d-fbf434dc6015','608d60dc-48eb-4244-a2a5-40e31a8554de'),('dee8b6fe-a07b-46dc-b6b5-20164afbe6a9','Hendra Kurniawan','198612135','Laki-laki','Jl. Diponegoro No. 145, Palembang','2024-07-04 12:41:06.113708','2024-07-04 12:41:06.113708','088901234567','e51d1359-652e-4d7f-80ed-cd14a388f762','edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','15e52854-4cf5-4c62-88c5-5671d6c4aef3','3a9b3a2d-68ef-42df-a4e5-ce61afa7be67'),('eb6df30d-0af3-4e08-991b-ab10c5b4f098','Fajar Maulana','198103105','Laki-laki','Jl. Asia Afrika No. 101, Malang','2024-07-04 12:39:53.882596','2024-07-04 12:39:53.882596','086789012345','e51d1359-652e-4d7f-80ed-cd14a388f762','c3e6d789-6282-4fd0-bfcb-acf02b2318d5','59843669-5678-4ebe-b729-8dc464733dd0','608d60dc-48eb-4244-a2a5-40e31a8554de');
/*!40000 ALTER TABLE `guru` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jabatan`
--

DROP TABLE IF EXISTS `jabatan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jabatan` (
  `id` varchar(36) NOT NULL,
  `nama_jabatan` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jabatan`
--

LOCK TABLES `jabatan` WRITE;
/*!40000 ALTER TABLE `jabatan` DISABLE KEYS */;
INSERT INTO `jabatan` VALUES ('24f058db-961a-49d0-8658-2c83ec7564cc','Koordinator BK','2024-07-04 12:21:18.611698','2024-07-04 12:21:18.611698'),('3b7b6da9-d757-4f63-b71d-a8a593411ba3','Wakil Kepala Sekolah','2024-07-04 12:21:25.476485','2024-07-04 12:21:25.476485'),('c3e6d789-6282-4fd0-bfcb-acf02b2318d5','Kepala Sekolah','2024-07-04 12:21:30.883055','2024-07-04 12:21:30.883055'),('edad91d9-48fa-4e7c-a8ef-f1e27be9efe3','Wali Kelas','2024-07-04 12:20:06.780711','2024-07-04 12:20:06.780711');
/*!40000 ALTER TABLE `jabatan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jurusan`
--

DROP TABLE IF EXISTS `jurusan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jurusan` (
  `id` varchar(36) NOT NULL,
  `nama_jurusan` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jurusan`
--

LOCK TABLES `jurusan` WRITE;
/*!40000 ALTER TABLE `jurusan` DISABLE KEYS */;
INSERT INTO `jurusan` VALUES ('6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','IPA','2024-06-27 13:17:40.166185','2024-06-27 13:17:40.166185'),('ee1f0b89-9dc0-486c-89ac-84c39e55599d','IPS','2024-06-27 13:17:36.055626','2024-06-27 13:17:36.055626');
/*!40000 ALTER TABLE `jurusan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kelas` (
  `id` varchar(36) NOT NULL,
  `nama_kelas` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `jurusanId` varchar(36) DEFAULT NULL,
  `guruId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_8371ff77b56ed274b268035292` (`guruId`),
  KEY `FK_5d841d667a2fa5e42311085688d` (`jurusanId`),
  CONSTRAINT `FK_5d841d667a2fa5e42311085688d` FOREIGN KEY (`jurusanId`) REFERENCES `jurusan` (`id`),
  CONSTRAINT `FK_8371ff77b56ed274b268035292d` FOREIGN KEY (`guruId`) REFERENCES `guru` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES ('18786ac8-60bc-4771-a1b6-f78db56829e9','Kelas XII B IIS','2024-07-04 12:49:25.195003','2024-07-04 12:56:36.000000','ee1f0b89-9dc0-486c-89ac-84c39e55599d','eb6df30d-0af3-4e08-991b-ab10c5b4f098'),('1de33809-645d-402a-bb8a-a3e33832f02b','Kelas X A MIA','2024-07-04 12:56:57.381195','2024-07-04 12:56:57.381195','6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','91d2d917-c1a3-4c53-bfe2-84ce40a41111'),('29fc1ff9-a1b4-4ce5-b4a6-c947691b440c','Kelas X B MIA','2024-07-04 12:57:08.106047','2024-07-04 12:57:08.106047','6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','dee8b6fe-a07b-46dc-b6b5-20164afbe6a9'),('3449d19d-3717-4e66-b27c-5bb1dc14f4fb','Kelas XI B MIA','2024-07-04 12:57:30.801546','2024-07-04 12:57:30.801546','6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','d781f1f0-76d2-4399-a42b-fe7e273acc7c'),('5c006592-84a9-43a1-a087-9f927f3eef03','Kelas X A IIS','2024-07-04 12:43:44.616570','2024-07-04 12:56:15.000000','ee1f0b89-9dc0-486c-89ac-84c39e55599d','0a237945-0d77-4952-9f41-01a7b1b5486d'),('715bdacb-57de-44bf-ac0e-bc0e0d29cd83','Kelas X B IIS','2024-07-04 12:44:14.039390','2024-07-04 12:56:23.000000','ee1f0b89-9dc0-486c-89ac-84c39e55599d','2bd29a20-1f8c-408a-9e34-5b2bb86b31e4'),('96851457-1003-48f2-b7c9-3f6b7ed2ff1d','Kelas XII A IIS','2024-07-04 12:49:10.410539','2024-07-04 12:56:33.000000','ee1f0b89-9dc0-486c-89ac-84c39e55599d','ccd5cdd1-b2fa-454a-a129-f743e7e28e4b'),('a96aba29-d6a2-430c-a5b7-695b0862a466','Kelas XI A MIA','2024-07-04 12:57:16.201508','2024-07-04 12:57:16.201508','6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','9e43776a-5508-45bc-802f-255fbccdd33f'),('b20d9c6e-324e-4b76-a277-5a8f751928a5','Kelas XII A MIA','2024-07-04 12:57:47.400648','2024-07-04 12:57:47.400648','6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','6af08c59-b5ad-41bd-82a9-b03702e362f5'),('cf1d7090-4c80-48c7-b35b-492b901c86a8','Kelas XII B MIA','2024-07-04 12:57:54.128695','2024-07-04 12:57:54.128695','6a6eaf70-a2a3-4763-8e03-b3e2b7c070d4','2b9666ab-86fe-4c65-aa3b-3b5634a7fedf'),('e63b79f0-2813-45a3-8390-64df4b86320b','Kelas XI A IIS','2024-07-04 12:48:46.757112','2024-07-04 12:56:26.000000','ee1f0b89-9dc0-486c-89ac-84c39e55599d','095672eb-2637-492a-add1-bafa54057935'),('f561b2d3-a875-4036-b878-0f2c57189a46','Kelas XI B IIS','2024-07-04 12:48:57.717858','2024-07-04 12:56:29.000000','ee1f0b89-9dc0-486c-89ac-84c39e55599d','c3a3208e-5a82-4ace-a481-b6125781261b');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelanggaran`
--

DROP TABLE IF EXISTS `pelanggaran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pelanggaran` (
  `id` varchar(36) NOT NULL,
  `keterangan` text,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `tipePelanggaranId` varchar(36) DEFAULT NULL,
  `siswaId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_9a5d5f6615776fda878353d419f` (`siswaId`),
  KEY `FK_1bad53ecd67ebe6505e95bd3d22` (`tipePelanggaranId`),
  CONSTRAINT `FK_1bad53ecd67ebe6505e95bd3d22` FOREIGN KEY (`tipePelanggaranId`) REFERENCES `tipe_pelanggaran` (`id`),
  CONSTRAINT `FK_9a5d5f6615776fda878353d419f` FOREIGN KEY (`siswaId`) REFERENCES `siswa` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelanggaran`
--

LOCK TABLES `pelanggaran` WRITE;
/*!40000 ALTER TABLE `pelanggaran` DISABLE KEYS */;
INSERT INTO `pelanggaran` VALUES ('18641a88-0a6b-4542-a1cd-acbe1d4699b2','Meniru semua jawaban PR punya teman ','2024-07-04 13:12:07.271168','2024-07-04 13:12:07.271168','58273d93-126f-4495-b4ed-4e0d86f49ae6','49e9b7f5-0d11-4e3f-9c7c-cc4d82752e70'),('4381e518-6ef2-4a34-a4cc-47a4b8d28d1e','Menggunakan pakaian pramuka di hari selasa','2024-07-04 13:13:33.109712','2024-07-04 13:13:33.109712','acb7a0da-3141-4a53-ad94-e3fb2a81569c','18ba8086-6f06-458f-b7ee-ad6bda66bd5f'),('4a87a446-5515-42a0-a56d-80feb68bfda2','Tidak ada ikat pinggang','2024-07-04 13:10:47.062982','2024-07-04 13:11:05.000000','bebb6d44-4250-42b2-b9fa-a27fb05d8d06','d08d84d7-ef9a-48ef-a593-0c542899da7d'),('5d1e6ee4-3ab2-4c3d-a0f5-ff4ec5ea42ad','Tidak mengerjakan PR Biologi','2024-07-04 13:12:35.281047','2024-07-04 13:12:35.281047','bbde9b5a-7c38-4dff-a96d-b17ac12bc8b0','55e26993-d75d-42a3-8d28-a320adf21a33'),('82c7be8f-2003-4107-a1ea-20f77861439d','Mencontek saat ulangan matematika','2024-07-04 13:11:45.348735','2024-07-04 13:11:45.348735','f10d1644-ef82-4421-98c6-fb71c77cdc83','ac5a82ac-86ce-454f-b8b9-0bb8a8c2b595'),('843d58fc-b48d-40d2-a981-dea6143e9ec2','Membully teman sekelasnya','2024-07-04 13:14:17.889953','2024-07-04 13:14:17.889953','0be0c502-42ee-43a2-9dcf-a43e2958505a','0bb95b27-0c81-416c-8688-364d31dbbb04'),('8bed8379-d191-4cf8-bd8c-304e97c436ae','Tidak membawa buku paket, buku catatan dan pulpen','2024-07-04 13:11:25.779175','2024-07-04 13:11:25.779175','b1a2a5d2-baae-4828-a5f3-3d2db1d2ff77','47540073-8c5d-4835-aac2-ade8999513a6'),('97d4b44d-fc3a-4041-9bb4-9d80c1d3fcae','Pergi ke kantin','2024-07-04 13:13:00.987285','2024-07-04 13:13:00.987285','d87269a3-dcc7-4bf5-8beb-59cbeb291f66','1ac9e414-e4a1-4f56-ad45-51b7e1218232'),('af72182a-5bdc-4eed-9baf-c29cbdcf41bb','Berkata kotor dengan teman sekelas nya','2024-07-04 13:14:00.823375','2024-07-04 13:14:00.823375','261aecae-e630-4dbf-aa6a-44d59ab449de','a5d2012e-ed93-4fb7-87e1-be32dc539158'),('c6cf6710-1559-470a-96d7-9bd46ef16253','Terlambat 30 Menit','2024-07-04 13:10:31.710024','2024-07-04 13:10:31.710024','a9da840e-5010-4696-9463-f12b92700a3c','4a47555f-ad26-4685-93bb-c1d0c29f0190');
/*!40000 ALTER TABLE `pelanggaran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pendidikan`
--

DROP TABLE IF EXISTS `pendidikan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pendidikan` (
  `id` varchar(36) NOT NULL,
  `nama_pendidikan` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pendidikan`
--

LOCK TABLES `pendidikan` WRITE;
/*!40000 ALTER TABLE `pendidikan` DISABLE KEYS */;
INSERT INTO `pendidikan` VALUES ('0236fc7e-6649-49a1-805b-d8d4073e6840','D4','2024-06-27 12:55:31.966245','2024-06-27 12:55:31.966245'),('1da74ad4-85f4-4302-86f8-8a22118f4ce9','S3','2024-06-27 12:55:39.008569','2024-06-27 12:55:39.008569'),('49af5c6a-6933-4af1-8e39-5bfcc870cd8e','D3','2024-06-27 12:55:28.809346','2024-06-27 12:55:28.809346'),('53490c7e-b9dc-4cfd-b91c-5cdf88416af3','D1','2024-06-27 12:55:26.404832','2024-06-27 12:55:26.404832'),('639933cb-07fc-4838-acee-76a1c000a463','SMA','2024-06-27 12:55:24.250882','2024-06-27 12:55:24.250882'),('77593c1e-be5c-415c-a626-5731a4faac3c','SMP','2024-06-27 12:55:21.521618','2024-06-27 12:55:21.521618'),('9c2fc86a-a2db-4ad6-8531-7298b046a772','SD','2024-06-27 12:55:18.732780','2024-06-27 12:55:18.732780'),('9eab7ee1-69d3-40d9-8ac2-6f094ef56548','S2','2024-06-27 12:55:36.006073','2024-06-27 12:55:36.006073'),('bf5bb607-79bb-4459-9e0b-f79fc77cc049','TK','2024-06-27 12:55:16.052119','2024-06-27 12:55:16.052119'),('fb85c9aa-a282-4445-b699-38e4f3cea83e','S1','2024-06-27 12:55:33.963629','2024-06-27 12:55:33.963629');
/*!40000 ALTER TABLE `pendidikan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `siswa`
--

DROP TABLE IF EXISTS `siswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `siswa` (
  `id` varchar(36) NOT NULL,
  `nama_lengkap` varchar(50) NOT NULL,
  `nis` varchar(20) NOT NULL,
  `nisn` varchar(20) NOT NULL,
  `tanggal_lahir` varchar(50) NOT NULL,
  `tempat_lahir` varchar(100) NOT NULL,
  `jenis_kelamin` varchar(20) NOT NULL,
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `agamaId` varchar(36) DEFAULT NULL,
  `kelasId` varchar(36) DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `no_telp_wali` varchar(20) NOT NULL,
  `nama_wali` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3d103a6139acefd546417036f72` (`agamaId`),
  KEY `FK_b93fa8b4609e8f9a311dba44590` (`kelasId`),
  CONSTRAINT `FK_3d103a6139acefd546417036f72` FOREIGN KEY (`agamaId`) REFERENCES `agama` (`id`),
  CONSTRAINT `FK_b93fa8b4609e8f9a311dba44590` FOREIGN KEY (`kelasId`) REFERENCES `kelas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `siswa`
--

LOCK TABLES `siswa` WRITE;
/*!40000 ALTER TABLE `siswa` DISABLE KEYS */;
INSERT INTO `siswa` VALUES ('0bb95b27-0c81-416c-8688-364d31dbbb04','Rini Cahyani','01234','56789','2022-10-05T17:00:00.000Z','Bandung','Perempuan','2024-07-04 13:09:48.850483','608d60dc-48eb-4244-a2a5-40e31a8554de','3449d19d-3717-4e66-b27c-5bb1dc14f4fb','2024-07-04 13:09:48.850483','08117788990','Bapak Andi',' Jl. Melati No. 9, Bandung'),('18ba8086-6f06-458f-b7ee-ad6bda66bd5f','Yulia Sari','89012','34567','2022-10-18T17:00:00.000Z','Palembang','Perempuan','2024-07-04 13:07:48.641739','e8a400fe-c49c-4a61-bed7-92bb623c5f3d','29fc1ff9-a1b4-4ce5-b4a6-c947691b440c','2024-07-04 13:07:48.641739','08199887766','Bapak Agus','Jl. Kenanga No. 7, Palembang'),('1ac9e414-e4a1-4f56-ad45-51b7e1218232','Adi Nugroho','78901','23456','2022-09-13T17:00:00.000Z','Makassar','Laki-laki','2024-07-04 13:06:59.088260','f212f277-6a1a-42cc-89f4-f3b904ec5b5e','1de33809-645d-402a-bb8a-a3e33832f02b','2024-07-04 13:06:59.088260','08771234567','Ibu Retno','Jl. Pahlawan No. 12, Makassar'),('47540073-8c5d-4835-aac2-ade8999513a6','Bambang Wijaya','34567','89012','2022-08-15T17:00:00.000Z','Surabaya','Laki-laki','2024-07-04 13:02:39.778494','3a9b3a2d-68ef-42df-a4e5-ce61afa7be67','e63b79f0-2813-45a3-8390-64df4b86320b','2024-07-04 13:02:39.778494','08111223344','Pak Hadi','Jl. Flamboyan No. 8, Surabaya'),('49e9b7f5-0d11-4e3f-9c7c-cc4d82752e70','Rizki Pratama','56789','01234','2022-10-04T17:00:00.000Z','Medan','Laki-laki','2024-07-04 13:04:47.423855','afb3298c-e6b3-49b2-bc48-092f051543f8','96851457-1003-48f2-b7c9-3f6b7ed2ff1d','2024-07-04 13:04:47.423855','08567890123','bu Siti','Jl. Pelangi No. 3, Medan'),('4a47555f-ad26-4685-93bb-c1d0c29f0190','Ahmad Fadilah','12345','67890','2022-05-02T17:00:00.000Z','Jakarta','Laki-laki','2024-07-04 13:00:41.899640','608d60dc-48eb-4244-a2a5-40e31a8554de','5c006592-84a9-43a1-a087-9f927f3eef03','2024-07-04 13:00:41.899640','08123456789','Budi Santoso','Jl. Merdeka No. 10, Jakarta'),('55e26993-d75d-42a3-8d28-a320adf21a33','Lia Indah','67890','12345','2022-09-13T17:00:00.000Z','Semarang','Perempuan','2024-07-04 13:05:40.247277','e8a400fe-c49c-4a61-bed7-92bb623c5f3d','18786ac8-60bc-4771-a1b6-f78db56829e9','2024-07-04 13:05:40.247277','08133445566','Bapak Joko','Jl. Mangga No. 25, Semarang'),('a5d2012e-ed93-4fb7-87e1-be32dc539158','Hadi Setiawan','90123','45678','2022-09-07T17:00:00.000Z','Surabaya','Laki-laki','2024-07-04 13:08:48.747103','31ed04b0-6fd3-42fb-9616-9e4da4ac47f4','a96aba29-d6a2-430c-a5b7-695b0862a466','2024-07-04 13:08:48.747103','08560011223','Ibu Yanti','Jl. Dahlia No. 30, Surabaya'),('ac5a82ac-86ce-454f-b8b9-0bb8a8c2b595','Maya Puspita','45678','90123','2022-08-28T17:00:00.000Z','Yogyakarta','Perempuan','2024-07-04 13:03:46.256659','31ed04b0-6fd3-42fb-9616-9e4da4ac47f4','f561b2d3-a875-4036-b878-0f2c57189a46','2024-07-04 13:03:46.256659','08223344556','Ibu Dewi','Jl. Gajah Mada No. 15, Yogyakarta'),('d08d84d7-ef9a-48ef-a593-0c542899da7d','Siti Rahma','23456','78901','2022-08-09T17:00:00.000Z','Bandung','Perempuan','2024-07-04 13:01:40.505550','608d60dc-48eb-4244-a2a5-40e31a8554de','715bdacb-57de-44bf-ac0e-bc0e0d29cd83','2024-07-04 13:01:40.505550','08765432109','Ibu Susanti','Jl. Mawar No. 5, Bandung');
/*!40000 ALTER TABLE `siswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` varchar(36) NOT NULL,
  `nama_status` varchar(25) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES ('42617efb-3e43-4b24-a191-89e0d416c7c1','Kontrak','2024-07-04 12:12:53.070268','2024-07-04 12:12:53.070268'),('dae3fe0b-d6fa-451e-b0f9-76bd0fcfa29e','Honorer','2024-07-04 12:12:46.247806','2024-07-04 12:12:46.247806'),('e51d1359-652e-4d7f-80ed-cd14a388f762','PNS','2024-07-04 12:12:38.055133','2024-07-04 12:12:38.055133');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipe_pelanggaran`
--

DROP TABLE IF EXISTS `tipe_pelanggaran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipe_pelanggaran` (
  `id` varchar(36) NOT NULL,
  `nama_tipe_pelanggaran` varchar(50) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipe_pelanggaran`
--

LOCK TABLES `tipe_pelanggaran` WRITE;
/*!40000 ALTER TABLE `tipe_pelanggaran` DISABLE KEYS */;
INSERT INTO `tipe_pelanggaran` VALUES ('0a76c86f-4f94-4633-be2c-144439578cc9','Bolos','2024-07-04 12:31:20.683317','2024-07-04 12:31:20.683317'),('0be0c502-42ee-43a2-9dcf-a43e2958505a','Membully','2024-07-04 12:31:31.190921','2024-07-04 12:31:31.190921'),('18b40121-9c7e-40d1-93f0-d8f1705e8f98','Tidak menghormati guru','2024-07-04 12:31:10.270753','2024-07-04 12:31:10.270753'),('1a0a3d57-f772-4fe7-af4e-5026b908d020','Tidak mematuhi aturan kegiatan','2024-07-04 12:31:53.806369','2024-07-04 12:31:53.806369'),('2178e759-67ee-478c-b567-19ceb6fdf030','Mencuri','2024-07-04 12:31:36.998808','2024-07-04 12:31:36.998808'),('261aecae-e630-4dbf-aa6a-44d59ab449de','Berkata kasar','2024-07-04 12:30:30.230932','2024-07-04 12:30:30.230932'),('2e2ae37d-183d-4da7-b718-fc3da86562c7','Merusak fasilitas sekolah','2024-07-04 12:31:42.198794','2024-07-04 12:31:42.198794'),('4fc1f1a8-676c-4a11-a556-8dc0b951913f','Merokok di lingkungan sekolah','2024-07-04 12:30:53.070839','2024-07-04 12:30:53.070839'),('4fd0c072-d6bb-4c02-ac90-75ef518d8665','Menggunakan alat elektronik saat pelajaran','2024-07-04 12:31:03.488801','2024-07-04 12:31:03.488801'),('50b4da62-48b5-4ada-a4e8-a1e11ca3d594','Melawan atau membangkang','2024-07-04 12:31:15.956398','2024-07-04 12:31:15.956398'),('58273d93-126f-4495-b4ed-4e0d86f49ae6','Plagiarisme','2024-06-27 06:23:09.917632','2024-06-27 06:23:09.917632'),('6356be84-3d95-42df-bf2e-fc5906bc331e','Berkelahi','2024-07-04 12:31:25.105550','2024-07-04 12:31:25.105550'),('69cf9b02-270c-4445-b117-ea0440bdb44b','Membuang sampah sembarangan','2024-07-04 12:32:00.478203','2024-07-04 12:32:00.478203'),('742138f7-701c-4d67-9621-f33480536955','Merusak tanaman','2024-07-04 12:32:06.134168','2024-07-04 12:32:06.134168'),('7c7c1958-baed-4c94-89b6-6f9b1b24a87b','Pelecehan verbal atau fisik','2024-07-04 12:30:40.582829','2024-07-04 12:30:40.582829'),('9b29054d-569b-426a-8856-74836999f4e4','Berbohong','2024-07-04 12:30:34.693234','2024-07-04 12:30:34.693234'),('a9da840e-5010-4696-9463-f12b92700a3c','Terlambat Masuk Sekolah','2024-06-27 06:22:42.882951','2024-06-27 06:22:42.882951'),('acb7a0da-3141-4a53-ad94-e3fb2a81569c','Tidak memakai seragam yang sesuai','2024-07-04 12:30:21.975483','2024-07-04 12:30:21.975483'),('b1a2a5d2-baae-4828-a5f3-3d2db1d2ff77','Tidak Membawa Perlengkapan Sekolah','2024-06-27 06:22:59.810048','2024-06-27 06:22:59.810048'),('bbde9b5a-7c38-4dff-a96d-b17ac12bc8b0','Tidak Mengerjakan Tugas','2024-06-27 06:23:14.921805','2024-06-27 06:23:14.921805'),('bebb6d44-4250-42b2-b9fa-a27fb05d8d06','Tidak Menggunakan Seragam dengan Benar','2024-06-27 06:22:53.227022','2024-06-27 06:22:53.227022'),('d87269a3-dcc7-4bf5-8beb-59cbeb291f66','Keluar Kelas Tanpa Izin','2024-07-04 12:29:53.249008','2024-07-04 12:29:53.249008'),('db0fd66b-796f-47c0-94f4-06699f08f5a3','Tidak mengikuti kegiatan wajib','2024-07-04 12:31:47.710803','2024-07-04 12:31:47.710803'),('e4e0744e-cbe5-4684-a2dc-5599aed861c3','Membawa barang terlarang','2024-07-04 12:30:47.318564','2024-07-04 12:30:47.318564'),('f10d1644-ef82-4421-98c6-fb71c77cdc83','Mencontek','2024-06-27 06:23:05.991513','2024-06-27 06:23:05.991513');
/*!40000 ALTER TABLE `tipe_pelanggaran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('04b61850-0089-4bd0-a382-95e49a232531','admin2','$2b$12$cLkMEt2QH6lbbAm.qIuliexQrRA9y9/23e7NS50x6PXV5SMFIJLLq','admin','2024-07-04 06:04:30.207082','2024-07-04 06:04:30.207082'),('53035a71-70a1-4d5a-8e5a-37ed5f92d994','test1234','$2b$12$2fdXO3OqmPeHq9DtqqI5z.QlYpsYRH/zZhkkJ7KWJj.5nA/lmgaT6','admin','2024-06-27 04:32:50.617817','2024-06-27 04:32:50.617817'),('5bc71f7e-d3bc-413c-b87a-db2324e4cdc9','admin1','$2b$12$rgFQ6RGhobWEXMwBse3Jqu5v9pFwnZW24O5M6iWcVhqQEIzD6jhaO','admin','2024-06-26 05:31:08.313992','2024-07-03 07:39:16.000000');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-04 20:18:57
