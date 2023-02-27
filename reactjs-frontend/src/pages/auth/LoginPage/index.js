import { Container } from 'react-bootstrap';
import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { Policy } from '~/components';
import SocialLogin from '~/components/common/SosialLogin/SocialLogin';
import CustomInput from '~/components/common/formik/CustomInput';
import { RegisterPath, ForgotPasswordPath } from '~/constants/routes';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '~/services/UserService';
import classNames from 'classnames/bind';
import styles from '../auth.module.scss';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, loginFalse } from '~/redux-toolkit/slice/auth/auth';

const schema = yup.object({
    username: yup.string().required('Bạn chưa nhập tên đăng nhập!').email('Tên đăng nhập phải là một email'),
    password: yup.string().required('Bạn chưa nhập mật khẩu!').min(8, 'Mật khẩu phải có tối đa 8 kí tự')
});

const cx = classNames.bind(styles);

const LoginPage = () => {
    const navigate = useNavigate(); // useNavigate in react routerDom

    // Reudux state
    const auth = useSelector((state) => state.auth); // get state from redux store
    // console.log('Login Page', auth);
    const dispatch = useDispatch(); // create dispatch

    // handle funtion
    const handlelogin = (values) => {
        UserService.login(values)
            .then((res) => {
                const payload = {
                    accessToken: res.data.accessToken,
                    tokenType: res.data.tokenType,
                    fullName: res.data.fullName,
                    avatar: res.data.avatar
                };
                dispatch(loginSuccess(payload));
            })
            .catch(() => {
                dispatch(loginFalse());
            });
    };

    return (
        <Container>
            <div className={cx('authContent')}>
                <>
                    <div className={cx('auth')}>
                        <div className={cx('authMain')}>
                            <h3>Đăng kí tài khoản Zonado</h3>
                            <br />
                            <div className={cx('authWrapper')}>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: ''
                                    }}
                                    validateOnChange
                                    validationSchema={schema}
                                    onSubmit={(values) => {
                                        handlelogin(values);
                                        navigate('/');
                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <div className={cx('authField')}>
                                                <Field
                                                    // disabled={isAuthenticating}
                                                    name="username"
                                                    type="email"
                                                    label="Email"
                                                    placeholder="test@example.com"
                                                    component={CustomInput}
                                                />
                                            </div>
                                            <div className={cx('authField')}>
                                                <Field
                                                    //disabled={isAuthenticating}
                                                    name="password"
                                                    type="password"
                                                    label="Password"
                                                    placeholder="Your Password"
                                                    component={CustomInput}
                                                />
                                            </div>
                                            <br />
                                            <div className={cx('authField', 'authAction')}>
                                                <div
                                                    //onClick={onClickLink}
                                                    style={{ textDecoration: 'underline' }}
                                                >
                                                    <Link to={ForgotPasswordPath}>
                                                        <span className={cx('forgotPassword')}>Forgot password?</span>
                                                    </Link>
                                                </div>
                                                <button
                                                    className={`button buttonMedium buttonPrimaryColor`}
                                                    // disabled={isAuthenticating}
                                                    type="submit"
                                                >
                                                    {null ? 'Signing In' : 'Sign In'}
                                                    &nbsp;
                                                    {null ? <LoadingOutlined /> : <ArrowRightOutlined />}
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className={cx('authDriver')}>
                            <h6>OR</h6>
                        </div>
                        {/* <SocialLogin isLoading={isAuthenticating} /> */}
                        <SocialLogin />
                    </div>
                    <div className={cx('authMessage')}>
                        <span className={cx('authInfo')}>
                            <strong>Don&apos;t have an account?</strong>
                        </span>
                        <Link to={RegisterPath}>
                            <button
                                className={`button buttonSmall signUpButton`}
                                //disabled={isAuthenticating}
                                //onClick={onSignUp}
                                type="button"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </>
            </div>
            <Policy />
        </Container>
    );
};

export default LoginPage;
