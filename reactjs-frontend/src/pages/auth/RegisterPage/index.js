import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { Policy } from '~/components';
import { SocialLogin, CustomInput, SelectInput, SelectFiles } from '~/components/common/index';
import { LoginPath } from '~/constants/routes';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '~/services/UserService';
import classNames from 'classnames/bind';
import styles from '../auth.module.scss';
import * as yup from 'yup';
import FileService from '~/services/FileService';
import { API_RESOURCES_URL } from '~/constants/api';

const cx = classNames.bind(styles);

const schema = yup.object({
    fullName: yup.string().required('Bạn chưa nhập tên đầy đủ'),
    email: yup.string().required('Bạn chưa nhập tên đăng nhập!').email('Tên đăng nhập phải là một email'),
    password: yup.string().required('Bạn chưa nhập mật khẩu!').min(8, 'mật khẩu phải có tối đa 8 kí tự'),
    rePassword: yup
        .string()
        .required('Bạn chưa nhập lại mật khẩu')
        .oneOf([yup.ref('password'), null], 'Nhập lại mật khẩu không chính xác'),
    address: yup.string().required('Bạn chưa nhập địa chỉ'),
    phoneNumber: yup
        .number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
    role: yup.string().required('Bạn chưa chọn quyền').notOneOf(['Chọn quyền'], 'Banh chưa chon quyền'),
    avatar: yup.string().required('Bạn chưa chọn ảnh đại điện')
});

// role
const roles = ['Chọn quyền', 'ADMIN', 'USER'];

const RegisterPage = () => {
    const navigator = useNavigate();
    // Handle Funtion
    function handleChangeAvatar(e, setFieldValue) {
        FileService.upLoadFile(e.target.files[0]).then((data) => {
            setFieldValue('avatar', data.fileName);
        });
    }

    const handleRegister = (values) => {
        UserService.createUser(values)
            .then(() => {
                navigator('/login');
                console.log('Đăng kí thành công');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const initialValues = {
        fullName: '',
        email: '',
        password: '',
        rePassword: '',
        address: '',
        phoneNumber: '',
        role: '',
        avatar: ''
    };

    return (
        <Container>
            <div className={cx('authContent')}>
                <div className={cx('auth')}>
                    <div className={cx('authMain')}>
                        <h3>Đăng nhập vào Zonado</h3>
                        <br />
                        <div className={cx('authWrapper')}>
                            <Formik
                                initialValues={initialValues}
                                validateOnChange
                                validationSchema={schema}
                                onSubmit={(values) => {
                                    handleRegister(values);
                                }}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    handleBlur,
                                    values,
                                    touched,
                                    isValid,
                                    errors,
                                    setFieldValue
                                }) => {
                                    return (
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Row>
                                                {/* fullName */}
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Tên đầy đủ</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="fullName"
                                                            value={values.fullName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.fullName && !errors.fullName}
                                                            size="lg"
                                                            className="mb-2"
                                                        />
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.fullName}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                                {/* email */}
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Địa chỉ email</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.email && !errors.email}
                                                            size="lg"
                                                            className="mb-2"
                                                        />
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.email}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                {/* password */}
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Mật khẩu</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.password && !errors.password}
                                                            size="lg"
                                                            className="mb-2"
                                                        />
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.password}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                                {/* phoneNumber */}
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Số điện thoại</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="phoneNumber"
                                                            value={values.phoneNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.phoneNumber && !errors.phoneNumber}
                                                            size="lg"
                                                            className="mb-2"
                                                        />
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.phoneNumber}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                {/* re password */}
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Nhập lại mật khẩu</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            name="rePassword"
                                                            value={values.rePassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.rePassword && !errors.rePassword}
                                                            size="lg"
                                                            className="mb-2"
                                                        />
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.rePassword}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                                {/* address */}
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Địa chỉ</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="address"
                                                            value={values.address}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.address && !errors.address}
                                                            size="lg"
                                                            className="mb-2"
                                                        />
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.address}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            {/* role */}
                                            <Row>
                                                <Col className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="h4">Quyền</Form.Label>
                                                        <Form.Select
                                                            type="text"
                                                            name="role"
                                                            value={values.role}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isValid={touched.role && !errors.role}
                                                            size="lg"
                                                            className="mb-2"
                                                        >
                                                            {roles.map((item, index) => {
                                                                return <option key={index}>{item}</option>;
                                                            })}
                                                        </Form.Select>
                                                        <Form.Text className="text-danger">
                                                            <span className="h5">{errors.role}</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            {/* avatar */}
                                            <Row className="mb-3">
                                                <Form.Group>
                                                    <Form.Label className="h4">Ảnh đại diện</Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        size="lg"
                                                        name="avatarImage"
                                                        onChange={(e) => {
                                                            handleChangeAvatar(e, setFieldValue);
                                                        }}
                                                        onBlur={handleBlur}
                                                        isValid={!errors.fileMainImage}
                                                        className="mb-2"
                                                    />
                                                </Form.Group>
                                                <Form.Text className="text-danger">
                                                    <span className="h5">{errors.fileMainImage}</span>
                                                </Form.Text>
                                            </Row>
                                            {values.avatar != '' ? (
                                                <Row className="mb-3">
                                                    <Col xs={4}>
                                                        <img
                                                            className={cx('imageUpload')}
                                                            src={API_RESOURCES_URL + '/' + values.avatar}
                                                        />
                                                    </Col>
                                                </Row>
                                            ) : undefined}
                                            <Row className="mb-4 mt-5">
                                                <Col xs></Col>
                                                <Col xs>
                                                    <button
                                                        className={`button buttonMedium buttonPrimaryColor h4`}
                                                        type="submit"
                                                        size="lg"
                                                        style={{ width: '100%' }}
                                                        onClick={() => {
                                                            console.log(errors);
                                                        }}
                                                    >
                                                        Đăng kí
                                                    </button>
                                                </Col>
                                                <Col xs></Col>
                                            </Row>
                                        </Form>
                                    );
                                }}
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
                        <strong>Already have an account?</strong>
                    </span>
                    <Link to={LoginPath}>
                        <button
                            className={`button buttonSmall signInButton`}
                            //disabled={isAuthenticating}
                            //onClick={onSignUp}
                            type="button"
                        >
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
            <Policy />
        </Container>
    );
};

export default RegisterPage;
