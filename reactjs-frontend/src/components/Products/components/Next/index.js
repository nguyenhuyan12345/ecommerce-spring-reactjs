import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../Products.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Next({ onClick, visible = false, onMouseOver }) {
    return (
        <button className={cx('next', { show: visible })} onClick={onClick} onMouseOver={onMouseOver}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}

export default Next;
