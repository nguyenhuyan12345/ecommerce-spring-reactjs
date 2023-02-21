import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import ProductService from '~/services/ProductService';
import * as yup from 'yup';
import { Formik } from 'formik';
import classNames from 'classnames/bind';
import styles from './MyAddProductPage.module.scss';

const cx = classNames.bind(styles);

const schema = yup.object().shape({
    category: yup
        .string()
        .required('Bạn chưa chọn danh mục sản phẩm')
        .notOneOf(['Chọn danh mục sản phẩm'], 'Bạn chưa chọn danh mục sản phẩm'),
    title: yup.string().required('Bạn chưa nhập tiêu đề sản phẩm'),
    price: yup.number('Giá phải là một số').required('Bạn chưa nhập giá sản phẩm'),
    discount: yup
        .number('Phần trăm giảm giá phải là một số')
        .min(0, '% Giảm giá phải lớn hơn 0% và nhỏ hơn 100%')
        .max(100, '% Giảm giá phải lớn hơn 0% và nhỏ hơn 100%'),
    description: yup.string().required('Bạn chưa nhập mô tả sản phẩm'),
    fileMainImage: yup.string().required('Bạn chưa nhập hình ảnh chính của sản phẩm'),
    multiFileImage: yup.array().required('Bạn chưa nhập hình ảnh mô tả thêm cho sản phẩm')
});

function MyAddProductPage() {
    // State
    const [file, setFile] = useState();
    const [multiFile, setMultiFile] = useState([]);
    const [saveState, setSaveState] = useState({});
    const navigate = useNavigate();

    // Handle Funtion
    function handleChangeImg(e, setFieldValue) {
        setFile(URL.createObjectURL(e.target.files[0]));
        setFieldValue('fileMainImage', e.target.files[0]);
    }

    function handleChangeMultiImg(e, setFieldValue) {
        const multiImgFile = Object.values(e.target.files);
        setMultiFile(multiImgFile.map((file) => URL.createObjectURL(file)));
        const multiFile = Object.values(e.target.files);
        setFieldValue('multiFileImage', multiFile);
    }

    function handleSubmitForm(values) {
        ProductService.upLoadProduct(values)
            .then((res) => {
                setSaveState(res);
                return saveState;
            })
            .then((saveState) => {
                switch (saveState.state) {
                    case true:
                        alert(saveState.message);
                        window.location.reload();
                        break;
                    case false:
                        alert(saveState.message);
                        break;
                }
            });
    }
    // Category
    const category = [
        'Chọn danh mục sản phẩm',
        'Áo sát nách',
        'Quần lót nam',
        'Áo khoác da',
        'Áo thun bẻ cổ',
        'Quấn đùi nam',
        'Đồ bộ nam thể thao',
        'Áo khoác',
        'Áo khoác Kaki',
        'Quần KaKi',
        'Áo thun nam',
        'Quấn short nam',
        'Áo sơ mi nam'
    ];

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => {
                handleSubmitForm(values);
            }}
            initialValues={{
                category: '',
                title: '',
                price: '',
                discount: '',
                description: '',
                fileMainImage: '',
                multiFileImage: ''
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, setFieldValue }) => (
                <Form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
                    <Row>
                        {/* Category */}
                        <Col className="mb-4">
                            <Form.Group>
                                <Form.Label className="h4">Danh mục sản phẩm</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.category && !errors.category}
                                    size="lg"
                                    className="mb-2"
                                >
                                    {category.map((item, index) => {
                                        return <option key={index}>{item}</option>;
                                    })}
                                </Form.Select>
                                <Form.Text className="text-danger">
                                    <span className="h5">{errors.category}</span>
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        {/* Title */}
                        <Col className="mb-4">
                            <Form.Group>
                                <Form.Label className="h4">Tiêu đề sản phẩm</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.title && !errors.title}
                                    size="lg"
                                    className="mb-2"
                                />
                                <Form.Text className="text-danger">
                                    <span className="h5">{errors.title}</span>
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Price */}
                    <Row>
                        <Col className="mb-4">
                            <Form.Group>
                                <Form.Label className="h4">Giá sản phẩm (Vnđ)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.price && !errors.price}
                                    size="lg"
                                    className="mb-2"
                                />
                                <Form.Text className="text-danger">
                                    <span className="h5">{errors.price}</span>
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col className="mb-4">
                            <Form.Group>
                                <Form.Label className="h4">Giảm giá (%)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="discount"
                                    value={values.discount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.discount && !errors.discount}
                                    size="lg"
                                    className="mb-2"
                                />
                                <Form.Text className="text-danger">
                                    <span className="h5">{errors.discount}</span>
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group className="mb-3">
                            <Form.Label className="h4">Mô tả sản phẩm</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                type="text"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.description && !errors.description}
                                className="mb-2 h4"
                            />
                            <Form.Text className="text-danger">
                                <span className="h5">{errors.description}</span>
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    {/* Main Image */}
                    <Row className="mb-4">
                        <Form.Group>
                            <Form.Label className="h4">Ảnh chính mô tả sản phẩm</Form.Label>
                            <Form.Control
                                type="file"
                                size="lg"
                                onChange={(e) => {
                                    handleChangeImg(e, setFieldValue);
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
                    <Row className="mb-4">
                        <Col xs={4}>
                            <img className={cx('imageUpload')} src={file} />
                        </Col>
                    </Row>
                    {/* More Image */}
                    <Row className="mb-4">
                        <Form.Group>
                            <Form.Label className="h4">Ảnh phụ mô tả sản phẩm</Form.Label>
                            <Form.Control
                                type="file"
                                multiple
                                size="lg"
                                onChange={(e) => {
                                    handleChangeMultiImg(e, setFieldValue);
                                }}
                                onBlur={handleBlur}
                                isValid={!errors.multiFileImage}
                            />
                            <Form.Text className="text-danger">
                                <span className="h5">{errors.multiFileImage}</span>
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        {multiFile.map((fileUrl, index) => {
                            return (
                                <Col xs={3} key={index}>
                                    <img className={cx('imageUpload')} src={fileUrl} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <Button type="submit" size="lg">
                                Thêm sản phẩm
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default MyAddProductPage;
