import SideBarItem from './SideBarItem';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

const defaultSideBarProp = [
    {
        title: 'Thương hiệu',
        propeties: [
            {
                dataField: 'Tonado'
            },
            {
                dataField: 'Khác'
            },
            {
                dataField: 'Zonado'
            }
        ]
    },
    {
        title: 'Giá sản phẩm',
        propeties: [
            {
                dataField: 'Giá dưới 100.000đ'
            },
            {
                dataField: '100.000 - 200.000đ'
            },
            {
                dataField: '200.000 - 300.000đ'
            },
            {
                dataField: '300.000 - 500.000đ'
            },
            {
                dataField: '500.000 - 1000.000đ'
            },
            {
                dataField: 'Giá trên 1000.000đ'
            }
        ]
    },
    {
        title: 'Loại',
        propeties: [
            {
                dataField: 'Áo sát nách'
            },
            {
                dataField: 'Quần lót nam'
            },
            {
                dataField: 'Áo khoác da'
            },
            {
                dataField: 'Áo thun cổ bẻ'
            },
            {
                dataField: 'Quần đùi nam'
            },
            {
                dataField: 'Đồ bộ nam thể thao'
            },
            {
                dataField: 'Áo khoác'
            },
            {
                dataField: 'Áo khoác KaKi'
            },
            {
                dataField: 'Quần KaKi'
            },
            {
                dataField: 'Áo thun nam'
            },
            {
                dataField: 'Áo cổ tròn'
            },
            {
                dataField: 'Khác'
            }
        ]
    },
    {
        title: 'Size',
        propeties: [
            {
                dataField: 'M'
            },
            {
                dataField: 'L'
            },
            {
                dataField: 'XL'
            },
            {
                dataField: 'XXL'
            },
            {
                dataField: '2XL'
            },
            {
                dataField: '3XL'
            },
            {
                dataField: '4XL'
            },
            {
                dataField: '29'
            },
            {
                dataField: '30'
            },
            {
                dataField: '31'
            },
            {
                dataField: '32'
            },
            {
                dataField: '34'
            },
            {
                dataField: '36'
            },
            {
                dataField: '38'
            }
        ]
    }
];

const SideBar = ({ sideBarProp = defaultSideBarProp }) => {
    return (
        <div className={`scrollspy-example scrollY ${cx('sideBarContainer')}`}>
            {sideBarProp.map((sideBarItem, index) => {
                return <SideBarItem key={index} items={sideBarItem} />;
            })}
        </div>
    );
};

export default SideBar;
