import { Container } from 'react-bootstrap';
import { ImageSlider, Policy, Products } from '~/components';
import { topsSliderImg } from '~/assets';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopNewProducts } from '~/redux-toolkit/slice/homePage/topNewProducts';
import { getTopOrderProducts } from '~/redux-toolkit/slice/homePage/topOrders';
import { getTopCoatProducts } from '~/redux-toolkit/slice/homePage/topCoats';

function HomePage() {
    // redux state
    const topNewProducts = useSelector((state) => state.topNewProducts);
    const topOrderProducts = useSelector((state) => state.topOrders);
    const topCoatProducts = useSelector((state) => state.topCoats);

    const dispatch = useDispatch();

    // Side effect
    useEffect(() => {
        // dispatch actionn getProduct call API
        dispatch(getTopNewProducts());
        dispatch(getTopOrderProducts());
        dispatch(getTopCoatProducts());
    }, [dispatch]);

    return (
        <Container fluid="lg">
            <ImageSlider topsSliderImg={topsSliderImg}></ImageSlider>
            <Policy />
            <Products title="hàng mới về" products={topNewProducts}></Products>
            <Products title="Top bán chạy" products={topOrderProducts}></Products>
            <Products title="Top áo khoác" products={topCoatProducts}></Products>
            <Policy />
        </Container>
    );
}

export default HomePage;
