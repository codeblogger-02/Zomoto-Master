import React from 'react'
import {TiStarOutline} from "react-icons/ti";
import {RiDirectionLine , RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/imageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';




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
   
         <RestaurantInfo name="The Pizza Project" restaurantRating="3.5" deliveryRating="3.2" cuisine="Pizza, Fast Food, Beverages" address="Dharampeth, Nagpur" />
      
      <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive >
              <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons >
              <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons >
              <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons >
              <RiShareForwardLine /> Share
          </InfoButtons>
      </div>


        </div>
       
       </>
    )
}

export default RestaurantLayout;
