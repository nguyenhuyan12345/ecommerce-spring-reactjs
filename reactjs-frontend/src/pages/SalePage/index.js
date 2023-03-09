import { useEffect } from 'react';

import { Main, Policy, TopImage, TopSort, WaitLoading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';

function SalePage() {
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

export default SalePage;
