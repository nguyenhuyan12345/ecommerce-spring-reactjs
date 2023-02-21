import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Policy.module.scss';

const cx = classNames.bind(styles);

function Policy() {
    return (
        <Container className={cx('sectionPolicy')}>
            <Row className={cx('listPolicy')}>
                <Col className={cx('itemPolicy')}>
                    <img className={cx('itemPolicy__img')} src="https://theme.hstatic.net/200000163831/1000713867/14/icon-policy1.png?v=119" alt="" />
                    <span>Freeship toàn quốc đơn {'>'} 399K</span>
                </Col>
                <Col className={cx('itemPolicy')}>
                    <img className={cx('itemPolicy__img')} src="https://theme.hstatic.net/200000163831/1000713867/14/icon-policy2.png?v=119" alt="" />
                    <span>Kiểm tra hàng trước khi thanh toán</span>
                </Col>
                <Col className={cx('itemPolicy')}>
                    <img className={cx('itemPolicy__img')} src="https://theme.hstatic.net/200000163831/1000713867/14/icon-policy3.png?v=119" alt="" />
                    <span>Hỗ trợ đổi size trong vòng 07 ngày</span>
                </Col>
            </Row>
        </Container>
    );
}

export default Policy;
