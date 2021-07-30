//importing env variable
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";

//microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food"

//database connection
import ConnectDB from "./database/connection";

const zomoto = express();


// Application middlewares
zomoto.use(express.json());
zomoto.use(express.urlencoded({extended:false}));
zomoto.use(helmet());
zomoto.use(cors());
zomoto.use(passport.initialize());
zomoto.use(passport.session());

//passport configuration
googleAuthConfig(passport);

//Application route
zomoto.use("/auth",Auth);
zomoto.use("/restaurant",Restaurant);
zomoto.use("/food",Food);


zomoto.get("/" , (req,res) => res.json({message:"setup seccess"}));


zomoto.listen(4000, () =>
 ConnectDB().then(() => console.log("server is running🚀")).catch(() => console.log("server is running,but database connection is failed") 
 )
);


