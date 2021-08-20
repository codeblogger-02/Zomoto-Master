//libraries
import express from "express";
import passport from "passport";
import AWS from "aws-sdk";

//database model
import { ImageModel } from "../../database/allModels" 

// AWS s3 bucket config
const s3Bucket = new AWS.S3({
   accessKeyId: process.env.AWS_S3_ACCESS_KEY,
   secretAccessKey: process.env.AWS_S3_SECRET_KEY,
   region: "ap-south-1",
});

const Router = express.Router();

/*
route      /
des         uploads given image to S3 bucket, and saves file link to mongoDB 
params      none
Access      public
method      post 
*/

Router.post("/", async (req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});