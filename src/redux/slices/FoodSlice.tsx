import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { Food } from "../../components/types";

interface FoodState {
  loading: boolean;
  error: string;
  food: Food[];
  foodData: Food[];
}

const initialState: FoodState = {
  loading: false,
  food: [],
  foodData: JSON.parse(localStorage.getItem('foodData')) || [],
  error: "",
};

export const getFoodItems = createAsyncThunk("food/getFoodItems", async () => {
  const response = await axios.get(`/api/food`);
  return response.data as Food[];
});

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFoodItem: (state, action) => {
      state.foodData.push(action.payload);
      localStorage.setItem('foodData', JSON.stringify(state.foodData));
    },
    deleteFoodItem: (state, action) => {
      state.foodData = state.foodData.filter((_, index) => index !== action.payload);
      localStorage.setItem('foodData', JSON.stringify(state.foodData));
    },
    setFoodData: (state, action) => {
      state.foodData = action.payload;
      localStorage.setItem('foodData', JSON.stringify(state.foodData));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoodItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFoodItems.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.food = payload;
      })
      .addCase(getFoodItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch food items";
      });
  },
});

export const { addFoodItem, deleteFoodItem, setFoodData } = FoodSlice.actions;
export const selectFood = (state: RootState) => state.food;
export const FoodReducer = FoodSlice.reducer;
