USE [CHOM.Data]
GO
SET IDENTITY_INSERT [dbo].[MucLuc] ON 

INSERT [dbo].[MucLuc] ([ID], [Ten], [ThuTu], [Link], [IDParent], [HinhAnh], [Nam]) VALUES (1, N'Project', 1, NULL, 0, NULL, NULL)
INSERT [dbo].[MucLuc] ([ID], [Ten], [ThuTu], [Link], [IDParent], [HinhAnh], [Nam]) VALUES (2, N'Landscape', 1, N'/Project', 1, N'canhquanHome.jpg', 2022)
INSERT [dbo].[MucLuc] ([ID], [Ten], [ThuTu], [Link], [IDParent], [HinhAnh], [Nam]) VALUES (3, N'Interior', 2, N'/Project', 1, N'noithatHome.jpg', 2022)
INSERT [dbo].[MucLuc] ([ID], [Ten], [ThuTu], [Link], [IDParent], [HinhAnh], [Nam]) VALUES (4, N'Gallery', 2, N'/Gallery', 0, NULL, NULL)
INSERT [dbo].[MucLuc] ([ID], [Ten], [ThuTu], [Link], [IDParent], [HinhAnh], [Nam]) VALUES (5, N'Contact', 3, N'/Contact', 0, NULL, NULL)
SET IDENTITY_INSERT [dbo].[MucLuc] OFF
GO
SET IDENTITY_INSERT [dbo].[BoSuuTam] ON 

INSERT [dbo].[BoSuuTam] ([ID], [HinhAnh], [NgayTao], [IDMucLuc]) VALUES (9, N'pulse03.jpg', CAST(N'2023-01-19T18:20:26.4709851' AS DateTime2), 4)
INSERT [dbo].[BoSuuTam] ([ID], [HinhAnh], [NgayTao], [IDMucLuc]) VALUES (11, N'01hero.jpg', CAST(N'2023-01-20T01:07:04.6585929' AS DateTime2), 4)
INSERT [dbo].[BoSuuTam] ([ID], [HinhAnh], [NgayTao], [IDMucLuc]) VALUES (12, N'shirt04.jpg', CAST(N'2023-01-20T01:07:16.4625168' AS DateTime2), 4)
INSERT [dbo].[BoSuuTam] ([ID], [HinhAnh], [NgayTao], [IDMucLuc]) VALUES (13, N'soundblaster01.jpg', CAST(N'2023-01-20T01:08:00.3278135' AS DateTime2), 4)
INSERT [dbo].[BoSuuTam] ([ID], [HinhAnh], [NgayTao], [IDMucLuc]) VALUES (15, N'opulence06.jpg', CAST(N'2023-01-20T01:09:50.5028961' AS DateTime2), 4)
INSERT [dbo].[BoSuuTam] ([ID], [HinhAnh], [NgayTao], [IDMucLuc]) VALUES (16, N'pulse06.jpg', CAST(N'2023-01-20T01:09:58.0000000' AS DateTime2), 4)
SET IDENTITY_INSERT [dbo].[BoSuuTam] OFF
GO
SET IDENTITY_INSERT [dbo].[DuAn] ON 

INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (10, N'Dự án f', N'cq3.jpg', NULL, 2022, 2)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (11, N'Dự án G', N'cq5.jpg', NULL, 2022, 2)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (12, N'Dự án g', N'interior01.jpg', NULL, 2022, 3)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (13, N'Dự án h', N'interior03.jpg', NULL, 2022, 3)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (14, N'Dự án k', N'interior05.jpg', NULL, 2022, 3)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (16, N'dự án l', N'pulse03.jpg', NULL, 2022, 2)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (17, N'dự án n', N'opulence06.jpg', NULL, 2023, 2)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (21, N'Dự án a', N'goldman-cover.jpg', NULL, 2022, 2)
INSERT [dbo].[DuAn] ([ID], [TuaDe], [HinhGT], [NoiDung], [Nam], [IDMucLuc]) VALUES (22, N'dự án bc', N'opulence03.jpg', NULL, 2022, 2)
SET IDENTITY_INSERT [dbo].[DuAn] OFF
GO
SET IDENTITY_INSERT [dbo].[HinhAnhs] ON 

INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (27, N'cq3.jpg', NULL, 10)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (28, N'cq4.jpg', NULL, 10)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (29, N'cq5.jpg', NULL, 11)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (30, N'cq6.jpg', NULL, 11)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (32, N'interior01.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (33, N'interior02.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (34, N'interior03.jpg', NULL, 13)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (35, N'interior04.jpg', NULL, 13)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (36, N'interior05.jpg', NULL, 14)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (37, N'interior06.jpg', NULL, 14)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (38, N'interior07.jpg', NULL, 14)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (41, N'pulse02.jpg', NULL, 16)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (42, N'pulse03.jpg', NULL, 16)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (45, N'pulse01.jpg', NULL, 13)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (48, N'pulse01.jpg', NULL, 21)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (50, N'pulse01.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (51, N'pulse01.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (52, N'pulse01.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (53, N'pulse01.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (54, N'pulse02.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (55, N'pulse02.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (56, N'pulse03.jpg', NULL, 12)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (59, N'opulence03.jpg', NULL, 22)
INSERT [dbo].[HinhAnhs] ([ID], [FileName], [TieuDe], [IDDuAn]) VALUES (60, N'opulence04.jpg', NULL, 22)
SET IDENTITY_INSERT [dbo].[HinhAnhs] OFF
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230113165712_DbInitial', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230113173425_update-1', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230114102331_update-2', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230119074826_update-3', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230119090224_update-4', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230119114341_update-5', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230119144230_update-6', N'6.0.11')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230119150030_update-7', N'6.0.11')
GO
SET IDENTITY_INSERT [dbo].[Contacts] ON 

INSERT [dbo].[Contacts] ([ID], [HinhAnh], [Ten], [GioiThieu], [CotMoc]) VALUES (1, N'shirt03.jpg', N'Nguyên Văn A ', N'<p>asdsadsadsadasd as sad sadsa dsa dsad sad sadsa dsad sad sad sad sadas dasd <strong>asdsahd sad sadu sa du saud usa dus adu saud sa u</strong></p>', N'<p>asdsadsadsadsad sad sai disa di said said isa dis adi said said isa dia sdi said said &nbsp;</p>')
SET IDENTITY_INSERT [dbo].[Contacts] OFF
GO
SET IDENTITY_INSERT [dbo].[LienHe] ON 

INSERT [dbo].[LienHe] ([ID], [Ten], [PhuongThuc], [Link]) VALUES (3, N'30 Thảo Điền, Q2, HCM', N'Address', NULL)
INSERT [dbo].[LienHe] ([ID], [Ten], [PhuongThuc], [Link]) VALUES (4, N'093234213', N'Phone', NULL)
INSERT [dbo].[LienHe] ([ID], [Ten], [PhuongThuc], [Link]) VALUES (5, N'minhduong180702@gmail.com', N'Email', NULL)
SET IDENTITY_INSERT [dbo].[LienHe] OFF
GO
SET IDENTITY_INSERT [dbo].[PhanHois] ON 

INSERT [dbo].[PhanHois] ([ID], [Ten], [Email], [SDT], [YeuCau], [NoiDung], [CreatedDate]) VALUES (6, N'asdsad', N'asd@gmail.com', N'123213213', N'Kiến trúc cảnh quan', N'sadsadsadsad', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[PhanHois] ([ID], [Ten], [Email], [SDT], [YeuCau], [NoiDung], [CreatedDate]) VALUES (7, N'Nguyễn Văn A', N'minhduong@gmail.com', N'050505252', N'Kiến trúc cảnh quan', N'asdsadsadsadsadsadsad', CAST(N'2023-01-24T22:38:18.1276786' AS DateTime2))
INSERT [dbo].[PhanHois] ([ID], [Ten], [Email], [SDT], [YeuCau], [NoiDung], [CreatedDate]) VALUES (8, N'asdasd', N'asdasd@gmail.com', N'05151515', N'Kiến trúc cảnh quan', N'abc xyz', CAST(N'2023-01-25T13:53:56.5833338' AS DateTime2))
INSERT [dbo].[PhanHois] ([ID], [Ten], [Email], [SDT], [YeuCau], [NoiDung], [CreatedDate]) VALUES (9, N'nguyen van a', N'minhduong123@gmail.com', N'05151516', N'Kiến trúc thiết kế', N'abc xyzasdsadsadsad', CAST(N'2023-01-25T13:54:32.2473373' AS DateTime2))
SET IDENTITY_INSERT [dbo].[PhanHois] OFF
GO
INSERT [dbo].[TaiKhoan] ([UserName], [Password]) VALUES (N'admin', N'Admin@123')
GO
SET IDENTITY_INSERT [dbo].[Videos] ON 

INSERT [dbo].[Videos] ([ID], [FileName]) VALUES (1, N'videbg.mp4')
SET IDENTITY_INSERT [dbo].[Videos] OFF
GO
