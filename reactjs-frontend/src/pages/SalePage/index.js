import { useEffect } from 'react';
import { Main, Policy, TopImage, TopSort, WaitLoading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getTopSaleProduct } from '~/redux-toolkit/slice/salePage/salePage';

function SalePage() {
    // Redux state
    const topSaleProduct = useSelector((state) => state.topSaleProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopSaleProduct({ page: 0, perPage: 12 }));
    }, [dispatch]);
    return (
        <>
            <TopImage />
            <TopSort />
            {topSaleProduct.list && topSaleProduct.list.length != 0 ? (
                <Main products={topSaleProduct} />
            ) : (
                <WaitLoading />
            )}
            <Policy />
        </>
    );
}

export default SalePage;
