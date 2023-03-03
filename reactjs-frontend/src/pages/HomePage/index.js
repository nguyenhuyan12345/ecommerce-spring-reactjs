import { Container } from 'react-bootstrap';
import { ImageSlider, Policy, Products } from '~/components';
import { topsSliderImg } from '~/assets';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '~/redux-toolkit/slice/homePage/testCallApi';

function HomePage() {
    // redux state
    const auth = useSelector((state) => state.auth);
    const newProducts = useSelector((state) => state.newProducts);
    console.log(newProducts.list);
    const dispatch = useDispatch();

    const { login, accessToken, tokenType, fullName, avatar, role } = auth;

    // Side effect
    useEffect(() => {
        dispatch(getProducts()); // dispatch actionn getProduct call API
    }, [dispatch]);

    return (
        <Container fluid="lg">
            <ImageSlider topsSliderImg={topsSliderImg}></ImageSlider>
            <Policy />
            <Products title="hàng mới về" products={newProducts}></Products>
            {/* <Products title="top áo khoác" products={coat}></Products>
            <Products title="top bán chạy"></Products> */}
            <Policy />
        </Container>
    );
}

export default HomePage;
