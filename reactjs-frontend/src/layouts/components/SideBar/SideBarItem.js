import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './SideBarItem.module.scss';

const cx = classNames.bind(styles);

const defaultItems = {
    title: 'Thương hiệu',
    propeties: [
        {
            dataField: 'Khác'
        },
        {
            dataField: 'Zonado'
        },
        {
            dataField: 'Zonado'
        }
    ]
};

const SideBarItem = ({ items = defaultItems }) => {
    const [hideSideBarItem, setHideSideBarItem] = useState(false);

    const handleHideOrShowItem = () => {
        if (hideSideBarItem === true) {
            setHideSideBarItem(false);
        } else {
            setHideSideBarItem(true);
        }
    };

    return (
        <aside className={cx('asideItem', 'filterVendor')}>
            <div onClick={handleHideOrShowItem} className={cx('asideTitle')}>
                {items.title}
                {hideSideBarItem ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
            </div>
            <div
                className={cx('asideContent', 'filterGroup', {
                    ['asideContentHide']: hideSideBarItem,
                    ['asideContentShow']: !hideSideBarItem
                })}
            >
                <ul className={cx('filterVendor')}>
                    {items.propeties.map((item, index) => {
                        return (
                            <li className={cx('filterItem')} key={index}>
                                <div>
                                    <label className={cx('filter')}>
                                        <input type="checkbox" id={item.id} className={cx('filterInput')} />
                                        <span>{item.dataField}</span>
                                    </label>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default SideBarItem;
