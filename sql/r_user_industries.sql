-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 27, 2012 at 09:49 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `devcore`
--

-- --------------------------------------------------------

--
-- Table structure for table `r_user_industries`
--

CREATE TABLE IF NOT EXISTS `r_user_industries` (
  `iid` int(11) unsigned NOT NULL DEFAULT '0',
  `uid` int(11) unsigned NOT NULL DEFAULT '0',
  KEY `iid` (`iid`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `r_user_industries`
--

INSERT INTO `r_user_industries` (`iid`, `uid`) VALUES
(1, 933),
(2, 653),
(3, 547),
(4, 547),
(5, 550),
(6, 489),
(7, 489),
(8, 720),
(3, 720),
(9, 720),
(10, 738),
(11, 751),
(12, 751),
(13, 862),
(14, 640),
(15, 706),
(16, 756),
(3, 476),
(17, 769),
(3, 541),
(18, 499),
(19, 528),
(4, 838),
(20, 609),
(21, 594),
(22, 850),
(23, 840),
(24, 723),
(25, 658),
(26, 687),
(27, 687),
(7, 492),
(28, 523),
(29, 620),
(7, 666),
(30, 710),
(31, 865),
(32, 616),
(33, 616),
(34, 690),
(35, 573),
(36, 860),
(37, 516),
(36, 835),
(38, 610),
(39, 610),
(40, 627),
(41, 521),
(42, 698),
(33, 748),
(43, 645),
(25, 645),
(44, 833),
(45, 833),
(46, 818),
(3, 633),
(47, 635),
(18, 883),
(48, 669),
(49, 584),
(50, 879),
(48, 520),
(3, 477),
(25, 619),
(51, 885),
(52, 590),
(25, 787),
(3, 892),
(53, 887),
(45, 841),
(54, 598),
(55, 713),
(56, 727),
(57, 781),
(58, 678),
(59, 796),
(60, 796),
(59, 674),
(61, 715),
(6, 749),
(25, 667),
(62, 822),
(63, 880),
(25, 624),
(64, 536),
(65, 864),
(66, 791),
(20, 733),
(67, 824),
(49, 524),
(19, 496),
(49, 576),
(68, 680),
(69, 889),
(61, 597),
(61, 801),
(66, 617),
(61, 617),
(70, 907),
(71, 611),
(61, 650),
(72, 826),
(73, 826),
(74, 826),
(75, 819),
(61, 649),
(36, 914),
(76, 676),
(62, 830),
(77, 877),
(78, 754),
(79, 754),
(6, 572),
(80, 882),
(81, 882),
(82, 478),
(83, 878),
(84, 580),
(85, 742),
(86, 583),
(87, 815),
(88, 815),
(89, 815),
(90, 815),
(77, 875),
(91, 532),
(92, 939),
(93, 805),
(49, 805),
(49, 700),
(94, 587),
(95, 849),
(96, 788),
(97, 750),
(91, 736),
(59, 752),
(76, 542),
(25, 693),
(43, 693),
(7, 657),
(98, 525),
(66, 602),
(91, 691),
(79, 921),
(78, 921),
(1, 741),
(99, 808),
(100, 915),
(101, 814),
(76, 500),
(83, 714),
(96, 771),
(102, 842),
(19, 842),
(102, 869),
(19, 869),
(63, 575),
(25, 947),
(3, 760),
(103, 859),
(32, 695),
(104, 789),
(105, 789),
(106, 910),
(107, 910),
(3, 603),
(108, 585),
(107, 930),
(19, 745),
(109, 739),
(79, 934),
(78, 934),
(110, 845),
(111, 544),
(112, 544),
(113, 848),
(114, 763),
(7, 560),
(49, 567),
(48, 551),
(115, 538),
(75, 538),
(49, 538),
(116, 538),
(117, 675),
(74, 813),
(68, 813),
(61, 813),
(118, 813),
(113, 823),
(119, 832),
(120, 612),
(121, 561),
(122, 665),
(32, 559),
(70, 812),
(123, 825),
(119, 898),
(124, 890),
(19, 533),
(87, 872),
(89, 872),
(49, 578),
(125, 941),
(3, 545),
(76, 906),
(126, 571),
(85, 729),
(78, 501),
(127, 479),
(128, 709),
(20, 606),
(129, 764),
(130, 792),
(131, 600),
(112, 600),
(109, 526),
(132, 896),
(133, 588),
(61, 588),
(134, 929),
(49, 646),
(135, 508),
(136, 508),
(23, 508),
(137, 508),
(138, 654),
(25, 940),
(61, 618),
(78, 623),
(113, 874),
(109, 480),
(139, 924),
(140, 582),
(141, 794),
(142, 636),
(114, 800),
(112, 800),
(25, 800),
(143, 800),
(76, 773),
(144, 873),
(145, 873),
(146, 873),
(59, 712),
(70, 816),
(147, 509),
(7, 722),
(25, 730),
(52, 730),
(148, 932),
(59, 642),
(149, 591),
(150, 944),
(151, 510),
(19, 510),
(152, 895),
(153, 895),
(154, 913),
(22, 922),
(25, 724),
(155, 853),
(68, 853),
(69, 853),
(91, 795),
(100, 790),
(156, 790),
(59, 605),
(3, 746),
(18, 904),
(99, 820),
(157, 820),
(158, 626),
(159, 639),
(160, 639),
(161, 851),
(19, 735),
(78, 614),
(162, 565),
(100, 920),
(7, 705),
(163, 900),
(57, 483),
(164, 481),
(158, 782),
(165, 782),
(31, 926),
(166, 780),
(167, 780),
(168, 903),
(169, 903),
(170, 630),
(48, 570),
(104, 589),
(140, 601),
(91, 740),
(171, 804),
(172, 797),
(20, 662),
(98, 662),
(173, 662),
(174, 761),
(159, 599),
(175, 728),
(143, 950),
(68, 766),
(79, 783),
(37, 783),
(176, 923),
(115, 641),
(91, 684),
(152, 629),
(25, 774),
(177, 829),
(178, 829),
(25, 806),
(179, 747),
(180, 747),
(181, 513),
(99, 827),
(182, 839),
(183, 839),
(184, 839),
(49, 537),
(70, 837),
(185, 512),
(78, 762),
(186, 659),
(131, 683),
(63, 562),
(129, 943),
(3, 664),
(19, 664),
(187, 664),
(188, 484),
(167, 485),
(48, 534),
(189, 486),
(135, 753),
(66, 656),
(190, 861),
(191, 866),
(192, 866),
(193, 894),
(84, 644),
(194, 856),
(49, 668),
(195, 731),
(53, 632),
(78, 546),
(196, 595),
(197, 529),
(66, 663),
(75, 847),
(198, 847),
(199, 672),
(137, 732),
(114, 694),
(90, 843),
(200, 843),
(140, 581),
(201, 855),
(202, 493),
(48, 574),
(76, 901),
(152, 647),
(203, 647),
(204, 779),
(36, 779),
(135, 893),
(167, 899),
(152, 608),
(6, 586),
(6, 498),
(194, 836),
(68, 786),
(155, 786),
(59, 876),
(199, 661),
(49, 703),
(3, 539),
(205, 821),
(149, 482),
(109, 506),
(72, 870),
(206, 870),
(25, 557),
(193, 701),
(91, 673),
(207, 888),
(64, 768),
(129, 621),
(208, 918),
(137, 638),
(66, 798),
(61, 798),
(48, 770),
(173, 648),
(79, 504),
(189, 564),
(152, 494),
(43, 494),
(153, 494),
(108, 688),
(59, 697),
(209, 725),
(210, 891),
(188, 891),
(18, 909),
(108, 628),
(211, 778),
(212, 778),
(12, 778),
(59, 527),
(25, 917),
(99, 852),
(213, 908),
(187, 767),
(3, 767),
(214, 863),
(91, 655),
(215, 692),
(198, 868),
(75, 868),
(49, 711),
(59, 936),
(59, 937),
(211, 652),
(99, 810),
(49, 488),
(96, 721),
(216, 871),
(217, 871),
(6, 776),
(218, 505),
(219, 535),
(78, 522),
(220, 613),
(95, 828),
(221, 643),
(91, 784),
(222, 831),
(49, 702),
(48, 596),
(222, 811),
(7, 511),
(63, 744),
(223, 775),
(63, 490),
(126, 677),
(1, 717),
(48, 540),
(224, 817),
(225, 928),
(226, 928),
(227, 897),
(55, 491),
(228, 689),
(229, 757),
(230, 556),
(231, 931),
(45, 844),
(232, 577),
(233, 577),
(192, 670),
(54, 670),
(231, 558),
(53, 682),
(234, 809),
(235, 809),
(91, 503),
(76, 548),
(133, 548),
(236, 548),
(237, 548),
(25, 593),
(238, 517),
(129, 622),
(91, 777),
(239, 916),
(6, 765),
(232, 631),
(233, 631),
(232, 942),
(240, 514),
(25, 552),
(109, 530),
(63, 651),
(54, 699),
(25, 704),
(76, 497),
(241, 854),
(242, 719),
(243, 555),
(25, 802),
(112, 802),
(52, 802),
(111, 679),
(76, 884),
(25, 793),
(209, 793),
(59, 563),
(25, 803),
(244, 759),
(59, 935),
(25, 935),
(164, 543),
(245, 502),
(59, 946),
(91, 799),
(59, 948),
(59, 734),
(60, 734),
(246, 902),
(139, 925),
(66, 912),
(3, 755),
(187, 755),
(25, 707),
(222, 858),
(159, 634),
(247, 718),
(28, 758),
(25, 681),
(121, 945),
(121, 938),
(121, 518),
(121, 716),
(79, 553),
(78, 553),
(248, 487),
(9, 604),
(249, 919),
(250, 708),
(48, 708),
(102, 834),
(19, 834),
(66, 660),
(66, 554),
(251, 867),
(33, 671),
(252, 857),
(59, 615),
(99, 846),
(73, 625),
(25, 607),
(174, 495),
(114, 686),
(19, 685),
(63, 566),
(253, 927),
(46, 807),
(134, 886),
(199, 531),
(169, 743),
(254, 743),
(7, 579),
(255, 592),
(114, 515),
(256, 519),
(248, 519),
(192, 696),
(58, 737),
(18, 569),
(257, 637),
(199, 949),
(258, 905),
(152, 507),
(166, 507),
(167, 507),
(193, 785),
(99, 785),
(259, 785),
(260, 785),
(261, 785),
(262, 785),
(263, 726),
(53, 726),
(264, 726),
(12, 726),
(260, 726),
(221, 726),
(80, 726),
(262, 726),
(265, 726),
(266, 726),
(49, 549),
(105, 881),
(202, 911),
(267, 772),
(268, 568),
(84, 568);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
