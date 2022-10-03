import './Subtotal.css';
import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

function Subtotal() {
    const [{ basket },] = useStateValue();
    console.log("Basket", basket)
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> This order contsains a gift.
                        </small>
                    </>
                )}
                decimalSeparator={'.'}
                decimalScale={4}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
