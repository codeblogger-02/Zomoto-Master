import React from 'react'
import { useParams } from 'react-router-dom';


//Component
import Delivery from '../Components/Delivery';
import Dinning from '../Components/Dinning';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';




 const Home = () => {
  
    const {type} = useParams()

    return (

         <div className="my-5">
         {type === "delivery" && <Delivery /> }
         {type === "dinning" && <Dinning/>}
         {type === "night" && <NightLife/>}
         {type === "nutri" && <Nutrition/>}
         </div>
    )
};

export default  Home;