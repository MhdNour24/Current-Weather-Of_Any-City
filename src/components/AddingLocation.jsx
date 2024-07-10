import React from 'react'
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";

// hooks
import { useContext } from 'react';

// contexts
import { LatAndLongValues } from '../contexts/LatAndLongContext';


const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#3f51b5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3f51b5",
      },
      "&:hover fieldset": {
        borderColor: "#757de8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5",
      },
      borderRadius: "8px",
    },
  });


function AddingLocation() {
  const {latAndLong,setLatAndLong}=useContext(LatAndLongValues)


  return (
    <>
        <Grid xs={12} sx={{ marginBottom: "6px" }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <LocationOnIcon
                  sx={{ color: "#3f51b5", marginRight: "8px" }}
                />
                <Typography variant="h6" sx={{ color: "#3f51b5" }}>
                  Add Location
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ marginBottom: "16px" }}>
              <StyledTextField
                type="number"
                id="outlined-latitude"
                value={latAndLong.lat}
                onChange={(event) => {
                  setLatAndLong({ ...latAndLong, lat: event.target.value });
                }}
                label="Latitude"
                placeholder="Enter latitude:"
                sx={{ width: "80%" }}
              />
            </Grid>
            <Grid xs={12}>
              <StyledTextField
                type="number"
                id="outlined-longitude"
                value={latAndLong.long}
                onChange={(event) => {
                  setLatAndLong({
                    ...latAndLong,
                    long: event.target.value,
                  });
                }}
                label="Longitude"
                placeholder="Enter longitude:"
                sx={{ width: "80%" }}
              />
        </Grid>
    </>
  )
}

export default AddingLocation