import { useEffect } from 'react';

import { Main, Policy, TopImage, TopSort, WaitLoading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getNewProducts } from '~/redux-toolkit/slice/newProductPage/newProductPage';

function NewProductPage() {
    // redux state
    const newProducts = useSelector((state) => state.newProducts);
    const dispatch = useDispatch(getNewProducts);

    useEffect(() => {
        dispatch(getNewProducts(0, 10));
    }, [dispatch]);

    return (
        <>
            <TopImage />
            <TopSort />
            {newProducts.list && newProducts.list.length != 0 ? <Main products={newProducts} /> : <WaitLoading />}
            <Policy className="mt-5" />
        </>
    );
}

export default NewProductPage;
