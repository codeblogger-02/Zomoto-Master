//libraries
import express from "express";
import passport from "passport";

//database model
import { UserModel } from "../../database/allModels" 

const Router = express.Router();

/*
route       /:_id
des         Get user data
params      _id
BODY        review object 
Access      public
method      GET
*/

Router.get("/:_id", async(req, res) => {
   
   try {
       
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);

    return res.json({user: getUser});

   } catch (error) {
    return res.status(500).json({error: error.message});
 
   }


});

/*
route       /update/:_id
des         Get user data
params      _id
BODY        user data
Access      public
method      PUT
*/

Router.put("/update/:_id", async( req,res ) => {

    try {
        
         const {_id} = req.params;
         const {userData} = req.body;

         const updateUserData = await UserModel.findByIdAndUpdate(_id,{
             $set: userData,
         },
            {new:true}
         );

         return res.json({user:updateUserData});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }

});



export default Router;