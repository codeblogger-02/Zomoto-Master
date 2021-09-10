import React,{useState} from 'react'



//components 
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: ["https://b.zmtcdn.com/data/reviews_photos/43d/4bdfef44f866a94d0b59337d0e13743d_1553492440.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"Matadin Ram Bhandar",
            cuisine:["Mithai","Fastfood","North Indian","South Indian"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            RestaurantReviewValue:4.1,

        },
        {
            _id: "123456-2",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/6/3300106/e9868d8d59615e14cd2b0cae4d38842b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"Bawarchi Restaurant",
            cuisine:["Gujrati","Fastfood","North Indian","South Indian"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            RestaurantReviewValue:4.1,
            
        },
        {
            _id: "123456-3",
            photos: ["https://b.zmtcdn.com/data/pictures/3/18927523/f87b8b3fff35d0147989ef9c5db66581.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"H.K.G.N Biryani And Caterers",
            cuisine:["Biryani","North Indian"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            RestaurantReviewValue:4.1,
            
        }
    ]);
    return (
        <>
            <DeliveryCarousal />
            {/* <Brand/> */}
            <div className="flex justify-between flex-wrap ">
            {
               restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id} />
               )) 
            }
           
            </div>
        </>
    )
};

export default Delivery;
