import { useEffect } from 'react';

import { Main, Policy, TopImage, TopSort, WaitLoading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getSellingProducts } from '~/redux-toolkit/slice/sellingProductPage/sellingProductPage';

function SellingPage() {
    // Redux state
    const sellingProducts = useSelector((state) => state.sellingProducts);
    console.log(sellingProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSellingProducts());
    }, [dispatch]);

    return (
        <>
            <TopImage />
            <TopSort />
            <WaitLoading />
            {/* {products.list && products.list.length != 0 ? <Main products={products} /> : <WaitLoading />} */}
            <Policy />
        </>
    );
}

export default SellingPage;
