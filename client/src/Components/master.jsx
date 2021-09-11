import React from 'react'
import { useParams } from 'react-router-dom';


//Component
import Delivery from './Delivery';
import Dinning from './Dinning';
import NightLife from './NightLife';
import Nutrition from './Nutrition';




 const Master = () => {
  
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

export default  Master;