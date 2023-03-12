import { Form } from 'react-bootstrap-v5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MyAddProductPage.module.scss';
import { faImage, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ColorInput = ({
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

    const handleInputInventory = (e, setFieldValue) => {
        const newProductColors = values?.poductColorList;
        const newInventory = values?.poductColorList?.[index]?.inventory;
        newProductColors.splice(index, 1, productColor);

        switch (e.target.name) {
            case 's':
                newProductColors[index].inventory[0].number = e.target.value;
                setFieldValue('poductColorList', newProductColors);
                console.log(values?.poductColorList?.[index]?.inventory[0].number);
                break;
            case 'm':
                newProductColors[index].inventory[1].number = e.target.value;
                setFieldValue('poductColorList', newProductColors);
                console.log(values?.poductColorList?.[index]?.inventory[1].number);
                break;
            case 'l':
                newProductColors[index].inventory[2].number = e.target.value;
                setFieldValue('poductColorList', newProductColors);
                console.log(values?.poductColorList?.[index]?.inventory[2].number);
                break;
            case 'xl':
                newProductColors[index].inventory[3].number = e.target.value;
                setFieldValue('poductColorList', newProductColors);
                console.log(values?.poductColorList?.[index]?.inventory[3].number);
                break;
            case 'xxl':
                newProductColors[index].inventory[4].number = e.target.value;
                setFieldValue('poductColorList', newProductColors);
                console.log(values?.poductColorList?.[index]?.inventory[4].number);
                break;
            default:
                break;
        }
    };

    const handlRenderInputInventoryError = () => {
        if (errors?.poductColorList?.[index]?.inventory?.[0]?.number) {
            return (
                <div>
                    <span className="h5">{errors?.poductColorList?.[index]?.inventory?.[0]?.number}</span>
                </div>
            );
        } else if (errors?.poductColorList?.[index]?.inventory?.[1].m) {
            return (
                <div>
                    <span className="h5">{errors?.poductColorList?.[index]?.inventory?.[1]?.number}</span>
                </div>
            );
        } else if (errors?.poductColorList?.[index]?.inventory?.[2]?.l) {
            return (
                <div>
                    <span className="h5">{errors?.poductColorList?.[index]?.inventory?.[2]?.number}</span>
                </div>
            );
        } else if (errors?.poductColorList?.[index]?.inventory?.[3]?.xl) {
            <div>
                <span className="h5">{errors?.poductColorList?.[index]?.inventory?.[3]?.number}</span>
            </div>;
        } else {
            return (
                <div>
                    <span className="h5">{errors?.poductColorList?.[index]?.inventory?.[4]?.number}</span>
                </div>
            );
        }
    };

    return (
        <div className={`position-relative ${cx('addColorContainer')}`}>
            {/* Input Iamge */}
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

            {/* Error input image */}
            <div className="mb-3">
                <Form.Text className="text-danger">
                    <span className="h5">{errors?.poductColorList?.[index]?.file}</span>
                </Form.Text>
            </div>

            {/* Input color name */}
            <div className="mb-2">
                <input
                    className={`form-control pt-2 pb-2 ${cx('addColorInputImageName')}`}
                    type={'text'}
                    name=""
                    placeholder="Nhập màu"
                    value={productColor.colorName}
                    onBlur={handleBlur}
                    onChange={(e) => {
                        handleChaneColorName(e);
                    }}
                />
            </div>

            {/* Error Color name */}
            {
                <Form.Text className="text-danger">
                    <span className="h5">{errors?.poductColorList?.[index]?.colorName}</span>
                </Form.Text>
            }

            {/* Remover clolor button */}
            <FontAwesomeIcon
                icon={faTrashCan}
                className={`position-absolute ${cx('btnRemoveIamge')}`}
                onClick={hanleRemoveColor}
            />

            {/* Input inventory */}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>SIZE</th>
                            <th>Tồn kho</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>S</th>
                            <th>
                                <input
                                    name="s"
                                    type="number"
                                    value={values?.poductColorList?.[index]?.inventory?.[0]?.number}
                                    placeholder="Số lượng tồn kho"
                                    onChange={(e) => {
                                        handleInputInventory(e, setFieldValue);
                                    }}
                                    style={{ width: '100%' }}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>M</th>
                            <th>
                                <input
                                    name="m"
                                    type="number"
                                    value={values?.poductColorList?.[index]?.inventory?.[1]?.number}
                                    placeholder="Số lượng tồn kho"
                                    onChange={(e) => {
                                        handleInputInventory(e, setFieldValue);
                                    }}
                                    style={{ width: '100%' }}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>L</th>
                            <th>
                                <input
                                    name="l"
                                    type="number"
                                    value={values?.poductColorList?.[index]?.inventory?.[2]?.number}
                                    placeholder="Số lượng tồn kho"
                                    onChange={(e) => {
                                        handleInputInventory(e, setFieldValue);
                                    }}
                                    style={{ width: '100%' }}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>XL</th>
                            <th>
                                <input
                                    name="xl"
                                    type="number"
                                    placeholder="Số lượng tồn kho"
                                    value={values?.poductColorList?.[index]?.inventory?.[3]?.number}
                                    onChange={(e) => {
                                        handleInputInventory(e, setFieldValue);
                                    }}
                                    style={{ width: '100%' }}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>XXL</th>
                            <th>
                                <input
                                    name="xxl"
                                    type="number"
                                    value={values?.poductColorList?.[index]?.inventory?.[4]?.number}
                                    placeholder="Số lượng tồn kho"
                                    onChange={(e) => {
                                        handleInputInventory(e, setFieldValue);
                                    }}
                                    style={{ width: '100%' }}
                                />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Inventory error */}
            <div>
                <Form.Text className="text-danger">{handlRenderInputInventoryError()}</Form.Text>
            </div>
        </div>
    );
};

export default ColorInput;
