import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {ICarouselItem} from "../../types/carouselItem";


export interface IAppCarouselProps {
    carouselItems: ICarouselItem[]

}

const AppCarousel: React.FC<IAppCarouselProps> = (props) => {
  return (
    <Carousel variant="dark">
        {props.carouselItems.map((item, index) => {
            return (
                <Carousel.Item interval={item.interval}>
                <img
                    className="d-block w-100"
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
