import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CustomInput.module.scss';

const cx = classNames.bind(styles);

const SelectFiles = ({ field, form: { touched, errors }, label, inputRef, ...props }) => {
    const [file, setFile] = useState();

    function handleChangeAvatar(e, setFieldValue) {
        setFile(URL.createObjectURL(e.target.files[0]));
        setFieldValue('fileMainImage', e.target.files[0]);
    }

    return (
        <div className={cx('inputGroup')}>
            {touched[field.name] && errors[field.name] ? (
                <span className={cx('labelInput', 'labeError')}>{errors[field.name]}</span>
            ) : (
                <label className={cx('labelInput')} htmlFor={field.name}>
                    {label}
                </label>
            )}
            <input
                type="file"
                id={field.name}
                className={cx('inputForm')}
                ref={inputRef}
                {...field}
                {...props}
                onChange={(e, setFieldValue) => {
                    handleChangeAvatar(e, setFieldValue);
                }}
            />
        </div>
    );
};

export default SelectFiles;
