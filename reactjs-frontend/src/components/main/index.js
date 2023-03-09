import { Products, SubProducts } from '~/components';
import classNames from 'classnames/bind';
import styles from './MainContainer.module.scss';
import { Container, Row } from 'react-bootstrap';
import { WaitLoading } from '~/components';

const cx = classNames.bind(styles);

const Main = ({ products }) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <SubProducts products={products} />
                </Row>
            </Container>
        </div>
    );
};

export default Main;
