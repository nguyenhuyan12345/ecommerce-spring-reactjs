import { Row, Col, Table, Pagination, Form, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { API_RESOURCES_URL } from '~/constants/api';
import { Formik } from 'formik';

import classNames from 'classnames/bind';
import styles from './MyListProductsPage.module.scss';

const cx = classNames.bind(styles);

const ProductsTable = (data) => {
    return (
        <div>
            <Row className="mb-4 d-flex justify-content-between">
                <Col xs={6}>
                    <InputGroup>
                        <Button>Tìm kiếm</Button>
                        <Form.Control />
                    </InputGroup>
                </Col>
                <Col xs={2}>
                    <InputGroup>
                        <Form.Text>Per page</Form.Text>
                        <Form.Select>
                            <option>24</option>
                            <option>48</option>
                            <option>100</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Table bordered hover>
                    {/* Table Header */}
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((header, index) => {
                                return <th key={index}>{header}</th>;
                            })}
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {data.map((product, index) => {
                            const productArrValues = Object.values(product);
                            // console.log(productArrValues);
                            return (
                                <tr key={index}>
                                    {productArrValues.map((value, index) => {
                                        if (Array.isArray(value)) {
                                            return (
                                                <td key={index}>
                                                    {value.map((item, index) => {
                                                        return (
                                                            <img
                                                                key={index}
                                                                src={`${API_RESOURCES_URL}/${item.thumbnail}`}
                                                                alt="Hình ảnh chỉnh của sản phẩm"
                                                                style={{ width: '20px' }}
                                                            />
                                                        );
                                                    })}
                                                </td>
                                            );
                                        } else if (
                                            typeof value === 'string' &&
                                            (value.includes('.webp') ||
                                                value.includes('.png') ||
                                                value.includes('.jpg'))
                                        ) {
                                            // console.log(value);
                                            return (
                                                <td key={index}>
                                                    <img
                                                        src={`${API_RESOURCES_URL}/${value}`}
                                                        alt="Hình ảnh chỉnh của sản phẩm"
                                                        style={{ width: '50px' }}
                                                    />
                                                </td>
                                            );
                                        } else {
                                            return <td key={index}>{value}</td>;
                                        }
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">
                                2 <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </Row>
        </div>
    );
};

export default ProductsTable;
