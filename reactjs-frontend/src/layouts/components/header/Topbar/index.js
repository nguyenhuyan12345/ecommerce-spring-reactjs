import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faSackXmark } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './Topbar.module.scss';

const cx = classNames.bind(styles);

function Topbar() {
    return (
        <Container fluid className={`d-none d-md-flex ${cx('topBar')}`} style={{ padding: '0' }}>
            <Container className={`${cx('topBarItem')} `}>
                <div className="margins">
                    <Row>
                        <Col xs md={4} className={cx('topBarLeft')}>
                            <marquee className={cx('marquee')} behavior="" direction="">
                                FREE SHIP đơn từ 399K
                            </marquee>
                        </Col>
                        <Col xs md={8} className={cx('topBarRight')}>
                            <a href="/" className={cx('zocoin')}>
                                <FontAwesomeIcon className={cx('topBarRightIcon')} icon={faSackXmark} />
                                Zocoin
                            </a>
                            <a href="/" className={cx('checkOrder')}>
                                <FontAwesomeIcon className={cx('topBarRightIcon')} icon={faTruck} />
                                Kiểm tra đơn hàng
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default Topbar;
