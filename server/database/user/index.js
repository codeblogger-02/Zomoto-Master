import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const UserSchema = new mongoose.Schema({
    fullname:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String,},
    address:[{ detail: {type: String} , for: {type:String} }],
    phoneNumber: [{ type: Number }],
},
{
    timestamps:true,
}
);


UserSchema.methods.generateJwtToken = function() {
   return jwt.sign({ user: this._id.toString() },"ZomotoApp");
};


UserSchema.statics.findByEmailAndPhone = async ({email , phoneNumber}) => {
     // check whether email exist 
     const checkUserByEmail = await UserModel.findOne({email});
     const checkUserByPhone = await UserModel.findOne({phoneNumber});
     if(checkUserByEmail || checkUserByPhone ){
       throw new Error("User already exist.....!!");
    }
     
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({email , password}) => {
    // check wheather email exist
    const user = await UserModel.findOne({email});

    if(!user) throw new Error("user does not exist!!");

    //compare password
    const doesPasswordmatch = await bcrypt.compare(password,user.password);

    if(!doesPasswordmatch) throw new Error("invalid password!");

    return user;
};

UserSchema.pre("save", function(next) {
    const user = this;
     
    //password is modifies
    if(!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8,(error , salt) => {
        if (error) return next(error);
        // hash the password
        bcrypt.hash(user.password, salt, (error , hash) => {
            if (error) return next(error);

            //assigned hashed password
            user.password = hash;
            return next();
        });
    });

});



 export const UserModel = mongoose.model("Users", UserSchema);