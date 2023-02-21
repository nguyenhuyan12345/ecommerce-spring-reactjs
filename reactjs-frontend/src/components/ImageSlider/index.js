import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import { Next, Prev } from './components';

import { topsSliderImg as defaultTopsSliderImg } from '~/assets';

import classNames from 'classnames/bind';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider({ topsSliderImg = defaultTopsSliderImg, indicators }) {
    const swiperRef = useRef();

    const handleNext = () => swiperRef.current.slideNext();
    const handlePrev = () => swiperRef.current.slidePrev();

    const params = {
        onSwiper: (swiper) => (swiperRef.current = swiper),
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        modules: [Autoplay]
    };

    return (
        <Swiper {...params}>
            {topsSliderImg.map((img, index) => {
                return (
                    <SwiperSlide key={index}>
                        <a href="#">
                            <img className={cx('sliderImg')} src={img} alt={`Slider Image ${index + 1}`}></img>
                        </a>
                    </SwiperSlide>
                );
            })}
            <Next onClick={handleNext} />
            <Prev onClick={handlePrev} />
        </Swiper>
    );
}

export default ImageSlider;
