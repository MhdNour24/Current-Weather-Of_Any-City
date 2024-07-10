import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReducer from "../features/weather/getWeatherSlice";

export default configureStore({
    reducer:{
        weather:weatherApiSliceReducer
    }
})