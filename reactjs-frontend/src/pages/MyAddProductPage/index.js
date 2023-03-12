import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap-v5';
import ProductService from '~/services/ProductService';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import classNames from 'classnames/bind';
import styles from './MyAddProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faImage, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ColorInput from './colorInput';

const cx = classNames.bind(styles);

const schema = yup.object().shape({
    category: yup
        .string()
        .required('Bạn chưa chọn danh mục sản phẩm')
        .notOneOf(['Chọn danh mục sản phẩm'], 'Bạn chưa chọn danh mục sản phẩm'),
    title: yup.string().required('Bạn chưa nhập tiêu đề sản phẩm'),
    price: yup.number().required('Bạn chưa nhập giá sản phẩm'),
    discount: yup
        .number()
        .min(0, '% Giảm giá phải lớn hơn 0% và nhỏ hơn 100%')
        .max(100, '% Giảm giá phải lớn hơn 0% và nhỏ hơn 100%'),
    description: yup.string().required('Bạn chưa nhập mô tả sản phẩm'),
    fileMainImage: yup.string().required('Bạn chưa nhập hình ảnh chính của sản phẩm'),
    multiFileImage: yup.array().required('Bạn chưa nhập hình ảnh mô tả thêm cho sản phẩm'),
    brand: yup.string().required('Bạn chưa nhập thương hiệu'),
    poductColorList: yup.array().of(
        yup.object().shape({
            file: yup.string().required('Chưa nhập ảnh'),
            colorName: yup.string().required('Chưa nhập màu'),
            inventory: yup.array().of(
                yup.object().shape({
                    number: yup.number().required('Nhập thiếu tồn kho').min(0, 'Tồn kho không được nhỏ hơn không')
                })
            )
        })
    )
});

