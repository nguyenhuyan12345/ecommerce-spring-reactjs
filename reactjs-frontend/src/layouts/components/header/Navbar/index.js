import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

var navBarItem = [
    {
        title: 'TRANG CHỦ',
        href: '/',
        viewMore: false
    },
    {
        title: 'HÀNG MỚI',
        href: '/new-products',
        viewMore: false
    },
    {
        title: 'SẢN PHẨM',
        href: '/products',
        viewMore: true
    },
    {
        title: 'BÁN CHẠY',
        href: '/selling',
        viewMore: false
    },
    {
        title: 'SALE',
        href: '/sale',
        viewMore: true
    },
    {
        title: 'BLOG',
        href: '/blog',
        viewMore: false
    },
    {
        title: 'LIÊN HỆ',
        href: '/contact',
        viewMore: false
    }
];

function Navbar() {
    return (
        <Container>
            <Row className={`${cx('navBarRow')} margins`}>
                <Col xs className={`d-none d-lg-flex ${cx('navBar')}`}>
                    {navBarItem.map((item, index) => {
                        return (
                            <button key={index} className={cx('navBarItem')}>
                                <Link to={item.href} href={item.href} className={cx('navBarLink')}>
                                    <div>{item.title}</div>
                                    {item.viewMore ? (
                                        <FontAwesomeIcon className={cx('navBarItemIcon')} icon={faChevronDown} />
                                    ) : undefined}
                                </Link>
                            </button>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;
