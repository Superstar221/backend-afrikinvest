import { Document } from "mongoose";

export interface Irealestate extends Document {
    username: string;
    name: string;
    surname: string;
    SourceLink:String;
    Name:String;
    Price:Number;
    Descriptions:String;
    Rooms:Number;
    Bedrooms:Number;
    Floors:Number;
    Bathrooms:Number;
    Toiletrooms:Number;
    Living:String;
    Total:String;
    Garden:String;
    Lat:Number;
    lng:Number;
    Image1:String;
    Image2:String;
    Image3:String;
}