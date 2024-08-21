import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card bg-base-100 lg:max-w-lg shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-2xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? 
            <span>{slots[0]}</span>
           : 
            <span className="text-cyan-400 text-xl">
              
              Please try another date
            </span>
          }
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-center">

          
          <label for="booking-modal" disabled={slots.length===0} onClick={() => setTreatment(service)} class="btn">Book Appointemnt</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
