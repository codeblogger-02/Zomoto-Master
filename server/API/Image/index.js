//libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//database model
import { ImageModel } from "../../database/allModels" 


//Utilites
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//multer config 
const storage = multer.memoryStorage();
const upload = multer({storage});


/*
route      /
des         uploads given image to S3 bucket, and saves file link to mongoDB 
params      none
Access      public
method      post 
*/

Router.post("/", upload.single("file")  , async (req,res) => {
    try {
        // accept image
      const file = req.file;

       // s3 bucket option 
       const bucketOptions = {
           Bucket: "zomatomaster02",
           Key: file.originalname,
           Body: file.buffer,
           ContentType: file.mimetype,
           ACL: "public-read", // Access Control list
       };

      

       const uploadImage = await s3Upload(bucketOptions);

       return res.status(200).json({uploadImage});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;

