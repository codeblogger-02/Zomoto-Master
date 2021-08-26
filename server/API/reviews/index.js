//libraries
import express from "express";
import passport from "passport";

//database model
import { ReviewModel } from "../../database/allModels" 

const Router = express.Router();

/*
route      /new
des         add new food review/rating
params      none
BODY        review object 
Access      public
method      POST
*/

Router.post("/new" , async (req,res) => {
   try {
     const { reviewData }= req.body;

    await ReviewModel.create(reviewData);

     return res.json({review:"sucessfully created Review"});

   } catch (error) {
    return res.status(500).json({error: error.message});
   }
});

/*
route      /delete
des         delete the review
params      _id
BODY        none
Access      public
method      DELETe
*/

Router.delete("/delete/:_id" , async(req,res) => {
    try {
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json ({reviews:"Sucessfully deleted the reviews"});
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;