import React from 'react'
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
// react hooks
import { useContext} from "react";

// contexts
import { DateTimeContextValues } from '../contexts/DateTimeContext'; 

// redux import 
import { useSelector } from 'react-redux';

function CardContainer() {
  const {dateAndTime, setDateAndTime}=useContext(DateTimeContextValues)
  const temp=useSelector((state)=>{
    return state.weather.weather;
  })
  return (
    <div
    dir="rtl"
    style={{
      backgroundColor: "#0a75ad",
      width: "100%",
      padding: "10px",
      borderRadius: "15px",
      boxShadow:
        "rgba(136, 165, 191, 0.48) 2px 2px 16px 0px, rgba(255, 255, 255, 0.8) -2px -2px 16px 0px",
    }}
  >
    {/* start content */}
    <div>
      {/* start city and time */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ marginRight: "20px", fontWeight: "600" }}
        >
          {temp.city}
        </Typography>
        <Typography variant="h6" sx={{ marginRight: "20px" }}>
          {dateAndTime}
        </Typography>
      </div>
      {/* end city and time */}

      <hr></hr>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        {/* start degree and description */}
        <div>
          {/* start temp */}
          <div style={{ display: "flex" }}>
            <Typography variant="h1" sx={{ textAlign: "right" }}>
              {temp.tempNumber}
            </Typography>
            {/* start temp image */}
            <img src={temp.icon} alt="img"></img>
            {/* end temp image */}
          </div>
          <Typography variant="h6">{temp.description}</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ fontSize: "18px" }}>
              min temp:
              <span style={{ fontWeight: "normal" }}>
                {" "}
                {temp.min}
              </span>
            </h4>
            <h4 style={{ margin: "0 7px" }}>|</h4>
            <h4 style={{ fontSize: "18px" }}>
              max temp:
              <span style={{ fontWeight: "normal" }}>
                {" "}
                {temp.max}
              </span>
            </h4>
          </div>
          {/* end temp */}
        </div>
        {/* end degree and description */}
        <CloudIcon style={{ fontSize: "200px" }}></CloudIcon>
      </div>
    </div>
    {/* end content */}
  </div>
  )
}

export default CardContainer