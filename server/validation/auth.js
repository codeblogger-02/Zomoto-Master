import joi from "joi";

export const ValidateSignup = (userData) => {
 
    const Schema = joi.object({
        fullname: joi.string().required().min(8),
        email: joi.string().email().required(),
        password: joi.string().min(8),
        address: joi.array().items(joi.object({detail:joi.string() , for:joi.string()})),
        phoneNumber: joi.number().min(10),
    }); 

    return Schema.validateAsync(userData);

};


export const ValidateSignin = (userData) => {
 
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
        
    }); 

    return Schema.validateAsync(userData);

};