function MyAddProductPage() {
    // State
    const [file, setFile] = useState();
    const [multiFile, setMultiFile] = useState([]);
    const [saveState, setSaveState] = useState({});

    //Redux state
    const auth = useSelector((state) => state.auth);
    const { accessToken, tokenType } = auth;

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
        // Post
        ProductService.upLoadProduct(values, accessToken, tokenType)
            .then((res) => {
                setSaveState(res);
                return saveState;
            })
            .then((saveState) => {
                switch (saveState.state) {
                    case true:
                        window.location.reload();
                        break;
                    case false:
                        break;
                    default:
                        break;
                }
            });
    }

    const handleAddProductColor = (values, setFieldValue) => {
        const newColorList = values.poductColorList;
        const newColor = {
            file: '',
            colorName: '',
            inventory: [
                { size: 's', number: '100' },
                { size: 'm', number: '100' },
                { size: 'l', number: '100' },
                { size: 'xl', number: '100' },
                { size: 'xxl', number: '100' }
            ]
        };
        const newProductColorList = [...newColorList, newColor];
        setFieldValue('poductColorList', newProductColorList);
    };

    const handleRemoveMainImage = (setFieldValue) => {
        setFile('');
        setFieldValue('fileMainImage', '');
    };

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

    const initialValues = {
        category: 'Áo sát nách',
        title: '',
        price: '150000',
        discount: '10',
        description: 'ÁO KHOÁC KAKI NAM LÓT DÙ PHỐI BO CAO CẤP ZONADO ZPAKK68 (5 MÀU)',
        fileMainImage: '',
        multiFileImage: '',
        brand: 'Zonado',
        poductColorList: []
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => {
                handleSubmitForm(values);
            }}
            initialValues={initialValues}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, setFieldValue }) => (
                <Form className="mt-5" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
                    <Row className="mb-4">
                        {/* Main image */}
                        <Col xs={4}>
                            <Row>
                                <Col>
                                    <Form.Label className="h4">Ảnh chính mô tả sản phẩm</Form.Label>
                                    <div className={`position-relative  ${cx('mainImageContainer')}`}>
                                        <div>
                                            <div
                                                className={`d-flex justify-content-center align-items-center ${cx(
                                                    'plussContainer'
                                                )} `}
                                            >
                                                <FontAwesomeIcon className={cx('plussIcon')} icon={faImage} />
                                            </div>
                                            {file != '' && file ? (
                                                <img
                                                    className={`position-absolute ${cx('colorIamge')}`}
                                                    src={file}
                                                    alt=""
                                                ></img>
                                            ) : undefined}
                                            <label
                                                className={`position-absolute ${cx('addColorInputImageContainer')}`}
                                                type={'file'}
                                            >
                                                <input
                                                    id="mainImage"
                                                    className={`mb-2 ${cx('addColorInputImage')}`}
                                                    type="file"
                                                    size="lg"
                                                    onChange={(e) => {
                                                        handleChangeImg(e, setFieldValue);
                                                    }}
                                                    onBlur={handleBlur}
                                                />
                                            </label>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faTrashCan}
                                            className={`position-absolute ${cx('btnRemoveIamge')}`}
                                            onClick={() => {
                                                handleRemoveMainImage(setFieldValue);
                                            }}
                                            style={{ fontSize: '2rem' }}
                                        />
                                    </div>
                                </Col>
                                <Form.Text className="text-danger">
                                    <span className="h5">{errors.fileMainImage}</span>
                                </Form.Text>
                            </Row>
                        </Col>

                        <Col xs={1}></Col>

                        <Col xs={7}>
                            <Row>
                                {/* Category */}
                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="h4 mb-4">Danh mục sản phẩm</Form.Label>
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
                                        <Form.Label className="h4 mb-4">Tiêu đề sản phẩm</Form.Label>
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

                            {/* Brand */}
                            <Row>
                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="h4">Thương hiệu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="brand"
                                            value={values.brand}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.brand && !errors.brand}
                                            size="lg"
                                            className="mb-2"
                                        />
                                        <Form.Text className="text-danger">
                                            <span className="h5">{errors.brand}</span>
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Description */}
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
                                        style={{ fontSize: '1.4rem' }}
                                    />
                                    <Form.Text className="text-danger">
                                        <span className="h5">{errors.description}</span>
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                        </Col>
                    </Row>

                    {/* More Image */}
                    <Row className="mb-4">
                        <Col>
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
                                    className="mb-2"
                                />
                                <Form.Text className="text-danger">
                                    <span className="h5">{errors.multiFileImage}</span>
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        {multiFile.map((fileUrl, index) => {
                            return (
                                <Col xs={2} key={index}>
                                    <img className={cx('imageUpload')} src={fileUrl} alt="Ảnh phụ" />
                                </Col>
                            );
                        })}
                    </Row>

                    {/* Product Color */}
                    <Row className="mb-4">
                        <Form.Label className="h4">Thêm chi tiết màu sản phẩm</Form.Label>
                        {values.poductColorList.map((poductColor, index) => {
                            return (
                                <Col key={index} xs={3} className={`position-relative ${cx('colorIamgeContaniner')}`}>
                                    <ColorInput
                                        productColor={poductColor}
                                        index={index}
                                        values={values}
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        touched={touched}
                                        isValid={isValid}
                                        errors={errors}
                                        setFieldValue={setFieldValue}
                                    />
                                </Col>
                            );
                        })}
                        <Col xs={3}>
                            <div className={`position-relative ${cx('addColorContainer')}`}>
                                <div
                                    onClick={() => {
                                        handleAddProductColor(values, setFieldValue);
                                    }}
                                >
                                    <div
                                        className={`d-flex justify-content-center align-items-center ${cx(
                                            'plussContainer'
                                        )}`}
                                    >
                                        <FontAwesomeIcon className={cx('plussIcon')} icon={faPlusSquare} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col>
                            <Button
                                type="submit"
                                size="lg"
                                onClick={() => {
                                    console.log(errors.poductColorList);
                                }}
                            >
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
