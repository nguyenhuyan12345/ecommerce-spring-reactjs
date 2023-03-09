import { Form } from 'react-bootstrap-v5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MyAddProductPage.module.scss';
import { faImage, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

const schema = yup.object().shape({
    colorName: yup.string().required('Bạn chưa nhập màu'),
    file: yup.string().required('Bạn chưa nhập ảnh')
});

const ColorInput = ({ removeColor, id, dispatch, errors, index, values, setFieldValue }) => {
    // state
    const [file, setFile] = useState();

    //redux state
    const poductColorList = useSelector((state) => state.productColorlist);
    // console.log(poductColorList);

    // Handle Funtion
    function handleChangeImg(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(file);
    }

    return (
        <div className={`position-relative ${cx('addColorContainer')}`}>
            <div>
                <div className={`d-flex justify-content-center align-items-center ${cx('plussContainer')}`}>
                    <FontAwesomeIcon className={cx('plussIcon')} icon={faImage} />
                </div>
                <img className={`position-absolute ${cx('colorIamge')}`} src={file}></img>
                <label className={`position-absolute ${cx('addColorInputImageContainer')}`} type={'file'}>
                    <input
                        className={`${cx('addColorInputImage')}`}
                        type={'file'}
                        onChange={(e) => {
                            handleChangeImg(e);
                        }}
                    />
                </label>
            </div>
            <input
                className={` ${cx('addColorInputImageName')}`}
                type={'text'}
                placeholder="Nhập màu"
                onChange={(e) => {
                    // console.log('values', values);
                    // console.log('error', errors);
                    // console.log(poductColorList);
                    setFieldValue('poductColorList', poductColorList);
                }}
            />
            <FontAwesomeIcon
                icon={faTrashCan}
                className={`position-absolute ${cx('btnRemoveIamge')}`}
                onClick={() => {
                    dispatch(removeColor(id));
                }}
            />
        </div>
    );
};

export default ColorInput;
