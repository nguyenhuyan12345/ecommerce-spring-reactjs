import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../Products.module.scss';
const cx = classNames.bind(styles);

function Prev({ onClick, visible = false, onMouseOver }) {
    return (
        <button className={cx('prev', { show: visible })} onClick={onClick} onMouseOver={onMouseOver}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}

export default Prev;
