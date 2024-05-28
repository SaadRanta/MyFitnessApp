import React, { useEffect, useState } from "react";
import AutoCompleteText from "./AutoCompleteText";
import { getFoodItems } from "../redux/slices/FoodSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export const Items = () => {
    const { food } = useSelector((state: RootState) => state.fooditems);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getFoodItems());
    }, [dispatch]);

    useEffect(() => {
        console.log(food);
    }, [food]);

    return (
        <div className="container">
            <AutoCompleteText items={food} />
        </div>
    );
};
