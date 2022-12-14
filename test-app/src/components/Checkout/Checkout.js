import './Checkout.css'
import React from 'react'
import { useApp } from '../../AppContext'
import Header from '../Header/Header'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'

export default function Checkout() {
    const [{ basket },] = useStateValue();
    const ceo = useApp()
    return (
        <React.Fragment>
            <Header />
            <div className="checkout">
                <div className="checkout_left">
                    <img
                        className='checkout_ad'
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                    <div className="checkout_title">
                        <h3>{ceo.state.user}'s shopping basket</h3>
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
