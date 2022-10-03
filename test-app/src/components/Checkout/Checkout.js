import './Checkout.css'
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import manager from '../../helpers/manager'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'

export default function Checkout() {
    const [username, setUserName] = useState(null);
    const [{ basket },] = useStateValue();
    useEffect(() => {
        manager.getUserName(setUserName)
    }, [])
    return (
        <React.Fragment>
            <Header />
            <div className="checkout">
                <div className="checkout_left">
                    <img
                        className='checkout_ad'
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                    <div className="checkout_title">
                        <h3>{username}'s shopping basket</h3>
                    </div>
                    {basket.map((item) => {
                        return <CheckoutProducts item={item} />
                    })}
                </div>
                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
        </React.Fragment>
    )
}
