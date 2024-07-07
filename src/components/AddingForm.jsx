import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";

// components 
import AddingLocation from './AddingLocation';
import CustomButton from './CustomButton';

function AddingForm() {
  return (
    <div style={{display:"flex"}}>
        {/* start adding location */}
        <Grid
            container
            xs={8}
            sx={{
                background: "#f5f5f5",
                borderRadius: "16px",
                padding: "20px",
            }}
        >
            <AddingLocation></AddingLocation>
        </Grid>
        {/* end adding location */}

        {/* start custom button */}
        <Grid
            xs={4}
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <CustomButton></CustomButton>
        </Grid>
        {/* end custom button */}
        
    </div>
  )
}

export default AddingForm