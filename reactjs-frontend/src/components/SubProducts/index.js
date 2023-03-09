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

function SubProducts({ products }) {
    // list: danh sach san pham
    // isLoading: trang thai loading
    // hasError: trang thai loi
    // status: trang thai
    const { list, isLoading, hasError, status } = products;

    const swiperRef = useRef();
    const [visible, setVisible] = useState(false);

    // const handleNext = () => swiperRef.current.slideNext();
    // const handlePrev = () => swiperRef.current.slidePrev();

    const handleShow = () => setVisible(true);
    const handleHide = () => setVisible(false);

    const handleFomat = (price) => `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    const handleDiscountPrice = (price, discount) => {
        const newPrice = (price - (price / 100) * discount) / 10000;
        const discountPrice = Math.round(newPrice) * 10000;
        return discountPrice;
    };

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
        // <h1>Trang san pham con</h1>
        <Container fluid="md" className={`${cx('product')} `}>
            <div>
                <Row onMouseOver={handleShow} onMouseOut={handleHide}>
                    {list.map((product, index) => {
                        const { price, discount } = product;
                        return (
                            <Col xs={3} key={index}>
                                <ImageProducts product={product} />
                                <div className={cx('productBox')}>
                                    <Card.Title
                                        className={cx('productTitle')}
                                        title={product.description.toLocaleUpperCase()}
                                    >
                                        {product.description.toLocaleUpperCase()}
                                    </Card.Title>
                                    <Card.Text className={cx('productDescription')}>
                                        {product.sumNumOrder ? `(${product.sumNumOrder} đã bán)` : `(0 đã bán)`}
                                    </Card.Text>
                                    <Card.Text className={cx('productCost')}>
                                        <span>
                                            {handleFomat(handleDiscountPrice(price, discount))}
                                            <ins>đ</ins>
                                        </span>
                                        <strike>{handleFomat(price)}</strike>
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
