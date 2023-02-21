import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import styles from './PathBar.module.scss';

const cx = classNames.bind(styles);

const PathBar = () => {
    return (
        <div className={cx('pathBar')}>
            <Container>
                <ul className={cx('container')}>
                    <li className={cx('path')}>Home/.................</li>
                </ul>
            </Container>
        </div>
    );
};

export default PathBar;
