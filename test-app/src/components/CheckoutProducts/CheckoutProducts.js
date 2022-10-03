import React from 'react'
import './CheckoutProducts.css'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import Typography from '@mui/material/Typography'
import { useStateValue } from '../../StateProvider'


function CheckoutProducts(props) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.item.id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={props.item.image} alt="" />
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>
                    {props.item.title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{props.item.price}</strong>
                </p>
                <Typography variant="body2" color="text.secondary">
                    <Rating
                        name="read-only"
                        value={parseFloat(props.item.rating)}
                        readOnly
                        precision={0.1}
                        emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                </Typography>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
