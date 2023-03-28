import { Modal, Button } from 'react-bootstrap';
import { API_RESOURCES_URL } from '~/constants/api';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartService from '~/services/CartService';
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
    const [activeId, setAtiveId] = useState();
    const [num, setNum] = useState();
    const navigator = useNavigate();

    //Redux state
    const auth = useSelector((state) => state.auth);
    const { accessToken, tokenType } = auth;

    const handleAddNum = (setFieldValue, values) => {
        let num = values.numberProduct;
        num = num + 1;
        setFieldValue('numberProduct', num);
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

    const handleAddCart = (values, accessToken, tokenType) => {
        if (!accessToken) {
            alert('Bạn chưa đăng nhập');
            navigator('/login');
        } else {
            console.log(values, accessToken, tokenType);
            CartService.addCart(values, accessToken, tokenType)
                .then((res) => {
                    return res.data;
                })
                .then((data) => {
                    alert(data.message);
                    handleClose();
                });
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    numberProduct: 1,
                    productID: '',
                    color: ''
                }}
                validateOnChange
                validationSchema={schema}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, setFieldValue }) => {
                    return (
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thêm rỏ hàng</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className={`${cx('addCartContainer')}`} onSubmit={handleSubmit}>
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
                                                                  className={`${cx('addCartSubItemImage', {
                                                                      ['active']: index === activeId
                                                                  })}`}
                                                                  src={API_RESOURCES_URL + '/' + color.colorImage}
                                                                  onClick={() => {
                                                                      setAtiveId(index);
                                                                      setFieldValue('color', color.coloName);
                                                                      setFieldValue('productID', product.id);
                                                                  }}
                                                                  //   onChange={handleChange}
                                                                  //   onBlur={handleBlur}
                                                              />
                                                          </li>
                                                      );
                                                  })
                                                : undefined}
                                        </ul>
                                        {/* {errors.color ? <div>Bạn chưa chọn màu</div> : undefined} */}
                                    </div>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={() => {
                                        handleAddCart(values, accessToken, tokenType);
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
