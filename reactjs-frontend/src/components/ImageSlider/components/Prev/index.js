import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../ImageSlider.module.scss';
const cx = classNames.bind(styles);

function Prev({ onClick }) {
    return (
        <button className={cx('prev')} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}

export default Prev;
