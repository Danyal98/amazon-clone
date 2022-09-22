import './Header.css';
import manager from '../../helpers/manager';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        manager.getUserName(setUsername);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
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
                        <span className='header_option_lineTwo header_basketCount'>0</span>
                    </div>
                </Link>
                <div className='logout' style={{ color: 'white', 'padding-right': '10px' }} onClick={handleLogout}>
                    Logout
                </div>
            </div>
        </div >
    )
}

export default Header