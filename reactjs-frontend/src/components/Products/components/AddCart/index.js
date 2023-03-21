import { Modal, Button } from 'react-bootstrap';
import { API_RESOURCES_URL } from '~/constants/api';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames/bind';
import styles from './AddCart.Module.scss';

const cx = classNames.bind(styles);

const schema = yup.object({
    numberProduct: yup.number().required().min(1, 'Bạn chưa chọn số lượng sản phẩm'),
    color: yup.string().required('Bạn chưa chọn màu sản phẩm')
});

const AddCart = ({ show, handleClose, product }) => {
    const { colorImages, discount, id, price } = product;
    // console.log(product);
    const [activeId, setAtiveId] = useState(1);
    const [num, setNum] = useState(0);

    const handleAddNum = (setFieldValue, values) => {
        // setNum(num + 1);
        // console.log(num);
        console.log('Before', values.numberProduct);
        let num = values.numberProduct;
        num = num + 1;
        setFieldValue('numberProduct', num);
        console.log('After', values.numberProduct);
    };

    const handleRemoveNum = (setFieldValue) => {
        if (num === 0) {
            setNum(0);
            setFieldValue('numberProduct', num);
        } else {
            setNum(num - 1);
            setFieldValue('numberProduct', num);
        }
    };

    useEffect(() => {});

    return (
        <>
            <Formik
                initialValues={{
                    numberProduct: 0,
                    productID: '',
                    color: ''
                }}
                validationSchema={schema}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, setFieldValue }) => {
                    return (
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thêm rỏ hàng</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className={`${cx('addCartContainer')}`}>
                                    <div className={`${cx('addCartItem')}`}>
                                        <div className={`${cx('addCartItemContainer')}`}>
                                            <label className={`${cx('addCartItemLabel')}`}>Chọn số lượng</label>
                                            <span>
                                                <FontAwesomeIcon
                                                    className={`${cx('addCartItemInputIcon')}`}
                                                    icon={faMinus}
                                                    onClick={() => {
                                                        handleRemoveNum(setFieldValue);
                                                    }}
                                                />
                                                <span className={`${cx('addCartItemNumber')}`}>
                                                    {values.numberProduct}
                                                </span>
                                                <FontAwesomeIcon
                                                    className={`${cx('addCartItemInputIcon')}`}
                                                    icon={faPlus}
                                                    onClick={() => {
                                                        handleAddNum(setFieldValue, values);
                                                    }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`${cx('addCartItem')}`}>
                                        <label className={`${cx('addCartItemLabel')}`}>Chọn màu</label>
                                        <ul className={`${cx('addCartItemList')}`}>
                                            {colorImages
                                                ? colorImages.map((color, index) => {
                                                      return (
                                                          <li
                                                              className={`${cx('addCartSubItem')}`}
                                                              value={color.coloName}
                                                              key={index}
                                                          >
                                                              <img
                                                                  className={`${cx('addCartSubItemImage')}`}
                                                                  src={API_RESOURCES_URL + '/' + color.colorImage}
                                                              />
                                                          </li>
                                                      );
                                                  })
                                                : undefined}
                                        </ul>
                                    </div>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        console.log(values);
                                    }}
                                >
                                    Thêm vào rỏ hàng
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    );
                }}
            </Formik>
        </>
    );
};

export default AddCart;
