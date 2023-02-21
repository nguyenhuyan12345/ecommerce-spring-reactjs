import { Products, SubProducts } from '~/components';
import classNames from 'classnames/bind';
import styles from './MainContainer.module.scss';
import { Container, Row } from 'react-bootstrap';

const cx = classNames.bind(styles);

const Main = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <SubProducts />
                </Row>
                <Row>
                    <SubProducts />
                </Row>
                <Row>
                    <SubProducts />
                </Row>
            </Container>
        </div>
    );
};

export default Main;
