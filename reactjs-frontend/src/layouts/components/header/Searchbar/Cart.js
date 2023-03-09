import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';

const cx = classNames.bind(styles);

const CartSideBar = ({ param }) => {
    const { show, setShow, handleClose, handleShow } = param;

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Rỏ hàng</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>Danh sách rỏ hàng</Offcanvas.Body>
        </Offcanvas>
    );
};

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const param = { show, setShow, handleClose, handleShow };

    return (
        <>
            <button className={` ${cx('hotlineItem', 'hotlineCard')}`} variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>

            <CartSideBar param={param} />
        </>
    );
};

export default Cart;
