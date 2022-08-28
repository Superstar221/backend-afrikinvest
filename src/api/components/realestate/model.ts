import mongoose, { Schema } from "mongoose";
import { Irealestate } from "./type";
var realestateSchema = new Schema({  
    SourceLink:{  
        type:String, require: true
    },  
    Name:{  
        type:String, require: true  
    },
    Price:{  
        type:Number, require: true    
    },
    Descriptions:{
        type:String
    },

    Rooms:{
        type:Number
    },
    Bedrooms:{
        type:Number
    },
    Floors:{
        type:Number
    },
    Bathrooms:{
        type:Number
    },
    Toiletrooms:{
        type:Number
    },
    Living:{
        type:String
    },
    Total:{
        type:String
    },
    Garden:{
        type:String
    },
    Lat:{
        type:Number
    },
    lng:{
        type:Number
    },
    Image1:{
        type:String
    },
    Image2:{
        type:String
    },
    Image3:{
        type:String
    },
});  
   
const RealEstate = mongoose.model<Irealestate>("realestate", realestateSchema);
export default RealEstate;
