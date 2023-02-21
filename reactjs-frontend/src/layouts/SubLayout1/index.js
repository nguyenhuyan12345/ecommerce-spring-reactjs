import { Header, Footer, PathBar } from '~/layouts/components/index';
import SideBar from '../components/SideBar';
import { Container, Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './SubLayout1.module.scss';

const cx = classNames.bind(styles);

function SubLayout1({ children }) {
    return (
        <div>
            <Header />
            <PathBar />
            {/* <div>{children}</div> */}
            <Container>
                <div className="main">
                    <Row>
                        <Col xs={3}>
                            <SideBar />
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
