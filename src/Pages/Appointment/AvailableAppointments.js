import React, { useEffect, useState } from "react";
import { DayPicker, formatDay } from "react-day-picker";
import "react-day-picker/style.css";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-8">
      <h4 className="text-5xl text-primary text-center font-bold">
        Available date for appointment
        {date ? `: ${date.toLocaleDateString()}` : "Pick a day."}{" "}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
