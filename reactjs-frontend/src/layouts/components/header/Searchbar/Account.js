import { Popover, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';
import UserService from '~/services/UserService';
import { API_RESOURCES_URL } from '~/constants/api';
import classNames from 'classnames/bind';
import styles from './Searchbar.module.scss';
import { Link } from 'react-router-dom';
import { MyAccountInfo, MySole, MyBought, MyAddProduct, MyListProducts, MyZocoin } from '~/constants/routes';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '~/redux-toolkit/slice/auth/auth';

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
                <Link className={cx('accMenuLink')} to={MySole}>
                    Đã bán
                </Link>
            </li>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} to={MyBought}>
                    Đã mua
                </Link>
            </li>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} to={MyAddProduct}>
                    Thêm sản phẩm mới
                </Link>
            </li>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} to={MyListProducts}>
                    Danh sách sản phẩm
                </Link>
            </li>
            <li className={cx('accMenuItem')}>
                <Link className={cx('accMenuLink')} to={MyZocoin}>
                    Zocoin
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

    // Redux
    const auth = useSelector((state) => state.auth);
    // console.log('Account', auth);
    const dispatch = useDispatch();

    //  Handle
    const handleClick = () => {
        // console.log('Click LogOut');
        dispatch(logoutSuccess());
    };
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
                        {auth.avatar ? (
                            <img className={cx('accIcon accImg')} src={API_RESOURCES_URL + '/' + auth.avatar}></img>
                        ) : (
                            <span className={cx('accIcon')}>{auth.fullName.slice(0, 2).toUpperCase()}</span>
                        )}
                    </div>
                    <span className={cx('accName')}>{auth.fullName}</span>
                </div>
            </OverlayTrigger>
        </div>
    );
};

export default Account;
