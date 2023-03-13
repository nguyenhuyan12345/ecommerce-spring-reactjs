import { useEffect } from 'react';

import { Main, Policy, TopImage, TopSort, WaitLoading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getSellingProducts } from '~/redux-toolkit/slice/sellingProductPage/sellingProductPage';

function SellingPage() {
    // Redux state
    const sellingProducts = useSelector((state) => state.sellingProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSellingProducts({ page: 0, perPage: 12 }));
    }, [dispatch]);

    return (
        <>
            <TopImage />
            <TopSort />
            {sellingProducts.list && sellingProducts.list.length !== 0 ? (
                <Main products={sellingProducts} />
            ) : (
                <WaitLoading />
            )}
            <Policy />
        </>
    );
}

export default SellingPage;
