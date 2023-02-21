const topsSliderImg = [
    require('./images/topslider/slider_1.webp'),
    require('./images/topslider/slider_2.webp'),
    require('./images/topslider/slider_3.webp'),
    require('./images/topslider/slider_4.webp'),
    require('./images/topslider/slider_5.webp')
];

const defaultAvatar = require('./avatar/default_acc_avata.jpg');

const products = [
    {
        id: 'ZADT09',
        title: 'ÁO THUN NAM POLO DÀI TAY CỔ BẺ PHỐI BO CAO CẤP ZONADO ZADT09 (CHỌN MÀU)',
        price: 259000,
        oldPrice: 350000,
        unit: '₫',
        sold: 15,
        inventory: 300,
        uploadDate: new Date(2022, 11, 22, 8, 11, 30),
        color_type: [
            {
                color: 'Đen',
                img: require('./images/products/ZADT09/color_type/ao_tay_dai_adt09_1200x1200_0015_layer_1.webp')
            },
            {
                color: 'Xanh Đen',
                img: require('./images/products/ZADT09/color_type/ao_tay_dai_adt09_1200x1200_0014_layer_2.webp')
            },
            {
                color: 'Be Kem',
                img: require('./images/products/ZADT09/color_type/ao_tay_dai_adt09_1200x1200_0013_layer_3.webp')
            },
            {
                color: 'Xanh Đen',
                img: require('./images/products/ZADT09/color_type/ao_tay_dai_adt09_1200x1200_0011_layer_4.webp')
            }
        ],
        propertys: [
            require('./images/products/ZADT09/propertys/ao_tay_dai_adt09_1200x1200_0000_layer_17.webp'),
            require('./images/products/ZADT09/propertys/ao_tay_dai_adt09_1200x1200_0001_layer_16.webp'),
            require('./images/products/ZADT09/propertys/ao_tay_dai_adt09_1200x1200_0002_layer_15.webp'),
            require('./images/products/ZADT09/propertys/ao_tay_dai_adt09_1200x1200_0003_layer_14.jpg'),
            require('./images/products/ZADT09/propertys/ao_tay_dai_adt09_chi_tiet_1.webp'),
            require('./images/products/ZADT09/propertys/ao_tay_dai_adt09_chi_tiet_4.webp')
        ]
    },
    {
        id: 'QLTL01',
        title: 'HỘP 4 QUẦN LÓT NAM BOXER THUN LẠNH LƯNG TRƠN QLTL01',
        price: 219000,
        oldPrice: 300000,
        unit: '₫',
        sold: 4,
        inventory: 77,
        uploadDate: new Date(2022, 11, 22, 8, 50, 0),
        color_type: [
            {
                color: 'QLTL01',
                img: require('./images/products/QLTL01/color_type/hop_4_quan_lot_nam_0000_layer_9.webp')
            }
        ],
        propertys: [
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0001_layer_8.jpg'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0002_layer_7.jpg'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0003_layer_6.jpg'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0004_layer_5.jpg'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0005_layer_4.jpg'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0006_layer_3.webp'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0007_layer_2.jpg'),
            require('./images/products/QLTL01/propertys/hop_4_quan_lot_nam_0008_layer_1.webp')
        ]
    },
    {
        id: 'ZFP02',
        title: 'QUẦN DÀI NAM THỂ THAO CHẤT DÙ GIÓ CO GIÃN CAO CẤP ZFP02 ZONADO (CHỌN MÀU)',
        price: 259000,
        oldPrice: 350000,
        unit: '₫',
        sold: 8,
        inventory: 314,
        uploadDate: new Date(2022, 11, 22, 8, 54, 0),
        color_type: [
            {
                color: 'XANH RÊU',
                img: require('./images/products/ZFP02/color_type/fp02_xanh_reu_1_2.webp')
            },
            {
                color: 'ĐEN',
                img: require('./images/products/ZFP02/color_type/fp02_01_0024_layer_11.webp')
            },
            {
                color: 'XANH ĐEN',
                img: require('./images/products/ZFP02/color_type/fp02_xanh_den_1_1.webp')
            },
            {
                color: 'XÁM NHẠT',
                img: require('./images/products/ZFP02/color_type/fp02_01_0030_layer_6.webp')
            }
        ],
        propertys: [
            require('./images/products/ZFP02/propertys/fp02_01_0001_layer_30.webp'),
            require('./images/products/ZFP02/propertys/fp02_01_0002_layer_29.webp'),
            require('./images/products/ZFP02/propertys/fp02_01_0011_layer_22.jpg'),
            require('./images/products/ZFP02/propertys/fp02_01_0013_layer_20.webp'),
            require('./images/products/ZFP02/propertys/fp02_01_0017_layer_17.webp'),
            require('./images/products/ZFP02/propertys/fp02_01_0020_layer_15.jpg'),
            require('./images/products/ZFP02/propertys/fp02_01_0022_layer_13.webp'),
            require('./images/products/ZFP02/propertys/fp02_01_0037_layer_1.webp'),
            require('./images/products/ZFP02/propertys/fp02_xanh_reu_3_4.webp')
        ]
    },
    {
        id: 'ZPAKK68',
        title: 'ÁO KHOÁC KAKI NAM LÓT DÙ PHỐI BO CAO CẤP ZONADO ZPAKK68 (5 MÀU)',
        price: 279000,
        oldPrice: 350000,
        unit: '₫',
        sold: 5,
        inventory: 314,
        uploadDate: new Date(2022, 11, 22, 9, 12, 0),
        color_type: [
            {
                color: 'XANH RÊU',
                img: require('./images/products/ZPAKK68/color_type/1200x1200_0017_layer_2.webp')
            },
            {
                color: 'ĐEN',
                img: require('./images/products/ZPAKK68/color_type/1200x1200_0018_layer_1.webp')
            },
            {
                color: 'XANH ĐEN',
                img: require('./images/products/ZPAKK68/color_type/1200x1200_0014_layer_5.webp')
            },
            {
                color: 'BE VÀNG',
                img: require('./images/products/ZPAKK68/color_type/1200x1200_0016_layer_3.webp')
            },
            {
                color: 'BE KEM',
                img: require('./images/products/ZPAKK68/color_type/1200x1200_0015_layer_4.webp')
            }
        ],
        propertys: [
            require('./images/products/ZPAKK68/propertys/1200x1200_0000_layer_20.jpg'),
            require('./images/products/ZPAKK68/propertys/1200x1200_0000_layer_23.webp'),
            require('./images/products/ZPAKK68/propertys/1200x1200_0001_layer_18.webp'),
            require('./images/products/ZPAKK68/propertys/1200x1200_0006_layer_13.jpg'),
            require('./images/products/ZPAKK68/propertys/1200x1200_0007_layer_12.jpg'),
            require('./images/products/ZPAKK68/propertys/1200x1200_0010_layer_9.jpg'),
            require('./images/products/ZPAKK68/propertys/1200x1200_0012_layer_7.jpg')
        ]
    },
    {
        id: 'ZPSK05',
        title: 'QUẦN SHORT KAKI NAM CAO CẤP ZPSK05 (CHỌN MÀU)',
        price: 249000,
        oldPrice: 299000,
        unit: '₫',
        sold: 14,
        inventory: 614,
        uploadDate: new Date(2022, 11, 22, 9, 24, 0),
        color_type: [
            {
                color: 'XÁM GHI',
                img: require('./images/products/ZPSK05/color_type/psk05_1200x1200_0021_layer_15.webp')
            },
            {
                color: 'ĐEN',
                img: require('./images/products/ZPSK05/color_type/psk05_1200x1200_0019_layer_16.webp')
            },
            {
                color: 'XANH XÁM',
                img: require('./images/products/ZPSK05/color_type/psk05_1200x1200_0015_layer_17.webp')
            },
            {
                color: 'XANH CỐM',
                img: require('./images/products/ZPSK05/color_type/psk05_1200x1200_0023_layer_14.webp')
            },
            {
                color: 'XANH ĐEN',
                img: require('./images/products/ZPSK05/color_type/psk05_1200x1200_0013_layer_18.webp')
            }
        ],
        propertys: [
            require('./images/products/ZPSK05/propertys/psk05__chi_tiet_1.webp'),
            require('./images/products/ZPSK05/propertys/psk05__chi_tiet_2.webp'),
            require('./images/products/ZPSK05/propertys/psk05__chi_tiet_3.jpg'),
            require('./images/products/ZPSK05/propertys/psk05__chi_tiet_4.webp'),
            require('./images/products/ZPSK05/propertys/psk05__chi_tiet_5.webp'),
            require('./images/products/ZPSK05/propertys/psk05_1200x1200_0000_layer_24.webp'),
            require('./images/products/ZPSK05/propertys/psk05_1200x1200_0004_layer_20.webp')
        ]
    },
    {
        id: 'ZSBTT01',
        title: 'BỘ THỂ THAO NAM CHẤT THUN LẠNH CAO CẤP ZONADO ZSBTT01 (CHỌN MÀU)',
        price: 296000,
        oldPrice: 350000,
        unit: '₫',
        sold: 1,
        inventory: 160,
        uploadDate: new Date(2022, 11, 22, 9, 29, 0),
        color_type: [
            {
                color: 'SET 1',
                img: require('./images/products/ZSBTT01/color_type/set_bo_1200x1200_0000_layer_21.webp')
            },
            {
                color: 'SET 2',
                img: require('./images/products/ZSBTT01/color_type/set_bo_1200x1200_0001_layer_20.webp')
            },
            {
                color: 'SET 3',
                img: require('./images/products/ZSBTT01/color_type/set_bo_1200x1200_0002_layer_19.webp')
            },
            {
                color: 'SET 4',
                img: require('./images/products/ZSBTT01/color_type/set_bo_1200x1200_0003_layer_18.webp')
            }
        ],
        propertys: [
            require('./images/products/ZSBTT01/propertys/ao_thun_att01_1200x1200_8mau.webp'),
            require('./images/products/ZSBTT01/propertys/ao_thun_att01_1200x1200_xanh_da_3.webp'),
            require('./images/products/ZSBTT01/propertys/ao_thun_att01_1200x1200_xanh_da.webp'),
            require('./images/products/ZSBTT01/propertys/set_bo_1200x1200_0004_layer_17.webp'),
            require('./images/products/ZSBTT01/propertys/set_bo_1200x1200_0005_layer_16.webp')
        ]
    },
    {
        id: 'ZSMSK01',
        title: 'ÁO SƠ MI NAM DÀI TAY SỌC KẺ HÀN QUỐC ZONADO ZSMSK01',
        price: 179000,
        oldPrice: 370000,
        unit: '₫',
        sold: 6,
        inventory: 160,
        uploadDate: new Date(2022, 11, 22, 9, 43, 0),
        color_type: [
            {
                color: 'SỐ 1',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0012_layer_29.webp')
            },
            {
                color: 'SỐ 2',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0014_layer_28.webp')
            },
            {
                color: 'SỐ 3',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0016_layer_27.webp')
            },
            {
                color: 'SỐ 4',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0018_layer_26.webp')
            },
            {
                color: 'SỐ 5',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0021_layer_25.webp')
            },
            {
                color: 'SỐ 6',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0024_layer_23.webp')
            },
            {
                color: 'SỐ 7',
                img: require('./images/products/ZSMSK01/color_type/1200x1200_ban_xoa_mac_0027_layer_30.webp')
            }
        ],
        propertys: [
            require('./images/products/ZSMSK01/propertys/1200x1200_ban_xoa_mac_0000_layer_22.webp'),
            require('./images/products/ZSMSK01/propertys/1200x1200_ban_xoa_mac_0002_layer_20.jpg'),
            require('./images/products/ZSMSK01/propertys/1200x1200_ban_xoa_mac_0003_layer_19.jpg'),
            require('./images/products/ZSMSK01/propertys/1200x1200_ban_xoa_mac_0004_layer_15.jpg'),
            require('./images/products/ZSMSK01/propertys/1200x1200_ban_xoa_mac_0005_layer_18.jpg'),
            require('./images/products/ZSMSK01/propertys/1200x1200_ban_xoa_mac_0023_layer_4.jpg')
        ]
    }
];

export { topsSliderImg, products, defaultAvatar };
