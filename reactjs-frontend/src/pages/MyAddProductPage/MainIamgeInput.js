import { Form } from 'react-bootstrap-v5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MyAddProductPage.module.scss';
import { faImage, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MainImageInput = ({
    productColor,
    index,
    values,
    handleChange,
    handleBlur,
    touched,
    isValid,
    errors,
    setFieldValue
}) => {
    // state
    const [file, setFile] = useState();

    // Handle Funtion
    function handleChangeImg(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        const productColor = values.poductColorList[index];
        productColor.file = e.target.files[0];
        const newProductColors = values.poductColorList;
        newProductColors.splice(index, 1, productColor);
        setFieldValue('poductColorList', newProductColors);
    }

    const hanleRemoveColor = () => {
        const newColorList = values.poductColorList;
        const newProductColorList = newColorList.filter((item, i) => {
            return i === index ? false : true;
        });
        setFieldValue('poductColorList', newProductColorList);
        console.log(values.poductColorList);
    };

    const handleChaneColorName = (e) => {
        const productColor = values.poductColorList[index];
        productColor.colorName = e.target.value;
        const newProductColors = values.poductColorList;
        newProductColors.splice(index, 1, productColor);
        setFieldValue('poductColorList', newProductColors);
    };

    return (
        <div className={`position-relative ${cx('addColorContainer')}`}>
            <div>
                <div className={`d-flex justify-content-center align-items-center ${cx('plussContainer')}`}>
                    <FontAwesomeIcon className={cx('plussIcon')} icon={faImage} />
                </div>
                <img className={`position-absolute ${cx('colorIamge')}`} src={file} alt=""></img>
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
            <FontAwesomeIcon
                icon={faTrashCan}
                className={`position-absolute ${cx('btnRemoveIamge')}`}
                onClick={hanleRemoveColor}
            />
        </div>
    );
};

export default MainImageInput;
