import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Newsletters.module.scss';

const cx = classNames.bind(styles);

function Newsletters() {
    return (
        <>
            <Row>
                <Col xs={12} md={6}>
                    <div className={cx('footerBlock')}>
                        <h3>ĐĂNG KÍ NHẬN TIN TỪ ZONADO</h3>
                        <p>
                            Đăng ký ngay để là người đầu tiên cập nhật sớm nhất những tin tức thời trang, những bộ sưu
                            tập cũng như ưu đãi hấp dẫn từ ZONADO
                        </p>
                    </div>
                </Col>
                <div className={`d-block d-md-none ${cx('line')}`}></div>
                <Col xs={12} md={6}>
                    <div className={cx('relative')}>
                        <input
                            className={cx('contactTags')}
                            type="hidden"
                            id="contact_tags"
                            name="contact[tags]"
                            value="Đăng kí nhận tin"
                        />
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            name="contact[email]"
                            className={cx('mail')}
                            id="mail"
                            aria-label="Đăng ký nhận tin"
                        />
                        <button name="subscribe" className={cx('subscribe')} id="subscribe" disabled="disabled">
                            Đăng ký
                        </button>
                    </div>
                    <div className={cx('agree')}>
                        <input type="checkbox" className={cx('chbAgree')} />
                        <label>
                            <span>Tôi đồng ý nhận tin từ PIGOFASHION</span>
                        </label>
                    </div>
                </Col>
            </Row>
            <div className={cx('line')}></div>
        </>
    );
}

export default Newsletters;
