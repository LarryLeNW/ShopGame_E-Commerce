"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Tạo dữ liệu người dùng mẫu
        const productsData = [
            {
                name: "Acc Liên Minh 1",
                price: 299000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 2",
                price: 199000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 3",
                price: 399000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 4",
                price: 219000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 5",
                price: 119000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 6",
                price: 189000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 7",
                price: 19000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 8",
                price: 19000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 9",
                price: 19000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 10",
                price: 19000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Minh 11",
                price: 19000,
                discount: 0,
                description:
                    "Tên tài khoản : LegendDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  yasua siêu phẩm , leesin tuyệt vô thần , K/DA Akali ,  Brand Thanh Lịch , Sett Cuồng Long Quyền , True Damage Qiyana ... ",
                category: "Liên Minh Huyền Thoại",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // product lq
            {
                name: "Acc Liên Quân 1",
                price: 299000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 2",
                price: 199000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 3",
                price: 399000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 4",
                price: 219000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 5",
                price: 119000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 6",
                price: 189000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 7",
                price: 19000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 8",
                price: 19000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 9",
                price: 19000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 10",
                price: 19000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Acc Liên Quân 11",
                price: 19000,
                discount: 10000,
                description:
                    "Tên tài khoản : LiênQuânDemo123 , Máy chủ : Việt Nam , Cấp : 30 , Rank : Vàng , Skin :  Nữ Thần Chiến (Tel'Annas) , Nữ Hoàng Thảo Nguyên (Yorn) , Anh Hùng Chiến Trận (Zill) , Sát Thủ Băng Giá (Lauriel) , Dũng Sĩ Ánh Sáng (Kahlii) , Dũng Sĩ Ánh Sáng (Kahlii) , Hoa Hồng Bất Tử (Wisp) , Chúa Tể Rừng (Butterfly) , Ánh Sáng Tinh Khiết (Veera) ,  Thợ Săn Ma Thuật (Violet) ,... ",
                category: "Liên Quân Mobile",
                owner: "ADMIN",
                TKaccount: "accdemo123",
                MKaccount: "accdemo123",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        // Thêm dữ liệu vào bảng User
        await queryInterface.bulkInsert("Products", productsData, {});
    },

    down: async (queryInterface, Sequelize) => {
        // Xóa tất cả dữ liệu trong bảng User
        await queryInterface.bulkDelete("Products", null, {});
    },
};
