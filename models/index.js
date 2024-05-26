import mongoose from "mongoose";
import { FoodItem } from "./food.js";

(async () => {
    await mongoose.connect(`mongodb://127.0.0.1:27017/Food`);
    // await mongoose.connect(`mailto:2112326@fitness.eoc7tkm.mongodb.net/Food`);

})();

export const db = {
    FoodItem,
};
