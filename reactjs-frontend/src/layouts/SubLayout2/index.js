import { Header, Footer, PathBar } from '~/layouts/components/index';
import SideBar2 from '../components/SideBar2';
import { Container, Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './SubLayout2.module.scss';

const cx = classNames.bind(styles);

function SubLayout1({ children }) {
    return (
        <div>
            <Header />
            <PathBar />
            {/* <div>{children}</div> */}
            <Container fluid={'lg'}>
                <div className="main">
                    <Row>
                        <Col xs={3}>
                            <SideBar2 />
                        </Col>
                        <Col xs={9}>
                            {/*Dữ liệu sản phẩm vào */}
                            <div>{children}</div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default SubLayout1;
