import { useRef, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import { ImageProducts, Prev, Next } from './components';

import classNames from 'classnames/bind';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products({ title = 'HÀNG MỚI VỀ', products }) {
    // list: danh sach san pham
    // isLoading: trang thai loading
    // hasError: trang thai loi
    // status: trang thai
    const { list, isLoading, hasError, status } = products;
    // console.log(list);

    const swiperRef = useRef();
    const [visible, setVisible] = useState(false);

    // handle funtion
    const handleNext = () => swiperRef.current.slideNext();
    const handlePrev = () => swiperRef.current.slidePrev();

    const handleShow = () => setVisible(true);
    const handleHide = () => setVisible(false);

    const handleFomat = (price) => `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    const handleDiscountPrice = (price, discount) => {
        const newPrice = (price - (price / 100) * discount) / 10000;
        const discountPrice = Math.round(newPrice) * 10000;
        return discountPrice;
    };

    const handleAddCart = () => {
        console.log('Đã thêm vào giỏ hàng');
    };

    const params = {
        onSwiper: (swiper) => (swiperRef.current = swiper),
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        modules: [Autoplay]
    };

    const render = (list) => {
        return (
            <Container fluid="md" className={`${cx('product')} `}>
                <div className="margins">
                    <Row className={cx('title')}>
                        <h3>{title.toLocaleUpperCase()}</h3>
                    </Row>
                    <Row onMouseOver={handleShow} onMouseOut={handleHide}>
                        <Swiper {...params}>
                            {list.map((product, index) => {
                                const { price, discount } = product;
                                return (
                                    <SwiperSlide key={index}>
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
                                                <span onClick={handleAddCart}>Thêm vào giỏ</span>
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <Next onClick={handleNext} visible={visible} onMouseOver={handleShow} />
                            <Prev onClick={handlePrev} visible={visible} onMouseOver={handleShow} />
                        </Swiper>
                    </Row>
                    <Row className={cx('viewMore')}>
                        <button className={cx('btnViewMore')}>XEM THEM</button>
                    </Row>
                </div>
            </Container>
        );
    };

    const loading = () => {
        return (
            <div>
                <h1>Đang tải sản phẩm</h1>
            </div>
        );
    };

    return list ? render(list) : loading();
}

export default Products;
