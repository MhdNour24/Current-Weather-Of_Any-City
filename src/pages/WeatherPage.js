import React from 'react'

import { createTheme, ThemeProvider } from "@mui/material/styles";

// react hooks
import { useEffect ,useContext} from "react";

// contexts
import { DateTimeContextValues } from '../contexts/DateTimeContext';
import { LatAndLongValues } from '../contexts/LatAndLongContext';
import { SeeTempContextValues } from '../contexts/SeeTempContext';

// components 
import CardContainer from '../components/CardContainer';
import AddingForm from '../components/AddingForm';


// external libraries
import moment from "moment";

// material ui components
import Container from "@mui/material/Container";

// grid
import Grid from "@mui/material/Unstable_Grid2";

// redux import 
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../features/weather/getWeatherSlice';

  const theme = createTheme({
    typography: {
      fontFamily: ["IBM"],
    },
  });
  
function WeatherPage() {

    // redux code 
    const dispatch=useDispatch();


      const {dateAndTime, setDateAndTime}=useContext(DateTimeContextValues)
      const {latAndLong,setLatAndLong}=useContext(LatAndLongValues)
      const {seeTemp, setSeeTemp}=useContext(SeeTempContextValues)

      useEffect(() => {
        const DateAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
        setDateAndTime(DateAndTime);
        dispatch(fetchWeather({latAndLong:latAndLong}))
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