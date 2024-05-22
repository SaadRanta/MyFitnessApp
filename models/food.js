import { Schema, model } from "mongoose";

// Define the schema
const foodItemSchema = new Schema({
  NDB_No: { type: Number, required: true },
  Shrt_Desc: { type: String, required: true },
  Water_g: { type: Number, required: true },
  Energ_Kcal: { type: Number, required: true },
  Protein_g: { type: Number, required: true },
  Carbohydrt_g: { type: Number, required: true },
  Fiber_TD_g: { type: Number, required: true },
  Sugar_Tot_g: { type: Number, required: true },
  Calcium_mg: { type: Number, required: true },
  Iron_mg: { type: Number, required: true },
  Magnesium_mg: { type: Number, required: true },
  Phosphorus_mg: { type: Number, required: true },
  Potassium_mg: { type: Number, required: true },
  Sodium_mg: { type: Number, required: true },
  Zinc_mg: { type: Number, required: true },
  Copper_mg: { type: Number, required: true },
  Manganese_mg: { type: Number, required: true },
  Vit_C_mg: { type: Number, required: true },
  Vit_E_mg: { type: Number, required: true },
  Vit_D_ug: { type: Number, required: true },
  Vit_D_IU: { type: Number, required: true },
});

// Create the model
export const FoodItem = model('FoodItem', foodItemSchema);

