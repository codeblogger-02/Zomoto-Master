//libraries
import express from "express";
import passport from "passport";

//database model
import { FoodModel } from "../../database/allModels" 

const Router = express.Router();

/*
route      /r
des         get all the food based on particular restaurant 
params      id
Access      public
method      GET
*/

Router.get("/r/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});

        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
route      /c
des         get all the food based on particular category 
params      category
Access      public
method      GET
*/

Router.get("/c/:category", async (req,res) => {
    try {
        const {category} = req.params;
        const foods = await FoodModel.find({category: {$regex:category,$options:"i"},
    });

        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;