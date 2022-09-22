import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
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
                        Hello User
                    </span>
                    <span className="header_option_lineTwo">
                        Sign In
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
            </div>
        </div>
    )
}

export default Header