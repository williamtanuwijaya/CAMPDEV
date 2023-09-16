-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2023 at 04:52 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcampdev`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbmessage`
--

CREATE TABLE `tbmessage` (
  `id` int(10) NOT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `emailadress` varchar(40) DEFAULT NULL,
  `message` varchar(75) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbmessage`
--

INSERT INTO `tbmessage` (`id`, `firstname`, `lastname`, `emailadress`, `message`) VALUES
(1, 'NANDO', 'KRISTIAN', 'nando@gmail.com', 'good');

-- --------------------------------------------------------

--
-- Table structure for table `tbuser`
--

CREATE TABLE `tbuser` (
  `id` int(6) NOT NULL,
  `nama` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbuser`
--

INSERT INTO `tbuser` (`id`, `nama`, `email`, `password_hash`) VALUES
(1, 'Ucok', 'ucok@gmail.com', '123123'),
(2, 'tes', 'tes', 'tes'),
(3, 'tes', 'tes', 'tes'),
(4, 'tes', 'tes', 'tes'),
(5, 'tes', 'tes', 'berhasil'),
(6, 'alaba', 'velen', '123123'),
(7, 'awd', 'awdawd', 'awdawd'),
(8, 'undefined', 'undefined', 'undefined'),
(9, 'semen', 'velen@gmail.com', '123123'),
(10, 'alaba', 'velen@gmail.com', 'awdad'),
(11, 'Peter', 'ucok@gmail.com', 'asasas'),
(12, 'Peter', 'peter@gmail.com', '345'),
(13, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(14, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(15, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(16, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(17, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(18, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(19, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(20, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(21, 'undefined', '2226250012@sektorpendidikan.id', 'undefined'),
(22, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'sefsefsef'),
(23, 'undefined', 'undefined', 'undefined'),
(24, 'undefined', 'undefined', 'undefined'),
(25, 'undefined', 'undefined', 'undefined'),
(26, 'undefined', 'undefined', 'undefined'),
(27, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'wadawd'),
(28, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'sfsefsef'),
(29, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'sregssefsef'),
(30, 'Umar', 'u@gmail.com', 'umar'),
(31, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'ksjehfksekjf'),
(32, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'lksnelfnslkenf'),
(33, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'lkanclknaec'),
(34, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'ladawdioahwiodh'),
(35, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'ladawdioahwiodh'),
(36, '', '', ''),
(37, 'William Tanuwijaya', '', ''),
(38, 'William Tanuwijaya', '', ''),
(39, 'William Tanuwijaya', '', ''),
(40, 'Umar', 'u@gmail.com', 'dasdasdas'),
(41, 'Umar', 'u@gmail.com', 'dasdasdas'),
(42, 'Umar', 'u@gmail.com', 'dasdasdas'),
(43, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', '123'),
(44, 'William Tanuwijaya', '', ''),
(45, 'William Tanuwijaya', '', ''),
(46, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', '123'),
(47, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'william'),
(48, 'asdasddasdasd', 'sadasd@gmail.com', 'dasdasd'),
(49, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', 'ucok123'),
(50, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', '123'),
(51, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', '123'),
(52, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', '123'),
(53, 'William Tanuwijaya', '', ''),
(54, 'William Tanuwijaya', '2226250012@sektorpendidikan.id', '123'),
(55, 'jojo', 'jo@gmail.com', 'jo'),
(56, '', '', ''),
(57, 'Jonathan Tanwuijaya', 'velen@gmail.com', '1234'),
(58, 'William Tanuwijaya', 'will@gmail.com', 'William');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbmessage`
--
ALTER TABLE `tbmessage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbuser`
--
ALTER TABLE `tbuser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbmessage`
--
ALTER TABLE `tbmessage`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbuser`
--
ALTER TABLE `tbuser`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
