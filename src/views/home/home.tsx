

import * as React from 'react';
import AppCarousel, { IAppCarouselProps } from '../../components/carousel/carousel';
import Button from 'react-bootstrap/Button';
import NavBar from "../../components/navbar/navbar";
import {ICarouselItem} from "../../types/carouselItem";
import pic1 from '../../assets/projects/floor-plan-1.jpg';
import pic2 from '../../assets/projects/project-2.jpg';
import pic3 from '../../assets/projects/project-3.jpg';
import { useEffect } from 'react';


const carouselItems: ICarouselItem[] = [
    {
      altText: 'First slide',
      image: pic1,
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      interval: 10000
    },
    {
      altText: 'Second slide',
      image: pic2,
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      interval: 10000
   },
   {
      altText: 'Third slide',
      image: pic3,
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      interval: 10000
   },
];

const HomeCarouselProps:  IAppCarouselProps = {
    carouselItems: carouselItems
}


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
  <div className="card bg-light text-black sticky">
    <img src={pic1} className="card-img" alt="..." style={{opacity : "0.25", width: "100%", maxHeight: "100"}}/>
        <div className="card-img-overlay col position-absolute top-50 start-50 translate-middle">
          <div className="row text-dark text-start">
            <h5 className="" style={{fontSize: "1.2vw"}}>WELCOME TO ALDU</h5>
            <h2 className="card-text fw-bolder" style={{fontSize: "2.5vw", fontFamily: "RobotoMono"}}>We are a creative group of people who design influential brands and digital experiences.</h2>
          </div>
          <div className="row mt-auto mt-lg-3">
            <a className="col-5 col-md-4 btn btn-outline-dark btn-lg mx-2 my-2" style={{fontSize: "1.5vw"}} href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button"
                    rel="nofollow" target="_blank">Our Services</a>
            <a className="col-5 col-md-4 btn btn-outline-dark btn-lg mx-2 my-2" style={{fontSize: "1.5vw"}} href="https://mdbootstrap.com/docs/standard/" target="_blank"
                    role="button">Our Projects</a>
          </div>
        </div>
  </div>
  )
};

export default Home;
