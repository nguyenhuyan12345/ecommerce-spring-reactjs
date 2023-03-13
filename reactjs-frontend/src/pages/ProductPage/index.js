import { useEffect } from 'react';

import { Main, Policy, TopImage, TopSort, WaitLoading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '~/redux-toolkit/slice/productPage/productPage';

function ProductPage() {
    // Redux state
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    // side Effect
    useEffect(() => {
        dispatch(getProducts({ page: 0, perPage: 12 }));
    }, [dispatch]);

    return (
        <>
            <TopImage />
            <TopSort />
            {products.list && products.list.length !== 0 ? <Main products={products} /> : <WaitLoading />}
            <Policy />
        </>
    );
}

export default ProductPage;
