import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import Account from './Account';
import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import { defaultAvatar } from '~/assets'; // Kiểm tra hiện thị avartar

const cx = classNames.bind(styles);

// const exAcc = {
//     name: 'huyan2010',
//     img: undefined
// };

const exAcc = {
    name: 'huyan2010',
    img: defaultAvatar
};

function Searchbar() {
    const [login, setLogin] = useState(false);
    const [currentAcc, setCurrentAcc] = useState(exAcc);
    
    useEffect(() => {
        if (localStorage.getItem('jwt') && localStorage.getItem('accName')) {
            setLogin(true);
            setCurrentAcc({ name: localStorage.getItem('accName'), img: localStorage.getItem('avatar') });
        } else {
            setLogin(false);
        }
    }, []);

    return (
        <Container fluid="xxl" className={cx('searchBar')}>
            <Row className={`${cx('searchBarItem')} margins`}>
                {/* Logo */}
                <Col xs lg={3}>
                    <Link className={cx('logo')} to="/">
                        <img
                            className={cx('image')}
                            src="https://theme.hstatic.net/200000163831/1000713867/14/logo.png?v=119"
                            alt=""
                        />
                    </Link>
                </Col>
                {/* Search input */}
                <Col xs lg={6} className="d-none d-lg-block">
                    <div className={cx('search')}>
                        <input type="text" className={cx('searchInput')} placeholder="Tìm kiếm sản phẩm" />
                        <a className={cx('searchBtn')}>
                            <FontAwesomeIcon className={cx('searchIcon')} icon={faMagnifyingGlass} />
                            <span className={cx('searchLabel')}>Tìm kiếm</span>
                        </a>
                    </div>
                </Col>
                {/* Hotline */}
                <Col xs lg={3}>
                    <div className={cx('hotline')}>
                        {login ? <Account acc={currentAcc} /> : <Auth />}

                        {/* Card sidebar */}
                        <button className={` ${cx('hotlineItem', 'hotlineCard')}`}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>

                        {/* Menu sidebar*/}
                        <button className={`d-lg-none ${cx('hotlineItem', 'hotlineMenu')}`}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Searchbar;
