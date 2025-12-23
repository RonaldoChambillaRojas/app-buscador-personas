INSERT INTO tipodocumentoidentidad 
("IdTipoDocumentoIdentidad", "CodigoDocumentoIdentidad", "NombreTipoDocumentoIdentidad", "NombreAbreviado", "IndicadorEstado", "UsuarioRegistro", "FechaRegistro", "UsuarioModificacion", "FechaModificacion") 
VALUES
(1, '0', 'OTROS TIPOS DE DOCUMENTOS', 'OTROS', 'T', '', '2018-01-01 00:00:00', NULL, '2018-04-11 16:38:56'),
(2, '1', 'DOCUMENTO NACIONAL DE IDENTIDAD (DNI)', 'DNI', 'T', '', '2018-01-01 00:00:00', NULL, '2018-07-14 23:29:07'),
(3, '4', 'CARNET DE EXTRANJERIA', 'CARNET EXT.', 'T', '', '2018-01-01 00:00:00', NULL, '2018-08-17 23:37:51'),
(4, '6', 'REGISTRO ÚNICO DE CONTRIBUYENTES', 'RUC', 'T', '', '2018-01-01 00:00:00', NULL, NULL),
(5, '7', 'PASAPORTE', 'PASAPORTE', 'T', '', '2018-01-01 00:00:00', NULL, '2018-07-30 18:31:33'),
(6, 'A', 'CÉDULA DIPLOMÁTICA DE IDENTIDAD', 'CED. DIPLOMAT.', 'T', '', '2018-01-01 00:00:00', NULL, '2018-08-01 19:36:56'),
(7, '0', 'SIN DOCUMENTO', 'SIN DOCUMENTO', 'T', '', '2019-03-13 10:58:33', '', '2019-03-13 10:58:33')
ON CONFLICT ("IdTipoDocumentoIdentidad") DO NOTHING;



INSERT INTO tipopersona 
("IdTipoPersona", "NombreTipoPersona", "IndicadorEstado", "UsuarioRegistro", "FechaRegistro", "UsuarioModificacion", "FechaModificacion") 
VALUES
(1, 'P. Jurídica', 'A', '', '2018-01-01 00:00:00', NULL, NULL),
(2, 'P. Natural', 'A', '', '2018-01-01 00:00:00', NULL, NULL),
(3, 'No Domiciliado', 'A', '', '2018-01-01 00:00:00', NULL, NULL)
ON CONFLICT ("IdTipoPersona") DO NOTHING;





