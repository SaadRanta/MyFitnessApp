import mongoose from "mongoose";
import { FoodItem } from "./food.js";

(async () => {
    //await mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true`);
    await mongoose.connect(`mongodb://127.0.0.1:27017/Food`);
    //await mongoose.connect(`mongodb+srv://dbUser:dbUser@cluster0.enbv6.mongodb.net/pharmacy`);
})();

export const db = {
    FoodItem,
};
