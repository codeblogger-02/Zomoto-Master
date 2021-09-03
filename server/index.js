//importing env variable
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";

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
routeConfig(passport);

//Application route
zomoto.use("/auth",Auth);
zomoto.use("/restaurant",Restaurant);
zomoto.use("/food",Food);
zomoto.use("/image", Image);
zomoto.use("/order", Order);
zomoto.use("/reviews", Reviews);

zomoto.get("/" , (req,res) => res.json({message:"setup seccess"}));


zomoto.listen(4000, () =>
 ConnectDB().then(() => console.log("server is running🚀")).catch(() => console.log("server is running,but database connection is failed") 
 )
);


