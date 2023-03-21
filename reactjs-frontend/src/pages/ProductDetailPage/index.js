import { useEffect, useState } from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap-v5';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailProductPage } from '~/redux-toolkit/slice/detailProductPage/detailProductPage';
import { useParams } from 'react-router-dom';
import { API_RESOURCES_URL } from '~/constants/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './ProductDetailPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // Redux state
    const detailProduct = useSelector((state) => state.detailProductPage);
    const dispatch = useDispatch();

    console.log(detailProduct);

    const { colorImages, description, discount, gallery, inventory, price, sumOrder } = detailProduct.product;

    // console.log(colorImages, description, discount, gallery, inventory, price, sumOrder);

    useEffect(() => {
        dispatch(getDetailProductPage({ id: productId }));
    }, [dispatch]);

    // const params = {
    //     onSwiper: (swiper) => (swiperRef.current = swiper),
    //     loop: true,
    //     spaceBetween: 20,
    //     slidesPerView: 4,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false
    //     },
    //     modules: [Autoplay]
    // };

    return (
        <Container>
            <Row>
                <Col xs={5}>
                    <Row>
                        <div className={cx('iamgeContainer')}>
                            {detailProduct.status === 'fulfilled' ? (
                                <img className={cx('iamge')} src={API_RESOURCES_URL + '/' + gallery[0]}></img>
                            ) : undefined}
                        </div>
                    </Row>
                    <Row>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView={4}
                            loop={true}
                        >
                            {/* <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide> */}
                            {detailProduct.status === 'fulfilled' ? (
                                <>
                                    {gallery.map((iamge, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img
                                                    className={cx('moreIamge')}
                                                    src={API_RESOURCES_URL + '/' + iamge}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </>
                            ) : undefined}
                        </Swiper>
                    </Row>
                </Col>
                <Col xs={7}>
                    <h1>Chi tiết sản phẩm</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailPage;
