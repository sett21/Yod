-- phpMyAdmin SQL Dump
-- version 4.0.10.6
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 10 2015 г., 12:49
-- Версия сервера: 5.5.41-log
-- Версия PHP: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `root`
--

-- --------------------------------------------------------

--
-- Структура таблицы `yo_admins`
--

CREATE TABLE IF NOT EXISTS `yo_admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `yo_admins`
--

INSERT INTO `yo_admins` (`id`, `login`, `password`, `name`, `role`, `status`) VALUES
(1, 'admin', '20EAfcH0JSFQY', 'Константин', 'root', '1');

-- --------------------------------------------------------

--
-- Структура таблицы `yo_blocks`
--

CREATE TABLE IF NOT EXISTS `yo_blocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `yo_blocks`
--

INSERT INTO `yo_blocks` (`id`, `name`, `body`, `status`) VALUES
(1, 'О нас', 'YØ DEZEEN IS AN ARCHITECTUAL DESIGN STUDIØ WITH EXTENSIVE EXPERIENCE IN THE FIELD ØF INTERIØR DESIGN FØR PUBLIC AND RESIDENTISL BUIDINGS', '1'),
(2, 'Контакты', 'CØNTACTS WILL BE HERE', '1');

-- --------------------------------------------------------

--
-- Структура таблицы `yo_photo`
--

CREATE TABLE IF NOT EXISTS `yo_photo` (
  `images` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `yo_projects`
--

CREATE TABLE IF NOT EXISTS `yo_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0',
  `best` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `yo_projects`
--

INSERT INTO `yo_projects` (`id`, `type`, `name`, `location`, `body`, `img`, `status`, `best`) VALUES
(1, 2, 'Название ', 'Местоположение', 'Описание', '20150306_36_1.jpg', '1', '0'),
(2, 1, 'Название 2', 'Местоположение 2', 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ', '20150306_202_2.jpg', '1', '0'),
(8, 1, 'asdasd', 'asdasdsa', 'asdasd', '20150410_610_4.jpg', '0', '0');

-- --------------------------------------------------------

--
-- Структура таблицы `yo_publications`
--

CREATE TABLE IF NOT EXISTS `yo_publications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=48 ;

--
-- Дамп данных таблицы `yo_publications`
--

INSERT INTO `yo_publications` (`id`, `name`, `body`, `img`, `status`) VALUES
(3, 'Название', 'Описание Описание Описание Описание Описание Описание Описание Описание ', '20150320_664_20150306_202_2.jpg', '1'),
(47, 'asdasdasdasdasd', 'asdasdfas', '20150410_717_4.jpg', '0');

-- --------------------------------------------------------

--
-- Структура таблицы `yo_team`
--

CREATE TABLE IF NOT EXISTS `yo_team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `yo_team`
--

INSERT INTO `yo_team` (`id`, `name`, `position`, `img`, `status`) VALUES
(1, 'Константин', 'Ведущий программист', '20150306_767_3.png', '1'),
(2, 'Александр', 'Верстальщик', '20150306_211_2.png', '1'),
(5, 'Марина', 'Куратор', '20150306_666_1.png', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
