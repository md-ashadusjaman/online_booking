import React from "react";
import { DayPicker, formatDay } from "react-day-picker";
import "react-day-picker/style.css";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

const handleBooking = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
}

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <h3 class="text-lg font-bold text-primary">Booking for: {name}</h3>

          <form onSubmit={handleBooking} className=" grid grid-cols-1 gap-2 justify-items-center mt-1">
            <input
              type="text"
              disabled
              value={date ? date.toLocaleDateString() : "Pick a day."}
              class="input input-bordered w-full max-w-xs"
            />

            <select name="slot" class="select select-bordered w-full max-w-xs">
              
              {
                slots.map(slot =><option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text" name="name"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email" name="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs"
            />
             <input
              type="text" name="phone"
              placeholder="Your contact number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary max-w-xs"
            />
          </form>

          {/* <script>
  const dateInput = document.getElementById('dateInput');
  const currentDate = new Date().toLocaleDateString();
  dateInput.value = currentDate;
</script> */}

          <div class="modal-action">
            <label for="booking-modal" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
