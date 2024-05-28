import { Tuple, configureStore } from '@reduxjs/toolkit'
import { FoodReducer } from './slices/FoodSlice'

export const store = configureStore({
    reducer: {
        fooditems: FoodReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disable serializable state invariant middleware
      }),
      
    
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;