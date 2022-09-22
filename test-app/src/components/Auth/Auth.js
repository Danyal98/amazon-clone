import axiosInstance from '../../axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../../backendInfo';

function Auth(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const verify_token = () => {
        const accessToken = localStorage.getItem('access_token')

        if (accessToken) {
            axiosInstance
                .post(`${verifyToken}`, { 'token': accessToken })
                .then((res) => {
                    if (res.status === 200) {
                        setIsAuthenticated(true);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    console.log('error: ', err);
                    setIsAuthenticated(false);
                    navigate('/login')
                })
        }
        else {
            console.log('Not Authenticated');
            setIsAuthenticated(false);
            navigate('/login')
        }
    }

    useEffect(() => { verify_token() }, [])

    return isAuthenticated ? props.children : navigate('/login')
}

export default Auth
