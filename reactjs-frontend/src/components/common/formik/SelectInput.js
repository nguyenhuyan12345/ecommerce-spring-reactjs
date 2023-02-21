import classNames from 'classnames/bind';
import styles from './CustomInput.module.scss';

const cx = classNames.bind(styles);

const SelectInput = ({ field, form: { touched, errors }, label, inputRef, ...props }) => {
    return (
        <div className={cx('inputGroup')}>
            {touched[field.name] && errors[field.name] ? (
                <span className={cx('labelInput', 'labeError')}>{errors[field.name]}</span>
            ) : (
                <label className={cx('labelInput')} htmlFor={field.name}>
                    {label}
                </label>
            )}
            <select type="text" id={field.name} className={cx('inputForm')} ref={inputRef} {...field} {...props}>
                <option value={null}>Chọn quyền</option>
                <option value="ROLE_ADMIN">Quản trị viên</option>
                <option value="ROLE_USER">Người mua hàng</option>
                <option value="ROLE_SHALE">Người bán</option>
            </select>
        </div>
    );
};

export default SelectInput;
