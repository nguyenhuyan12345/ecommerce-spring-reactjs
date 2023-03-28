import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartService from '~/services/CartService';

import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import { data } from 'jquery';

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
    const [cart, setCart] = useState({});
    const [num, setNum] = useState(0);
    //Redux state
    const auth = useSelector((state) => state.auth);
    const { accessToken, tokenType } = auth;
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const param = { show, setShow, handleClose, handleShow };

    useEffect(() => {
        CartService.getCart(accessToken, tokenType)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setCart(data);
                setNum(data.length);
                console.log(num);
            });
    }, [dispatch]);

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
