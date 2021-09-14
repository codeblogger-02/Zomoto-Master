import React from 'react'


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/imageGrid';


const RestaurantLayout = () => {
    return (
       <>
         <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-40">
           <ImageGrid images={["https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg",
           "https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg",
           "https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg",
           "https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg",
           "https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg"
           ]} /> 
        </div>
       
       </>
    )
}

export default RestaurantLayout;
