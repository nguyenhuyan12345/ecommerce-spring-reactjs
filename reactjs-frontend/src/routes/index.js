import { SubLayout1, SubLayout2 } from '~/layouts';

// Components
import {
    HomePage,
    ProductPage,
    NewProductPage,
    SellingPage,
    SalePage,
    BlogPage,
    ContactPage,
    LoginPage,
    RegisterPage,
    SearchPage,
    ForgotPassword,
    MyAccInfoPage,
    MySolePage,
    MyBoughtPage,
    MyAddProductPage,
    MyListProductsPage,
    MyZocoinPage
} from '~/pages';

// Path
import {
    HomePath,
    ProductPath,
    NewProductPath,
    SellingPath,
    SalePath,
    BlogPath,
    ContactPath,
    LoginPath,
    RegisterPath,
    SearchPath,
    ForgotPasswordPath,
    MyAccountInfo,
    MySole,
    MyBought,
    MyAddProduct,
    MyListProducts,
    MyZocoin
} from '~/constants/routes';

const publicRoutes = [
    { path: HomePath, component: HomePage },
    { path: ProductPath, component: ProductPage, layout: SubLayout1 },
    { path: NewProductPath, component: NewProductPage, layout: SubLayout1 },
    { path: SellingPath, component: SellingPage, layout: SubLayout1 },
    { path: SalePath, component: SalePage, layout: SubLayout1 },
    { path: BlogPath, component: BlogPage },
    { path: ContactPath, component: ContactPage },
    { path: LoginPath, component: LoginPage },
    { path: RegisterPath, component: RegisterPage },
    { path: SearchPath, component: SearchPage, layout: SubLayout1 },
    { path: ForgotPasswordPath, component: ForgotPassword },
    { path: MyAccountInfo, component: MyAccInfoPage, layout: SubLayout2 },
    { path: MySole, component: MySolePage, layout: SubLayout2 },
    { path: MyBought, component: MyBoughtPage, layout: SubLayout2 },
    { path: MyAddProduct, component: MyAddProductPage, layout: SubLayout2 },
    { path: MyListProducts, component: MyListProductsPage, layout: SubLayout2 },
    { path: MyZocoin, component: MyZocoinPage, layout: SubLayout2 }
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
