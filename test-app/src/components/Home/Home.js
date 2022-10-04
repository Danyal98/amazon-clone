import './Home.css'
import Header from '../Header/Header';
import React, { useEffect } from 'react';
import Product from '../Product/Product';
import { useApp } from '../../AppContext';
import manager from '../../helpers/manager'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    const ceo = useApp()

    useEffect(() => {
        manager.getItems(ceo.actions.setItems)
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className="home">
                <div className="home_container">
                    <Carousel className='carousel_container' indicators={false} controls>
                        <Carousel.Item interval={5000}>
                            <img
                                className="home_image"
                                src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="home_image"
                                src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="home_image"
                                src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className='home_row'>
                        {ceo.state.items.map((item) => {
                            return (
                                <Product item={item} />
                            )
                        })}
                    </div>

                </div>

            </div>
        </React.Fragment >
    )
}

export default Home