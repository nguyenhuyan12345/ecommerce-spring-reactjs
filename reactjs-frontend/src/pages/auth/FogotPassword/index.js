import { Container } from 'react-bootstrap';
import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { Policy } from '~/components';
import CustomInput from '~/components/common/formik/CustomInput';
import { LoginPath } from '~/constants/routes';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../auth.module.scss';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Bạn chưa nhập tên đăng nhập!'),
    password: yup.string().required('Bạn chưa nhập mật khẩu!')
});

const cx = classNames.bind(styles);

const FogotPassword = () => {
    return (
        <Container>
            <div className={cx('authContent')}>
                <>
                    <div className={cx('auth', 'authFogotPassword')}>
                        <div className={cx('authMain')}>
                            <h3>ĐẶT LẠI MẬT KHẨU</h3>
                            <br />
                            <div className={cx('authWrapper')}>
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}
                                    validateOnChange
                                    validationSchema={schema}
                                    onSubmit={() => {
                                        console.log('Submmited Login');
                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <div className={cx('authField')}>
                                                <Field
                                                    // disabled={isAuthenticating}
                                                    name="email"
                                                    type="email"
                                                    label="Email"
                                                    placeholder="test@example.com"
                                                    component={CustomInput}
                                                />
                                            </div>
                                            <br />
                                            <div className={cx('authField', 'authAction')}>
                                                <Link to={LoginPath} className={`button buttonBack`}>
                                                    Trở lại
                                                </Link>

                                                <button
                                                    className={`button buttonSmall buttonPrimaryColor`}
                                                    // disabled={isAuthenticating}
                                                    type="submit"
                                                >
                                                    {'Lấy lại mật khẩu'}

                                                    {null ? <LoadingOutlined /> : <ArrowRightOutlined />}
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </>
            </div>
            <Policy />
        </Container>
    );
};

export default FogotPassword;
