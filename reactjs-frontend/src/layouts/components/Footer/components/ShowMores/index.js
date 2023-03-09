import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Showmores.module.scss';

const cx = classNames.bind(styles);

function ShowMores() {
    return (
        <>
            <Row>
                <Col className="" xs={12} md={3}>
                    <div className={`${cx('widget')}`}>
                        <div className={cx('logo')}>
                            <a>
                                <img src="https://theme.hstatic.net/200000163831/1000713867/14/logo-footer.png?v=119"></img>
                            </a>
                        </div>
                        <p className={cx('description')}>
                            Định hướng trở thành thương hiệu thời trang nam cao cấp giá tốt ZONADO đã và đang mang đến
                            cho khách hàng những cảm xúc mới trong từng thiết kế hiện đại ( áo thun Polo, áo thun
                            T-shirt, quần short)
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <div className={cx('widget', 'aboutMe')}>
                        <h3 className={cx('label')}>
                            VỀ CHÚNG TÔI
                            <span className="icon-plus">
                                <i className="fas fa-caret-down"></i>
                            </span>
                        </h3>
                        <ul className={cx('listMenu')}>
                            <li className={cx('listMenuItem')}>
                                <a className={cx('listMenuLink')} href="/search" title="Tìm kiếm" rel="nofollow">
                                    Tìm kiếm
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/about-us"
                                    title="Giới thiệu"
                                    rel="nofollow"
                                >
                                    Giới thiệu
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/chinh-sach-doi-tra"
                                    title="Chính sách đổi trả"
                                    rel="nofollow"
                                >
                                    Chính sách đổi trả
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/chinh-sach-bao-mat"
                                    title="Chính sách bảo mật"
                                    rel="nofollow"
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/dieu-khoan-dich-vu"
                                    title="Điều khoản dịch vụ"
                                    rel="nofollow"
                                >
                                    Điều khoản dịch vụ
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/thanh-toan-giao-nhan"
                                    title="Thanh toán, Giao nhận"
                                    rel="nofollow"
                                >
                                    Thanh toán, Giao nhận
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className={cx('widget', 'support')}>
                        <h3 className={cx('label')}>
                            HỖ TRỢ KHÁCH HÀNG
                            <span className="icon-plus">
                                <i className="fas fa-caret-down"></i>
                            </span>
                        </h3>
                        <ul className="list-menu has-click">
                            <li>
                                <a className={cx('listMenuLink')} href="/search" title="Tìm kiếm" rel="nofollow">
                                    Tìm kiếm
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/about-us"
                                    title="Giới thiệu"
                                    rel="nofollow"
                                >
                                    Giới thiệu
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/chinh-sach-doi-tra"
                                    title="Chính sách đổi trả"
                                    rel="nofollow"
                                >
                                    Chính sách đổi trả
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/chinh-sach-bao-mat"
                                    title="Chính sách bảo mật"
                                    rel="nofollow"
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/dieu-khoan-dich-vu"
                                    title="Điều khoản dịch vụ"
                                    rel="nofollow"
                                >
                                    Điều khoản dịch vụ
                                </a>
                            </li>

                            <li>
                                <a
                                    className={cx('listMenuLink')}
                                    href="/pages/thanh-toan-giao-nhan"
                                    title="Thanh toán, Giao nhận"
                                    rel="nofollow"
                                >
                                    Thanh toán, Giao nhận
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className={cx('widget', 'fanpage')}>
                        <h3 className={cx('label')}>
                            FANPAGE
                            <span className="icon-plus"></span>
                            {/* <i className="fas fa-caret-down"></i> */}
                        </h3>
                        <div>
                            <img
                                className="icon-plus-img"
                                src="https://scontent.xx.fbcdn.net/v/t39.30808-6/318346738_3409808109275348_6901044603218946922_n.png?stp=dst-png_s350x350&_nc_cat=109&ccb=1-7&_nc_sid=dd9801&_nc_ohc=2qIERsCVAkMAX_us-1l&_nc_ht=scontent.xx&edm=AOm7FCUEAAAA&oh=00_AfCkdBplds7h8QyQbQLn-Y1hwjjpk_wLfQjHrSlel_xqLg&oe=64096642"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default ShowMores;
