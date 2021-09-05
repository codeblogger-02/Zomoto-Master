import joi from "joi";

 
export const validateOrderId = (OrdId) => {

    const Schema = joi.object({
       
        _id: joi.string().required(),

    });

    return Schema.validateAsync(OrdId);

};


export const validateNewOrder = (newId) => {
   
    const Schema = joi.object({
       
        _id: joi.string().required(),
        orderDetails: joi.array.items(joi.object({})),


    });


     return Schema.validateAsync(newId)

}