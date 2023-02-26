import { Popover, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';
import { MyAccountInfo } from '~/constants/routes';
import UserService from '~/services/UserService';
import { API_RESOURCES_URL } from '~/constants/api';
import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const popover = (handleClick) => (
    <Popover id="popover-basic">
        <ul className={cx('accMenuContainer')}>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} to={MyAccountInfo}>
                    Tài khoản của tôi
                </Link>
            </li>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} onClick={handleClick}>
                    Đăng xuất
                </Link>
            </li>
        </ul>
    </Popover>
);

const Account = ({ acc }) => {
    const [show, setShow] = useState(false);

    //  Handle
    const handleClick = () => {
        console.log('Click LogOut');
        UserService.logOut();
        window.location.reload();
    };
    if (acc) {
        return (
            <div
                onMouseMove={() => {
                    setShow(true);
                }}
                onMouseOut={() => {
                    setShow(false);
                }}
            >
                <OverlayTrigger placement="bottom" overlay={popover(handleClick)} show={show}>
                    <div className={cx('accContainer')}>
                        <div className={cx('accIconContainer')}>
                            {acc.avatar ? (
                                <img className={cx('accIcon accImg')} src={API_RESOURCES_URL + '/' + acc.avatar}></img>
                            ) : (
                                <span className={cx('accIcon')}>{acc.email.slice(0, 2).toUpperCase()}</span>
                            )}
                        </div>
                        <span className={cx('accName')}>{acc.fullName}</span>
                    </div>
                </OverlayTrigger>
            </div>
        );
    }
};

export default Account;
