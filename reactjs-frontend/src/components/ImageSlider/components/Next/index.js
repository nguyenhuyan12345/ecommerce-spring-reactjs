import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../ImageSlider.module.scss';
const cx = classNames.bind(styles);

function Next({ onClick }) {
    return (
        <button className={cx('next')} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}

export default Next;
