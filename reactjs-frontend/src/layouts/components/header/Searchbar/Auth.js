import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Searchbar.module.scss';

const cx = classNames.bind(styles);

const Auth = () => {
    return (
        <div className={cx('auth')}>
            <Link to="/login" className={`d-none d-lg-block ${cx('hotlineItem')}`}>
                Đăng nhập
            </Link>
            <span className={`d-none d-lg-block ${cx('hotlineItem')}`}>/</span>

            <Link to="/register" className={`d-none d-lg-block ${cx('hotlineItem')}`}>
                Đăng kí
            </Link>

            <Link to="/search" className={`d-lg-none ${cx('hotlineItem', 'hotlineSearch')}`}>
                <FontAwesomeIcon className={cx('searchIcon')} icon={faMagnifyingGlass} />
            </Link>
        </div>
    );
};

export default Auth;
