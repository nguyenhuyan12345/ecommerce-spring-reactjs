import { useRef, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import { ImageProducts } from '~/components/Products/components';

import classNames from 'classnames/bind';
import styles from './SubProducts.module.scss';

const cx = classNames.bind(styles);

const defaultProducts = [
    {
        src: [
            'https://product.hstatic.net/200000163831/product/1200x1200_0001_layer_25_4356d3bca1444fa383f9379906e2a924_large.jpg',
            'https://product.hstatic.net/200000163831/product/1200x1200_0031_layer_31_ebdc8f3af38b4d0aad25f4c0d841b6b6_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 12,
        cost: 399000,
        oldCost: 450000,
        sale: 30
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/ao_so_mi_ford_mau_bien_1_09c29764a3d94156be3dea33788bfa87_large.jpg',
            'https://product.hstatic.net/200000163831/product/ao_so_mi_ford_1200x1200_0016_layer_25_b2c9a2f5ec0d4753ba55baa5a1ce8633_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 10,
        cost: 399000,
        oldCost: 450000,
        sale: 50
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/1200x1200_0016_layer_3_ff24547966304b60bc6df75f80611e6d_large.jpg',
            'https://product.hstatic.net/200000163831/product/1200x1200_0015_layer_4_b8fe0f4652f343cb8a8a22f85142129b_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 20,
        cost: 399000,
        oldCost: 450000,
        sale: 20
    },
    {
        src: [
            'https://product.hstatic.net/200000163831/product/qdcr05_bo_3_so_1_9dbd249e34c543d0bd18f99599a1d0ef_large.jpg',
            'https://product.hstatic.net/200000163831/product/1200x1200_0013_layer_7_64778ab1bec642bda682b66cad63aaab_large.jpg'
        ],
        title: 'Áo khoác dù nam phối nón chất dù 2 lớp Zonado Zakd28 (3 màu)',
        purchased: 3,
        cost: 399000,
        oldCost: 450000,
        sale: 5
    }
];

function SubProducts({ products = defaultProducts }) {
    const swiperRef = useRef();
    const [visible, setVisible] = useState(false);
    // setVisible(true);

    const handleNext = () => swiperRef.current.slideNext();
    const handlePrev = () => swiperRef.current.slidePrev();

    const handleShow = () => setVisible(true);
    const handleHide = () => setVisible(false);

    const handleFomat = (product) => `${product.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

    const params = {
        onSwiper: (swiper) => (swiperRef.current = swiper),
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        modules: [Autoplay]
    };

    return (
        <Container fluid="md" className={`${cx('product')} `}>
            <div>
                <Row onMouseOver={handleShow} onMouseOut={handleHide}>
                    {products.map((product, index) => {
                        return (
                            <Col xs={3} key={index}>
                                <ImageProducts product={product} />
                                <div className={cx('productBox')}>
                                    <Card.Title
                                        className={cx('productTitle')}
                                        title={product.title.toLocaleUpperCase()}
                                    >
                                        {product.title.toLocaleUpperCase()}
                                    </Card.Title>
                                    <Card.Text
                                        className={cx('productDescription')}
                                    >{`(${product.purchased} đã bán)`}</Card.Text>
                                    <Card.Text className={cx('productCost')}>
                                        <span>
                                            {handleFomat(product)}
                                            <ins>đ</ins>
                                        </span>
                                        <strike>{product.oldCost}</strike>
                                    </Card.Text>
                                    <button className={cx('btnAddToCard')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>Thêm vào giỏ</span>
                                    </button>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Container>
    );
}

export default SubProducts;
