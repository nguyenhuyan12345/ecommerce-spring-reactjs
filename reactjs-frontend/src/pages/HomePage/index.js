import { Container } from 'react-bootstrap';
import { ImageSlider, Policy, Products } from '~/components';
import { topsSliderImg } from '~/assets';

const newProducts = [
    {
        src: [
            'https://product.hstatic.net/200000163831/product/1200x1200_0018_layer_1_5719dc1026814a3585ea99c092846eaa.jpg',
            'https://product.hstatic.net/200000163831/product/quan_kaki_qkkj02_be_vang_6_b92621e61dfe472f818f76add6351f7e_large.jpg'
        ],
        title: 'Quần dài nam thể thao chất dù gió co giãn cao cấp Zfp02 Zonado (chọn màu)',
        purchased: 12,
        cost: 399000,
        oldCost: 450000,
        sale: 30
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/ao_kaki_lot_long_den_2_124e63a4161c4d99ad8bdbe148bedc97_large.jpg',
            'https://product.hstatic.net/200000163831/product/ao_kaki_lot_long__0017_layer_3_94c928da99454abbb6fd0fddf127bb5f_large.jpg'
        ],
        title: 'Áo khoác kaki nam cổ đứng nam tính ZAKKJ02',
        purchased: 10,
        cost: 399000,
        oldCost: 450000,
        sale: 50
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/set_bo_1200x1200_0014_layer_7_f9a1ffddf73340cb9f550c6c4f67702c_large.jpg',
            'https://product.hstatic.net/200000163831/product/set_bo_1200x1200_0001_layer_20_ac6d3ca9f981495f9f3cc7e96455b53f_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 20,
        cost: 399000,
        oldCost: 450000,
        sale: 20
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/ao_tay_dai_adt09_1200x1200_0013_layer_3_0adaa54fc3054a2fa00a889e262982f8_large.jpg',
            'https://product.hstatic.net/200000163831/product/ao_tay_dai_adt09_1200x1200_0011_layer_6_5a370171800d483da278da1cb1595509_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 3,
        cost: 399000,
        oldCost: 450000,
        sale: 5
    }
];

const coat = [
    {
        src: [
            'https://product.hstatic.net/200000163831/product/d0daf0_800x1200_max_compressed_e68497389f464776ae0a2eee41290243_grande_0f58be6065e546e6bcd30c0b1ec10174_large.jpg',
            'https://product.hstatic.net/200000163831/product/ao_da_adn10_hinh_6_bb5b3ab5d3eb4a3a9c3c927b4b6320c9_large.jpg'
        ],
        title: 'Áo Khoác Da nam lót lông thu đông cao cấp Zonado ZAD28',
        purchased: 12,
        cost: 399000,
        oldCost: 450000,
        sale: 30
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/z2047941465483_2229115fb129d890b29c6c6ac64ff88e_8dcef69ddf174da4bb4933a4a153e34c_large.jpg',
            'https://product.hstatic.net/200000163831/product/095a3308_compressed_ebcf26bae8cf4c279d2f717a98aea04b_large.jpg'
        ],
        title: 'Áo khoác kaki nam cổ đứng nam tính ZAKKJ02',
        purchased: 10,
        cost: 399000,
        oldCost: 450000,
        sale: 50
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/z2106102282871_a65dcfc3bef017fb6719e4d07537c4c3_6ff334f4b70d479a80fe9ec982a1ba48_large.jpg',
            'https://product.hstatic.net/200000163831/product/img_1364_b195a5cdcf90469abf2411211c5306d5_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 20,
        cost: 399000,
        oldCost: 450000,
        sale: 20
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/z2106102282118_c8e0752fae379e48d0a824acf18abda9_fd2ea3ffb3c3444c81e6e4b632e7a314_large.jpg',
            'https://product.hstatic.net/200000163831/product/den_1_db4fd907ef5b4d4c9e332d188da89dec_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 3,
        cost: 399000,
        oldCost: 450000,
        sale: 5
    }
];

// console.log(products[0].uploadDate.getDate());

function HomePage() {
    return (
        <Container fluid="lg">
            <ImageSlider topsSliderImg={topsSliderImg}></ImageSlider>
            <Policy />
            <Products title="hàng mới về" products={newProducts}></Products>
            <Products title="top áo khoác" products={coat}></Products>
            <Products title="top bán chạy"></Products>
            <Policy />
        </Container>
    );
}

export default HomePage;
