import './Header.css';
import Cookie from 'universal-cookie';
import manager from '../../helpers/manager';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from '../../StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    const cookie = new Cookie();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        manager.getUserName(setUsername);
    }, [])

    const handleLogout = () => {

        cookie.remove('access_token');
        cookie.remove('refresh_token');
        navigate('/login')
    }

    return (
        <div className="header">
            <Link to='/'>
                <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Hello
                    </span>
                    <span className="header_option_lineTwo">
                        {username}
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Returns
                    </span>
                    <span className="header_option_lineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Your
                    </span>
                    <span className="header_option_lineTwo">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_option_lineTwo header_basketCount'>{basket.length}</span>
                    </div>
                </Link>
                <div className='logout' style={{ color: 'white', paddingRight: '10px' }} onClick={handleLogout}>
                    Logout
                </div>
            </div>
        </div >
    )
}

export default Header