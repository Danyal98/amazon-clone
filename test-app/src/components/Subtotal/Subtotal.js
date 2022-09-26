import './Subtotal.css';
import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    console.log("basket: ", basket)
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.legth} items): <strong>$0</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> This order contsains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
