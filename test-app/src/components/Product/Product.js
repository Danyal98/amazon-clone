import './Product.css'
import Card from '@mui/material/Card';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
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
    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = useState(parseInt(props.item.rating, 10));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Price: $</strong>{props.item.price}
                </Typography>
            </CardContent>
            <button
                className='add_to_basket'>
                Add to Basket
            </button>
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
