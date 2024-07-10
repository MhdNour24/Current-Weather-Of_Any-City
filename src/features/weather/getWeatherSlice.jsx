import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
// external libraries
import axios from "axios";

export const fetchWeather=createAsyncThunk("weatherApi/fetchWeather",async (action)=>{
    // let cancelAxios = null;
    const latAndLong=action.latAndLong
    const valueLat = latAndLong.lat || 33.510414;
    const valueLong = latAndLong.long || 36.278336;
    
    const response=await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${valueLat}&lon=${valueLong}&appid=ffb97ac57414c013454f815a2c7611c2`,
            // {
            //   cancelToken: new axios.CancelToken((c) => {
            //     cancelAxios = c;
            //   }),
            // }
          )
          const data = response.data
          const temp = Math.round(data.main.temp - 272.15);
          const min = Math.round(data.main.temp_min - 272.15);
          const max = Math.round(data.main.temp_max - 272.15);
          const description = data.weather[0].description;
          let city = data.name;
          if (city.length === 0) {
            city = "City Not Exists";
          }
          let icon = data.weather[0].icon;
          icon=`https://openweathermap.org/img/wn/${icon}@2x.png`
          return {tempNumber:temp,min,max,description,icon,city}
})

const getWeatherSlice=createSlice({
    name:"weatherApi",
    initialState:{
        weather:{}, 
        isLoading:false,
    },
    extraReducers(builder){
      builder.addCase(fetchWeather.pending,(state,action)=>{
        state.isLoading=true
      }).addCase(fetchWeather.fulfilled,(state,action)=>{
        state.isLoading=false
        state.weather=action.payload;
      }).addCase(fetchWeather.rejected,(state,action)=>{
        state.isLoading=false
        // state.weather=action.payload;
      })
    }
})

export default getWeatherSlice.reducer;