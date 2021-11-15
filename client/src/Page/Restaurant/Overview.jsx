import React from 'react'
import { Link , useParams} from 'react-router-dom';
import {IoMdArrowDropright} from "react-icons/io";
import {MdContentCopy} from "react-icons/md";
import {FaDirections} from "react-icons/fa";
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


//component
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow,PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';






const Overview = () => {
    const {id} = useParams()
    const settings = {

        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                 <h1 className="font-semibold text-lg md:text-2xl my-4">About this place</h1>
                 <div className="flex justify-between items-center">
                     <h2 className="text-lg font-medium">Menu</h2>
                     <Link to={`/restaurant/${id}/menu`}>
                     <span className="flex items-center gap-1 text-zomato-400">See all menus <IoMdArrowDropright /></span>
                     </Link>
                 </div>
                 <div className="flex flex-wrap gap-3 my-4">
                     <MenuCollection menuTitle="Menu" pages="3" image={["https://b.zmtcdn.com/data/menus/926/19294926/4f489086d19a144d3e4eb22cc97f2f2a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                      "http://placeimg.com/1200/800/nature"]}/>
                     </div>
                   
                     <h4 className="font-semibold text-lg md:text-xl my-4">Cuisine</h4>
                   <div className="flex flex-wrap gap-2">
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street food</span>
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street food</span>
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street food</span>
                   </div> 
                   <div>
                   <h4 className="font-semibold text-lg md:text-xl my-4">Average Cost</h4>
                   <h6>₹350 for two people (approx.)</h6>
                   <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                   </div>
                   <div className="my-4">
                   <h4 className="font-semibold text-lg md:text-xl my-4">Similar Restaurant</h4> 
                  <Slider {...settings}>
                  <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/2/19065282/cd84797efce08aee9e4218718afca817_featured_v2.jpg?output-format=webp"
                   title="La Pasta" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/2/19065282/cd84797efce08aee9e4218718afca817_featured_v2.jpg?output-format=webp"
                   title="La Pasta" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/2/19065282/cd84797efce08aee9e4218718afca817_featured_v2.jpg?output-format=webp"
                   title="La Pasta" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/2/19065282/cd84797efce08aee9e4218718afca817_featured_v2.jpg?output-format=webp"
                   title="La Pasta" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/2/19065282/cd84797efce08aee9e4218718afca817_featured_v2.jpg?output-format=webp"
                   title="La Pasta" />
                  </Slider>
                   </div>
                   
                   <div className="my-4">
                       <h4 className="text-lg font-medium">
                           Rate Your delivery experience
                       </h4>
                       <ReactStars
                        count={5}
                        onChange={ratingChanged}
                           size={24}
                             activeColor="#ffd700"
                        />
                   </div>
                   <div className="my-4 w-full md:hidden flex flex-col gap-4">
                   <Mapview title="The Pizza Project" phno="+919175952615" mapLocation={[21.139499133646154, 79.05867991403582]} address="Shop 2, Plot 1, 251/2, Ground Floor, Swapnil Rajni Apartment, WHC Road, Near Chavhan HA, Dharampeth, Nagpur"/>
                   </div>
                   <div className="my-4 flex flex-col gap-4">
                       <ReviewCard />
                       <ReviewCard />
                       <ReviewCard />
                   </div>
                    
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                    <Mapview title="The Pizza Project" phno="+919175952615" mapLocation={[21.139499133646154, 79.05867991403582]} address="Shop 2, Plot 1, 251/2, Ground Floor, Swapnil Rajni Apartment, WHC Road, Near Chavhan HA, Dharampeth, Nagpur"/>
                </aside>
            </div>
        </>
    )
}

export default Overview;
