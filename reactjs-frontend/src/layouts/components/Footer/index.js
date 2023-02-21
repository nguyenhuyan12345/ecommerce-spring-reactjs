import { Container } from 'react-bootstrap-v5';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { ShowMores, Newsletters } from './components';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <Container fluid="lg">
                <Newsletters />
                <ShowMores />
            </Container>
        </footer>
    );
}

export default Footer;
