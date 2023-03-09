import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCoins, faFileUpload, faStore, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem, setItemList } from '~/redux-toolkit/slice/Sidebar2';

import classNames from 'classnames/bind';
import styles from './SideBar2.module.scss';

import { MyAccountInfo, MySole, MyBought, MyAddProduct, MyListProducts, MyZocoin } from '~/constants/routes';

const cx = classNames.bind(styles);

const sideBarItem = [
    {
        title: 'Tài khoản của tôi',
        href: MyAccountInfo,
        viewMore: false,
        id: 1,
        icon: faUser
    },
    {
        title: 'Đã bán',
        href: MySole,
        viewMore: false,
        id: 2,
        icon: faBagShopping
    },
    {
        title: 'Đã mua',
        href: MyBought,
        viewMore: true,
        id: 3,
        icon: faStore
    },
    {
        title: 'Thêm sản phẩm mới',
        href: MyAddProduct,
        viewMore: false,
        id: 4,
        icon: faFileUpload
    },
    {
        title: 'Danh sách sản phẩm',
        href: MyListProducts,
        viewMore: false,
        id: 5,
        icon: faTruck
    },
    {
        title: 'Zocoin',
        href: MyZocoin,
        viewMore: false,
        id: 6,
        icon: faCoins
    }
];

function SideBar2() {
    const itemActive = useSelector((state) => state.ItemActive);
    const dispatch = useDispatch();

    return (
        <div>
            {sideBarItem.map((item, index) => {
                return (
                    <div
                        className={cx('sideBarContainer')}
                        key={index}
                        onClick={() => {
                            dispatch(setActiveItem(item.id));
                        }}
                    >
                        <Link to={item.href}>
                            <div
                                className={cx('sideBarItem', {
                                    ['active']: itemActive.activeID == item.id ? true : false
                                })}
                            >
                                <div className={cx('sideBarIconContainer')}>
                                    <FontAwesomeIcon className={cx('sideBarIcon')} icon={item.icon} />
                                </div>
                                <h2 className={cx('sideBarTitle')}>{item.title}</h2>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default SideBar2;
