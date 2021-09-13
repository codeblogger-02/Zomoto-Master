import React from 'react'

//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar"

const RestaurantLayout = () => {
    return (
       <>
         <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-40">
           
            <div className="w-full h-60  md:hidden">
                <img src="https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg" alt="restaurant image"
                className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="hidden w-full h-80 md:flex gap-1">
           <div className="w-7/12 h-full overflow-hidden ">
           <img src="https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg" alt="restaurant image"
                className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-110 "/>
           </div>
           <div className="w-1/6 h-full flex flex-col gap-1 ">
           <img src="https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg" alt="restaurant image"
                className="w-full h-full object-cover rounded-lg"/>
                 <img src="https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg" alt="restaurant image"
                className="w-full h-full object-cover rounded-lg"/>
           </div>
           <div className="w-1/6 h-full flex flex-col gap-1 ">
           <img src="https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg" alt="restaurant image"
                className="w-full h-full object-cover rounded-lg"/>
                 <img src="https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg" alt="restaurant image"
                className="w-full h-full object-cover rounded-lg"/>
           </div>
            </div>
        </div>
       
       </>
    )
}

export default RestaurantLayout;
