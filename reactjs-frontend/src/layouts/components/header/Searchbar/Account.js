import { Popover, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';
import { MyAccountInfo } from '~/constants/routes';
import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const popover = (
    <Popover id="popover-basic">
        <ul className={cx('accMenuContainer')}>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} to={MyAccountInfo}>
                    Tài khoản của tôi
                </Link>
            </li>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')}>Đăng xuất</Link>
            </li>
        </ul>
    </Popover>
);

const Account = ({ acc }) => {
    const [show, setShow] = useState(false);

    return (
        <div
            onMouseMove={() => {
                setShow(true);
            }}
            onMouseOut={() => {
                setShow(false);
            }}
        >
            <OverlayTrigger placement="bottom" overlay={popover} show={show}>
                <div className={cx('accContainer')}>
                    <div className={cx('accIconContainer')}>
                        {acc.img ? (
                            <img className={cx('accIcon accImg')} src={acc.img}></img>
                        ) : (
                            <span className={cx('accIcon')}>{acc.name.slice(0, 2).toUpperCase()}</span>
                        )}
                    </div>
                    <span className={cx('accName')}>{acc.name}</span>
                </div>
            </OverlayTrigger>
        </div>
    );
};

export default Account;
