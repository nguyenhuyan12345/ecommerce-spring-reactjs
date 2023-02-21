import { Row, Table } from 'react-bootstrap';
import { API_RESOURCES_URL } from '~/constants/api';

import classNames from 'classnames/bind';
import styles from './MyListProductsPage.module.scss';

const cx = classNames.bind(styles);

const ProductsTable = (data) => {
    return (
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
                        console.log(productArrValues);
                        return (
                            <tr key={index}>
                                {productArrValues.map((value, index) => {
                                    if (Array.isArray(value)) {
                                        return (
                                            <td>
                                                {value.map((item, index) => {
                                                    return (
                                                        <img
                                                            key={index}
                                                            src={`${API_RESOURCES_URL}/${item.thumbnail}`}
                                                            alt="Hình ảnh chỉnh của sản phẩm"
                                                            style={{ width: '30px' }}
                                                        />
                                                    );
                                                })}
                                            </td>
                                        );
                                    } else if (
                                        typeof value === 'string' &&
                                        (value.includes('.webp') || value.includes('.png'))
                                    ) {
                                        console.log(value);
                                        return (
                                            <td>
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
    );
};

export default ProductsTable;
