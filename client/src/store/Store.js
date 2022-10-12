<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});
export default store;
=======
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import userReducer from "./userSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        user: userReducer,
    }
})
export default store;
>>>>>>> 16d0415aed01e14f527372579f1a43452f70447e
