// import { FacebookOutlined, GithubFilled, GoogleOutlined } from '@ant-design/icons';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './SocialLogin.module.scss';

const cx = classNames.bind(styles);

const SocialLogin = () => {
    return (
        <div className={cx('authProvide')}>
            <button className={cx('providerButton', 'providerFacebook')} type="button">
                <FontAwesomeIcon icon={faFacebook} className={cx('authIcon')} />
                <span>Continue with Facebook</span>
            </button>
            <button className={cx('providerButton', 'providerGoogle')} type="button">
                {/* <GoogleOutlined className={cx('authIcon')} /> */}
                <FontAwesomeIcon icon={faGoogle} className={cx('authIcon')} />
                Continue with Google
            </button>
            <button className={cx('providerButton', 'providerGithub')} type="button">
                {/* <GithubFilled className={cx('authIcon')} /> */}
                <FontAwesomeIcon icon={faGithub} className={cx('authIcon')} />
                Continue with GitHub
            </button>
        </div>
    );
};

export default SocialLogin;
