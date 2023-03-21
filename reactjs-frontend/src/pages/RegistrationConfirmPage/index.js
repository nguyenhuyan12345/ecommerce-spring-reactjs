import { useParams, Link } from 'react-router-dom';
import { LoginPath } from '~/constants/routes';
import { useEffect, useState } from 'react';
import { WaitLoading } from '~/components';
import UserService from '~/services/UserService';

const RegistrationConfirmPage = () => {
    const [component, setComponent] = useState(WaitLoading);

    const { token } = useParams();

    useEffect(() => {
        UserService.registrationConfirm(token)
            .then((res) => {
                console.log(res.data);
                return res.data;
            })
            .then((data) => {
                // console.log(data);
                if (data.status === true) {
                    setComponent(
                        <>
                            <h1>{data.message}</h1>
                            <Link to={LoginPath}>Đăng nhập</Link>
                        </>
                    );
                }
            });
    }, []);
    return component;
};

export default RegistrationConfirmPage;
