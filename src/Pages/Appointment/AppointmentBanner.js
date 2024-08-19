import React, { useState } from "react";
import appointment1 from '../../assets/appointment1.jpg';
// import { useState } from "react";

import { DayPicker, formatDay } from "react-day-picker";
import "react-day-picker/style.css";

const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date());
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
          selected={selected}
          onSelect={setSelected}
          footer={
            selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
          }
          />
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
