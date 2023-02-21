import classNames from 'classnames/bind';
import styles from './CustomInput.module.scss';

const cx = classNames.bind(styles);

const CustomInput = ({ field, form: { touched, errors }, label, inputRef, ...props }) => {
    return (
        <div className={cx('inputGroup')}>
            {touched[field.name] && errors[field.name] ? (
                <span className={cx('labelInput', 'labeError')}>{errors[field.name]}</span>
            ) : (
                <label className={cx('labelInput')} htmlFor={field.name}>
                    {label}
                </label>
            )}
            <input type="text" id={field.name} className={cx('inputForm')} ref={inputRef} {...field} {...props} />
        </div>
    );
};

export default CustomInput;
