import React from 'react'

import { createTheme, ThemeProvider } from "@mui/material/styles";

// react hooks
import { useEffect, useState ,useContext} from "react";

// contexts
import { TempContextValues } from '../contexts/TempContext';
import { DateTimeContextValues } from '../contexts/DateTimeContext';
import { LatAndLongValues } from '../contexts/LatAndLongContext';
import { SeeTempContextValues } from '../contexts/SeeTempContext';

// components 
import CardContainer from '../components/CardContainer';
import AddingForm from '../components/AddingForm';


// external libraries
import axios from "axios";
import moment from "moment";

// material ui components
import Container from "@mui/material/Container";

// grid
import Grid from "@mui/material/Unstable_Grid2";


  const theme = createTheme({
    typography: {
      fontFamily: ["IBM"],
    },
  });
  
function WeatherPage() {

      const { temp, setTemp}=useContext(TempContextValues)
      const {dateAndTime, setDateAndTime}=useContext(DateTimeContextValues)
      const {latAndLong,setLatAndLong}=useContext(LatAndLongValues)
      const {seeTemp, setSeeTemp}=useContext(SeeTempContextValues)


      useEffect(() => {
        const DateAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
        setDateAndTime(DateAndTime);
        let cancelAxios = null;
        const valueLat = latAndLong.lat || 33.510414;
        const valueLong = latAndLong.long || 36.278336;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${valueLat}&lon=${valueLong}&appid=ffb97ac57414c013454f815a2c7611c2`,
            {
              cancelToken: new axios.CancelToken((c) => {
                cancelAxios = c;
              }),
            }
          )
          .then(function (response) {
            // handle success
            const data = response.data;
            const temp = Math.round(data.main.temp - 272.15);
            const min = Math.round(data.main.temp_min - 272.15);
            const max = Math.round(data.main.temp_max - 272.15);
            const description = data.weather[0].description;
            let city = data.name;
            if (city.length === 0) {
              city = "City Not Exists";
            }
            const icon = data.weather[0].icon;
            setTemp({
              tempNumber: temp,
              description: description,
              min: min,
              max: max,
              icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
              city: city,
            });
          })
          .catch(function (error) {
            // handle error
            // console.log(error);
          });
        return () => {
          cancelAxios();
        };
      }, [seeTemp]);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ width: "100%" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "0 20px",
          }} 
        >
          {/* start card */}
          <CardContainer></CardContainer>
          {/* end card */}

          {/* start adding lat and long of any city */}
          <Grid
            container
            spacing={0.3}
            sx={{ maxWidth: "100%", marginTop: 3 }}
          >
            <AddingForm></AddingForm>
          </Grid>
          {/* end adding lat and long of any city */}
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default WeatherPage