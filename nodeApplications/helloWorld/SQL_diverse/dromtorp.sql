-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 13, 2023 at 01:17 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dromtorp`
--

-- --------------------------------------------------------

--
-- Table structure for table `datamaskin`
--

CREATE TABLE `datamaskin` (
  `DatamaskinID` int(11) NOT NULL,
  `Model` varchar(20) NOT NULL,
  `GBram` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `datamaskin`
--

INSERT INTO `datamaskin` (`DatamaskinID`, `Model`, `GBram`) VALUES
(1, 'Lenovo E15', '32'),
(2, 'Mac book Air', '16'),
(3, 'Lenovo E20', '16');

-- --------------------------------------------------------

--
-- Table structure for table `elev`
--

CREATE TABLE `elev` (
  `ElevID` int(3) NOT NULL,
  `Fornavn` varchar(25) NOT NULL,
  `Etternavn` varchar(35) NOT NULL,
  `Klasse` int(2) NOT NULL,
  `Hobby` varchar(20) NOT NULL,
  `Kjonn` varchar(15) NOT NULL,
  `DatamaskinID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `elev`
--

INSERT INTO `elev` (`ElevID`, `Fornavn`, `Etternavn`, `Klasse`, `Hobby`, `Kjonn`, `DatamaskinID`) VALUES
(1, 'Thomas', 'Hansen', 1, 'Gaming', 'G', 1),
(2, 'Linn', 'Jensen', 2, 'Strikking', 'J', 1),
(3, 'Lise', 'Olsen', 1, 'Gaming', 'J', 3),
(4, 'Eva', 'Yttergård', 2, 'Gaming', 'J', 2),
(5, 'Martin', 'Hjelle', 2, 'Gaming', 'G', 3),
(7, 'Joakim', 'Fredriksen', 1, 'Gaming', 'G', 3),
(8, 'Jenny', 'Gullaug', 4, 'Gaming', 'J', 1),
(9, 'Bjarte', 'Ås', 2, 'Gaming', 'G', 1),
(10, 'Hanna', 'Ullevik', 4, 'Gaming', 'J', 1),
(12, 'Bjarne', 'Utvik', 3, 'Gaming', 'G', 3);

-- --------------------------------------------------------

--
-- Table structure for table `programfag`
--

CREATE TABLE `programfag` (
  `ProgramfagID` int(2) NOT NULL,
  `Programfag` varchar(40) NOT NULL,
  `Lærer` varchar(35) NOT NULL,
  `Klasserom` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `programfag`
--

INSERT INTO `programfag` (`ProgramfagID`, `Programfag`, `Lærer`, `Klasserom`) VALUES
(1, 'Informasjonsteknologi', 'Lars Helgerød', 'B308'),
(2, 'Medievitenskap', 'Bendik Kristoffersen', 'B306'),
(3, 'Helse og sosial', 'Trine Haug', 'B303'),
(4, 'Kokkefag', 'Bjørn Kolstad', 'Kjøkken');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datamaskin`
--
ALTER TABLE `datamaskin`
  ADD PRIMARY KEY (`DatamaskinID`);

--
-- Indexes for table `elev`
--
ALTER TABLE `elev`
  ADD PRIMARY KEY (`ElevID`),
  ADD KEY `datamaskin-con` (`DatamaskinID`),
  ADD KEY `klasse-con` (`Klasse`);

--
-- Indexes for table `programfag`
--
ALTER TABLE `programfag`
  ADD PRIMARY KEY (`ProgramfagID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datamaskin`
--
ALTER TABLE `datamaskin`
  MODIFY `DatamaskinID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `elev`
--
ALTER TABLE `elev`
  MODIFY `ElevID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `programfag`
--
ALTER TABLE `programfag`
  MODIFY `ProgramfagID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `elev`
--
ALTER TABLE `elev`
  ADD CONSTRAINT `datamaskin-con` FOREIGN KEY (`DatamaskinID`) REFERENCES `datamaskin` (`DatamaskinID`),
  ADD CONSTRAINT `klasse-con` FOREIGN KEY (`Klasse`) REFERENCES `programfag` (`ProgramfagID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
