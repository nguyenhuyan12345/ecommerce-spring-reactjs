import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ProductService from '~/services/ProductService';
import ProductsTable from './ProductsTable';
import WaitLoading from './WaitLoading';

function MyListProductsPage() {
    const [component, setComponent] = useState(WaitLoading);
    const [pagination, setPagination] = useState({ page: 0, perPage: 10 });

    // useEffect(() => {
    //     ProductService.getAllProduct()
    //         .then((res) => {
    //             console.log(res);
    //             return res.data;
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setComponent(ProductsTable(data));
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    useEffect(() => {
        ProductService.getProduct(pagination)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setComponent(ProductsTable(data));
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return <Row>{component}</Row>;
}

export default MyListProductsPage;
