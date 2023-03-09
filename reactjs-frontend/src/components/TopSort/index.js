import { Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './TopSort.module.scss';

const cx = classNames.bind(styles);

const TopSort = () => {
    return (
        <Container className="mt-4 mmb-4">
            <Row>
                <div className="d-flex align-items-center">
                    <h5 className={cx('header')}>Xếp theo:</h5>
                    <ul className="d-flex align-items-center">
                        <li className="ms-3 d-flex align-items-center">
                            <input className="me-1" type="checkbox" />
                            <a href="#" className={cx('item')} title="Tên A-Z">
                                Tên A-Z
                            </a>
                        </li>
                        <li className="ms-3 d-flex align-items-center">
                            <input className="me-1" type="checkbox" />
                            <a href="#" className={cx('item')} title="Tên Z-A">
                                Tên Z-A
                            </a>
                        </li>
                        <li className="ms-3 d-flex align-items-center">
                            <input className="me-1" type="checkbox" />
                            <a href="#" className={cx('item')} title="Giá thấp đến cao">
                                Giá thấp đến cao
                            </a>
                        </li>
                        <li className="ms-3 d-flex align-items-center">
                            <input className="me-1" type="checkbox" />
                            <a href="#" className={cx('item')} title="Giá cao xuống thấp">
                                Giá cao xuống thấp
                            </a>
                        </li>
                        <li className="ms-3 d-flex align-items-center">
                            <input className="me-1" type="checkbox" />
                            <a href="#" className={cx('item')} title="Mới nhất">
                                Mới nhất
                            </a>
                        </li>
                        <li className="ms-3 d-flex align-items-center">
                            <input className="me-1" type="checkbox" />
                            <a href="#" className={cx('item')} title="Bán chạy nhất">
                                Bán chạy nhất
                            </a>
                        </li>
                    </ul>
                </div>
            </Row>
        </Container>
    );
};

export default TopSort;
