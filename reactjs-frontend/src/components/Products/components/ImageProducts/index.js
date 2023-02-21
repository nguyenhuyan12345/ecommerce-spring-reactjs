import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames/bind';
import styles from './ImageProducts.module.scss';

const cx = classNames.bind(styles);

function ImageProducts({ product }) {
    const swiperRef = useRef();

    const handleNext = () => swiperRef.current.slideNext();
    const handlePrev = () => swiperRef.current.slidePrev();

    const params_2 = {
        onSwiper: (swiper) => (swiperRef.current = swiper),
        slidesPerView: 1,
        loop: true
    };

    return (
        <Swiper {...params_2}>
            {product.src.map((src, index) => {
                return (
                    <SwiperSlide onMouseOver={handleNext} onMouseOut={handlePrev} key={index}>
                        <img className={cx('productImage')} src={src} alt="Ảnh sản phẩm" />
                        <span className={cx('productSale')}>{`${product.sale}%`}</span>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default ImageProducts;
