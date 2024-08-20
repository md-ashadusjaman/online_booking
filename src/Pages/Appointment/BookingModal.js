import React from "react";

const BookingModal = ({ treatment }) => {
    const {name, slots} = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <h3 class="text-lg font-bold text-primary">Booking for: {name}</h3>
          <p class="py-4">This modal works with a hidden checkbox!</p>
          <div class="modal-action">
            <label for="booking-modal" class="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
