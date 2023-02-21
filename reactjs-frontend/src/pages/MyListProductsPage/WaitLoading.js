import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

import classNames from 'classnames/bind';
import styles from './MyListProductsPage.module.scss';

const cx = classNames.bind(styles);

const WaitLoading = () => {
    return (
        <Row>
            <Col>
                <div className={cx('waitLoading')}>
                    <h1 className={cx('waitLoadingMessage')}>ĐANG TẢI DỮ LIỆU</h1>
                    <ClipLoader size={30} color={'#008891'} />
                </div>
            </Col>
        </Row>
    );
};

export default WaitLoading;
