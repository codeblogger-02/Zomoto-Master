import React from 'react'
import {AiOutlineCompass} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"

//component 
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn'

import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodList from '../../Components/restaurant/Order-Online/FoodList';


const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                
                </aside>
               <div className="w-full px-3 md:w-3/4 ">
                  <div className="pl-3 mb-4">
                  <h2 className="text-xl font-semibold">Order Online</h2>
                   <h4 className="flex items-center gap-2 font-light text-gray-500">
                       <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                   </h4>
                  </div>
                   
                   <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                       <FoodList title="Recommended" items={[
                           {
                          price:"500",
                          rating:3,
                          description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad consequuntur iste voluptatibus autem quisquam sapiente deleniti doloremque, aliquam impedit ea dolore ab. Sint laboriosam ipsum, dicta delectus atque velit?",
                          title:"Peri Peri Paneer",
                           image:"https://b.zmtcdn.com/data/dish_photos/b2b/7d63231526b090e406540ca0a4411b2b.jpg",
                          },
                          {
                            price:"500",
                            rating:3,
                            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad consequuntur iste voluptatibus autem quisquam sapiente deleniti doloremque, aliquam impedit ea dolore ab. Sint laboriosam ipsum, dicta delectus atque velit?",
                            title:"Peri Peri Paneer",
                             image:"https://b.zmtcdn.com/data/dish_photos/b2b/7d63231526b090e406540ca0a4411b2b.jpg",
                            }
                          ]} />
                          
                      
                   </section>
               </div>
             </div>
             <FloatMenuBtn />
        </>
    )
}

export default OrderOnline
