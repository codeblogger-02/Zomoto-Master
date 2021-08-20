//libraries
import express from "express";
import passport from "passport";

//database model
import { MenuModel , ImageModel} from "../../database/allModels" 

const Router = express.Router();

/*
route      /list
des         get all menu based on id 
params      _id
Access      public
method      Post
*/


Router.get("/list/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({ menus })
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


/*
route      /list
des         get all menu images based on id 
params      _id
Access      public
method      Post
*/

Router.get("/image/:_id", async (req , res) => {
    try {
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({ menus })
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;