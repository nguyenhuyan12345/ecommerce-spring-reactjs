import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCoins, faFileUpload, faStore, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';

// import classNameNames from 'classNamenames/bind';
// import styles from './MyAccInfoPage.module.scss';

// const cx = classNameNames.bind(styles);

function MyAccInfoPage() {
    return (
        <div>
            <div className="Q5feZb">
                <h1 className="OomjNA">Hồ sơ của tôi</h1>
                <div className="HJ5nmd">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
            </div>
            <div>
                <div>
                    <div class="h4eiAQ">
                        <div class="tBgRZR">
                            <label>Tên đăng nhập</label>
                        </div>
                        <div class="gV+dPk">
                            <div class="_2NnHla">
                                <div class="Z1Wx1m">huyan10</div>
                                <button class="+x-MFb"></button>
                            </div>
                        </div>
                    </div>

                    <div class="dghdd9">
                        <div class="h4eiAQ">
                            <div class="tBgRZR">
                                <label>Tên</label>
                            </div>
                            <div class="gV+dPk">
                                <div>
                                    <div class="ovqcxY">
                                        <input type="text" placeholder="" class="y-NK4C" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="miizbf">
                            <div className="qpNcUn"></div>
                            <input className="_8LDVUy" type="file" accept=".jpg,.jpeg,.png"></input>
                            <button type="button" className="btn btn-light btn--m btn--inline">
                                Chọn ảnh
                            </button>
                            <div className="dWItVn">
                                <div className="ayiXAf">Dụng lượng file tối đa 1 MB</div>
                                <div className="ayiXAf">Định dạng:.JPEG, .PNG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccInfoPage;
