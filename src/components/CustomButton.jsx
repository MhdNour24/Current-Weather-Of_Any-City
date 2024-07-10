import React from 'react'
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

// hooks
import { useContext } from 'react';

// contexts
import { LatAndLongValues } from '../contexts/LatAndLongContext';
import { SeeTempContextValues } from '../contexts/SeeTempContext';

const CustomButtonContainer = styled(Button)`
&& {
  background-color: ${(props) => (props.disabled ? "#d3d3d3" : "#1976d2")};
  color: ${(props) => (props.disabled ? "#808080" : "#fff")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  border-radius: 10px;
  padding: 10px 20px; 
  &:hover {
    background-color: ${(props) => (props.disabled ? "#d3d3d3" : "#115293")};
  }
}
`;
function CustomButton() {

  const {latAndLong,setLatAndLong}=useContext(LatAndLongValues)
  const {seeTemp, setSeeTemp}=useContext(SeeTempContextValues)
  
  return (
    <>
        <CustomButtonContainer
              variant="contained"
              disabled={
                latAndLong.lat.length === 0 || latAndLong.long.length === 0
              }
              onClick={() => {
                setSeeTemp((prev) => !prev);
                setTimeout(() => {
                  setLatAndLong({ lat: "", long: "" });
                }, 0);
              }}
            >
              Find
        </CustomButtonContainer>
    </>
  )
}

export default CustomButton