INSERT INTO persona 
("IdPersona", "ApellidoCompleto", "NombreCompleto", "RazonSocial", "NumeroDocumentoIdentidad", "IdTipoDocumentoIdentidad", "IdTipoPersona", "IdRol", "IdGradoAlumno", "Direccion", "TelefonoFijo", "NombreComercial", "RepresentanteLegal", "Email", "Celular", "TelefonoPersonal", "LugarNacimiento", "Nacionalidad", "Observacion", "CondicionContribuyente", "EstadoContribuyente", "FechaNacimiento", "Sexo", "Foto", "IndicadorEstado", "FechaRegistro", "UsuarioRegistro", "FechaModificacion", "UsuarioModificacion", "UltimaPlacaVehiculoConductor", "UltimaMarcaVehiculoConductor", "ConstanciaInscripcionVigenteConductor", "NumeroLicenciaConductor") 
VALUES
(0, 'NO ESPECIFICADO', NULL, 'NO ESPECIFICADO', '00000000', 2, 2, 22, 1, '', '', NULL, NULL, NULL, '', '', '', '', NULL, '', '', NULL, NULL, NULL, 'E', '2018-08-31 07:30:23', '', NULL, NULL, '', '', '', ''),
(1, 'VARIOS', 'CLIENTES', 'CLIENTES VARIOS', '00000000', 2, 2, 3, 1, '', '', NULL, NULL, NULL, '', '', '', '', NULL, '', '', '1970-01-01', NULL, NULL, 'A', '2018-08-31 07:30:23', '', '2025-10-11 19:08:19', NULL, '', '', '', ''),
(2, 'MASTER', 'WEB', 'MASTER WEB', '00000000', 2, 2, 3, 1, '', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'I', '2019-06-28 11:22:47', 'ADMIN', '2021-01-19 08:11:40', '', '', '', '', ''),
(3, 'CENTENO APAZA', 'WILSON DIMNER', 'CENTENO APAZA WILSON DIMNER', '45206988', 2, 2, 3, NULL, '', '', '', '', '', '928557463', '', '', '', '', '', '', NULL, 0, '', 'I', '2021-01-06 05:37:46', '', '2023-11-07 18:26:02', '', '', '', '', ''),
(4, '', '', 'EPIKO TECHNOLOGY SOCIEDAD ANONIMA CERRADA - EPIKO TECH S.A.C.', '20601956366', 4, 1, 21, NULL, 'CAL.OLGA GROHOMAN NRO. 2067 A.H. MIGUEL GRAU (FRENTE AL LOCAL COMUNAL) TACNA - TACNA - TACNA', '', '-', 'ENRIQUEZ TORRES NICKY SALOMON', '', '', '', '', '', '', 'HABIDO', 'ACTIVO', NULL, 0, '', 'A', '2021-01-06 05:59:56', '', NULL, '', '', '', '', ''),
(5, ' ', 'YEFRY', '  YEFRY', '0000001', 1, 2, 3, NULL, 'TACNA', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'I', '2021-01-12 15:49:05', '', '2022-08-19 11:24:38', '', '', '', '', ''),
(6, 'SALOMON', 'NICKY', 'SALOMON NICKY', '10432060603', 4, 2, 21, NULL, 'AV SAN MARTIN 3984', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'A', '2021-01-12 16:29:45', '', NULL, '', '', '', '', ''),
(7, '', '', 'CORPORACION TITAN SAC', '20603076649', 4, 1, 21, NULL, 'AV HUMBOLT 938', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'X', '2021-01-12 16:38:33', '', NULL, '', '', '', '', ''),
(8, 'ENRIQUEZ', 'NICKY', 'ENRIQUEZ NICKY', '43206060', 2, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'X', '2021-01-12 16:40:34', '', NULL, '', '', '', '', ''),
(9, 'UTURUNCO MAMANI', 'BERLY', 'UTURUNCO MAMANI BERLY', '02', 2, 2, 3, NULL, '', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'X', '2021-01-12 16:41:30', '', '2022-08-19 11:24:42', '', '', '', '', ''),
(10, 'PARIPANCA', 'ROXANA', 'PARIPANCA ROXANA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 06:07:10', '', '2024-01-16 22:01:13', '', '', '', '', ''),
(11, 'MAMANI', 'CELIA', 'MAMANI CELIA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 13:37:50', '', '2023-11-12 00:27:00', '', '', '', '', ''),
(12, 'MAMANI', 'CELIA', 'MAMANI CELIA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 13:53:33', '', '2023-10-28 11:01:05', '', '', '', '', ''),
(13, 'MONTOYA', 'HENRY', 'MONTOYA HENRY', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 13:57:21', '', '2024-01-11 19:16:34', '', '', '', '', ''),
(14, 'MORRO', 'JORGE', 'MORRO JORGE', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 14:00:36', '', '2023-09-18 10:02:50', '', '', '', '', ''),
(15, 'JULITA II', 'E/P', 'JULITA II E/P', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 21:45:46', '', '2023-09-16 16:27:57', '', '', '', '', ''),
(16, 'CHAMBILLA', 'RICHARD', 'CHAMBILLA RICHARD', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 21:50:12', '', '2024-01-14 21:44:47', '', '', '', '', ''),
(17, 'LUIS', 'MARGARITA', 'LUIS MARGARITA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 21:55:41', '', '2023-09-16 14:51:29', '', '', '', '', ''),
(18, '', '', 'LUZMILA CASAS CAPUñAY', '10166278207', 4, 1, 21, NULL, 'URB. BARTOLOME HERRERA 616, AREQUIPA', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 22:28:38', '', '2023-12-30 19:29:54', '', '', '', '', ''),
(19, 'HUACANI', 'JOSE', 'HUACANI JOSE', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 23:23:40', '', '2023-09-23 09:18:02', '', '', '', '', ''),
(20, 'LARA', 'ROGELIO', 'LARA ROGELIO', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 23:38:13', '', '2023-12-28 19:46:27', '', '', '', '', ''),
(21, 'ACOSTA', 'WALBERTO', 'ACOSTA WALBERTO', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 23:56:16', '', '2023-09-21 09:22:22', '', '', '', '', ''),
(22, 'E/P', 'DELFINES', 'E/P DELFINES', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-13 23:58:13', '', '2023-12-31 07:46:19', '', '', '', '', ''),
(23, 'COLCA SANTUYO', 'JUANA MARIA', 'COLCA SANTUYO JUANA MARIA', '-', 1, 2, 21, NULL, 'INTEGRACION LATINOAMERICANA MZ S LOTE 18, ILO', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-14 05:37:49', '', '2023-09-09 20:42:00', '', '', '', '', ''),
(24, 'ROSAS', 'MELISA', 'ROSAS MELISA', '72664962', 2, 2, 21, NULL, 'PUERTO GRAU MORRO SAMA PARTE BAJA S/N', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-15 17:13:58', '', '2022-10-27 05:47:52', '', '', '', '', ''),
(25, 'VALDIVIA', 'MARINA', 'VALDIVIA MARINA', '46268531', 2, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-15 17:55:15', '', '2024-01-10 02:18:07', '', '', '', '', ''),
(26, 'AYMA QANQUI', 'LIDIA', 'AYMA QANQUI LIDIA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-15 21:03:30', '', '2024-01-11 19:19:43', '', '', '', '', ''),
(27, 'LUIS LUIS', 'SONIA', 'LUIS LUIS SONIA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-15 21:06:02', '', '2023-09-18 20:14:57', '', '', '', '', ''),
(28, 'REYNOSO', 'ROCIO', 'REYNOSO ROCIO', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-15 21:52:33', '', '2023-09-17 06:20:26', '', '', '', '', ''),
(29, 'MEDINA', 'ANDRE', 'MEDINA ANDRE', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', NULL, 0, '', 'X', '2021-01-15 21:55:34', '', NULL, '', '', '', '', ''),
(30, 'CHOQUE MAMANI', 'ISIDORA', 'CHOQUE MAMANI ISIDORA', '-', 1, 2, 21, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '1970-01-01', 0, '', 'X', '2021-01-15 21:56:54', '', '2024-01-16 11:47:45', '', '', '', '', '')
ON CONFLICT ("IdPersona") DO NOTHING;