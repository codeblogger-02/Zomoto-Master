//libraries
import express from "express";
import passport from "passport";

//database model
import { FoodModel } from "../../database/allModels" 

const Router = express.Router();

/*
route      /
des         get all the restaurant detail based on city
params      none
Access      public
method      Post
*/