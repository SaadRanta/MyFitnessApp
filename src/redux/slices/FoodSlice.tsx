import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { Food } from "../../components/types";

interface SemesterState {
	
	loading: boolean;
	error: string;
	food: Food[];

}

const initialState: SemesterState = {
	
	loading: false,
    food:[],
	error: "",
};
export const getFoodItems = createAsyncThunk("food/food", async () => {
	//await timeout(5000);
	const response = await axios.get(`/api/food`);
	return response.data as Food[];
});




export const FoodSlice = createSlice({
	name: "Foods",
	initialState,
	reducers: {
	//	setCount: (state, ac)
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
			.addCase(getFoodItems.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload as string;
			})
	},
});

export const {  } = FoodSlice.actions;
export const FoodReducer = FoodSlice.reducer;
export const selectCount = (state: RootState) => state.fooditems;
