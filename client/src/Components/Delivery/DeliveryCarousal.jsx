import React from 'react';
import Slider from "react-slick";


//component
import DeliveryCatagory from './DeliveryCatagory';
import { NextArrow,PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {

    const categories = [
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/17c690ce29f5e0cadf953fea3d8a0de91612438781.png",
          title: "Poha",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/900b79898e840645e67723c25193cc1d1612438080.png",
          title: "Uttapam",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
          title: "Paratha",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/39e52008184e301bb0d3dd6417d72c151603437643.png",
          title: "Kachori",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/4ba67cc4b18915852ed68708c8c7d5931602873867.png",
          title: "Chole Bhature",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
          title: "Rolls",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png",
          title: "Sandwich",
        },
      ];

      const settings = {

        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };




    return (
        <>
           <h1 className="text-xl mb-4 font-semibold lg:px-3">Insperation for your first order</h1> 
           <div className="lg:hidden flex flex-wrap gap-3 lg:gap-0 justify-between lg:px-3">
           {categories.map((food) => (
                   <DeliveryCatagory {...food} />
                 ))}
           </div>
        
            <div className="hidden lg:block px-3">
               
               <Slider {...settings}>
               {categories.map((food) => (
                   <DeliveryCatagory {...food} />
                 ))}
               </Slider>

            </div>

        </>
    )
};

export default DeliveryCarousal;
