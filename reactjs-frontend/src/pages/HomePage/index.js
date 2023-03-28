import { Container } from 'react-bootstrap';
import { ImageSlider, Policy, Products } from '~/components';
import { topsSliderImg } from '~/assets';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopNewProducts } from '~/redux-toolkit/slice/homePage/topNewProducts';
import { getTopOrderProducts } from '~/redux-toolkit/slice/homePage/topOrders';
import { getTopCoatProducts } from '~/redux-toolkit/slice/homePage/topCoats';
import { useNavigate } from 'react-router-dom';
import { NewProductPath, SellingPath, ProductPath } from '~/constants/routes';

function HomePage() {
    const navigate = useNavigate();
    // redux state
    const topNewProducts = useSelector((state) => state.topNewProducts);
    const topOrderProducts = useSelector((state) => state.topOrders);
    const topCoatProducts = useSelector((state) => state.topCoats);

    const dispatch = useDispatch();
    // Side effect
    useEffect(() => {
        // dispatch actionn getProduct call API
        dispatch(getTopNewProducts({ page: 0, perPage: 12 }));
        dispatch(getTopOrderProducts({ page: 0, perPage: 12 }));
        dispatch(getTopCoatProducts({ page: 0, perPage: 12 }));
    }, [dispatch]);

    // handle funtion
    const handleViewMoreNewProduct = () => {
        navigate(NewProductPath);
    };

    const handleViewMoreTopSelling = () => {
        navigate(SellingPath);
    };

    const handleViewMoreProducts = () => {
        navigate(ProductPath);
    };

    return (
        <Container fluid="lg">
            <ImageSlider topsSliderImg={topsSliderImg}></ImageSlider>
            <Policy />
            <Products
                title="hàng mới về"
                products={topNewProducts}
                handleClickViewMore={handleViewMoreNewProduct}
            ></Products>
            <Products
                title="Top bán chạy"
                products={topOrderProducts}
                handleClickViewMore={handleViewMoreTopSelling}
            ></Products>
            <Products
                title="Top áo khoác"
                products={topCoatProducts}
                handleClickViewMore={handleViewMoreProducts}
            ></Products>
            <Policy />
        </Container>
    );
}

export default HomePage;
