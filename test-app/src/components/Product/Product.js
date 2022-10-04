import './Product.css'
import Card from '@mui/material/Card';
import { useApp } from '../../AppContext'
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import manager from '../../helpers/manager';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { useStateValue } from '../../StateProvider';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product(props) {
    const ceo = useApp()
    const [inInventory, setInInventory] = useState(parseInt(props.item.quantity, 10))
    const [, dispatch] = useStateValue();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const addToBasket = (item) => {
        console.log('ITEM: ', item)
        let formData = new FormData()
        formData.append("id", parseInt(item.id))
        formData.append("name", item.name)
        formData.append("description", item.description)
        formData.append("image", item.image)
        formData.append("price", parseFloat(item.price))
        formData.append("rating", parseFloat(item.rating))
        formData.append("quantity", parseInt(item.quantity, 10) - 1)

        manager.add_to_basket(
            formData,
            ceo.actions.setItems
        )
        // dispatch items into the data layer
        setInInventory(inInventory - 1)
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.item.id,
                creation_date: props.item.creation_date,
                title: props.item.name,
                image: props.item.image,
                price: props.item.price,
                rating: props.item.rating,
                description: props.item.description,
            }
        })

    }

    return (
        <Card className='card' key={props.item.id} sx={{ width: '31%', borderRadius: '0px' }}>
            <CardHeader
                sx={{ width: "100%" }}
                title={props.item.name}
                subheader={new Date(props.item.creation_date).toDateString()}
            />
            <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                height="194"
                image={props.item.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Rating
                        name="read-only"
                        value={parseFloat(props.item.rating)}
                        readOnly
                        precision={0.1}
                        emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Price: $</strong>{props.item.price}
                </Typography>
                {inInventory > 0 ?
                    <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: 'green' }}>In Stock: </strong>{inInventory}
                    </Typography> :
                    <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: 'red' }}>Out of Stock</strong>
                    </Typography>
                }
            </CardContent>
            {inInventory > 0 ?
                <button
                    className='add_to_basket' onClick={() => addToBasket(props.item)}>
                    Add to Basket
                </button> :
                <>
                    <Typography variant="body2" color="text.secondary">
                        <strong>(This item will soon be added in inventory.)</strong>
                    </Typography>
                    <button
                        disabled
                        style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}

                        className='add_to_basket'>
                        Add to Basket
                    </button>
                </>
            }
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                <CardContent sx={{ wordBreak: 'break-word' }}>
                    <Typography paragraph>Description:</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.item.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );

}
