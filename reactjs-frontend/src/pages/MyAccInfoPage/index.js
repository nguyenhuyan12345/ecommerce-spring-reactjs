import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setActiveItem } from '~/redux-toolkit/slice/Sidebar2';
import classNames from 'classnames/bind';
import styles from './MyAccInfoPage.module.scss';

const cx = classNames.bind(styles);

function MyAccInfoPage() {
    // // const itemActive = useSelector((state) => state.ItemActive);
    // console.log(itemActive);
    // const dispatch = useDispatch();
    // dispatch(setActiveItem(1));

    return (
        <div className={cx('profileContainer')}>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <div className={cx('header')}>
                            <div className={cx('headerLabelContainer')}>
                                <h1 className={cx('headerLabel')}>Hồ Xơ Của Tôi</h1>
                            </div>
                            <div className={cx('headerTitleContainer')}>
                                <span className={cx('headerTitle')}>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={8}>
                        <Row>
                            <Col xs={3} className="mb-4">
                                <label className={cx('label')}>Tên đầy đủ</label>
                            </Col>
                            <Col xs={9}>
                                <span className={cx('item')}>Nguyễn Huy An</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="mb-4">
                                <label className={cx('label')}>Địa chỉ email</label>
                            </Col>
                            <Col xs={9}>
                                <span className={cx('item')}>huyan@example</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="mb-4">
                                <label className={cx('label')}>Số điện thoại</label>
                            </Col>
                            <Col xs={9}>
                                <span className={cx('item')}>****123</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="mb-4">
                                <label className={cx('label')}>Địa chỉ</label>
                            </Col>
                            <Col xs={9} className="mb-4">
                                <span className={cx('item')}>Đoan hùng, Phú Thọ</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <div className={cx('avatarBox')}>
                            <div className={cx('avatar')}>
                                <div className={cx('avatarContainer')}></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                {/* <input class="_8LDVUy" type="file" accept=".jpg,.jpeg,.png"></input> */}
                                <button className="button buttonSmall" type="button">
                                    Chọn ảnh
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyAccInfoPage;
