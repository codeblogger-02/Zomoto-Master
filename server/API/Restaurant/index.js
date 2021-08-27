//libraries
import express from "express";
import passport from "passport";

//database model
import { RestaurantModel } from "../../database/allModels";

//validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import {ValidateRestaurantId} from "../../validation/food"

const Router = express.Router();

/*
route      /
des         get all the restaurant detail based on city
params      none
Access      public
method      Post
*/

Router.get("/", async (req,res) => {
    try {
        
        await ValidateRestaurantCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({ city });
        
        return res.json({restaurants});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
route      /
des         get individual the restaurant detail based on city
params      id
Access      public
method      Post
*/

Router.get("/:_id", async(req , res) => {
    try {
        
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant) return res.status(400).json({error: "Restaurant Not Found"});

        return res.json({restaurant});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


/*
route       /search
des         get restaurant detail using search 
params      none
body        search
Access      public
method      get
*/

Router.get("/search", async (req ,res) => {
    try {
        
      await ValidateRestaurantSearchString( req.body);

      const { searchString } = req.body;
      const restaurants = await RestaurantModel.find({name:{ $regex:searchString , $options:"i" },})
      
       if(!restaurants) return res.status(400).json({error: `no Restaurant matched for ${searchString}`});
       
       return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({error: error.message}); 
    }
});





export default Router;