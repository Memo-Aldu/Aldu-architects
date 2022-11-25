import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {ICarouselItem} from "../../types/carouselItem";
import "./carousel.scss";


export interface IAppCarouselProps {
    carouselItems: ICarouselItem[]

}

const AppCarousel: React.FC<IAppCarouselProps> = (props) => {
  return (
    // size is 50% of the screen 
    <Carousel variant="dark" className="">
        {props.carouselItems.map((item, index) => {
            return (
                <Carousel.Item interval={item.interval}>
                <img 
                    className="carousel__img"
                    src={item.image}
                    alt={item.altText}
                />
                <Carousel.Caption>
                    <h3 className=''>{item.caption}</h3>
                    <p className=''>{item.description}</p>
                </Carousel.Caption> 
            </Carousel.Item>
            )
        })}
        
    </Carousel>
  );
};

export default AppCarousel;
