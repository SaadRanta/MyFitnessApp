import mongoose from "mongoose";
import { FoodItem } from "./food.js";

(async () => {
    await mongoose.connect(`mongodb+srv://Saad2112326:2112326@fitness.eoc7tkm.mongodb.net/Food`);
    // await mongoose.connect(`mailto:2112326@fitness.eoc7tkm.mongodb.net/Food`);

})();

export const db = {
    FoodItem,
};
