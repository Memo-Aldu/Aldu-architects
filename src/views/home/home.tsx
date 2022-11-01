

import * as React from 'react';
import AppCarousel, { IAppCarouselProps } from '../../components/carousel/carousel';
import NavBar from "../../components/navbar/navbar";
import {ICarouselItem} from "../../types/carouselItem";
import pic1 from '../../assets/projects/floor-plan-1.jpg';
import pic2 from '../../assets/projects/project-2.jpg';
import pic3 from '../../assets/projects/project-3.jpg';


const carouselItems: ICarouselItem[] = [
    {
      altText: 'First slide',
      image: pic1,
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      interval: 1500
    },
    {
      altText: 'Second slide',
      image: pic2,
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      interval: 1500
   },
   {
      altText: 'Third slide',
      image: pic3,
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      interval: 1500
   },
];

const HomeCarouselProps:  IAppCarouselProps = {
    carouselItems: carouselItems
}


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
        <NavBar />
        <AppCarousel carouselItems={carouselItems}></AppCarousel>
    </>
  )
};

export default Home;
