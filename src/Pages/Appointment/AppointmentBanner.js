// import React, { useState } from "react";
import appointment1 from '../../assets/appointment1.jpg';

import { DayPicker, formatDay } from "react-day-picker";
import "react-day-picker/style.css";

const AppointmentBanner = ({date, setDate}) => {
    
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={appointment1}
          class="max-w-sm rounded-lg shadow-2xl" alt=" "
        />
        <div>
          <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          
          />
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
