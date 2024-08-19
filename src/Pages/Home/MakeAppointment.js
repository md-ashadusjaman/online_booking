import React from "react";
import doctor from "../../assets/doctor.png";
import appointment from '../../assets/appointment.png';
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{
      background:`url(${appointment})`
    }}
    className="flex justify-center items-center">
      <div className="flex-1 hidden lg:block">
        <img className='mt-[-150px]'src={doctor} alt="" />
      </div>

      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl">Make an Appointment</h2>
        <p>
          Voluptate culpa nisi nostrud reprehenderit culpa mollit nisi non amet
          nisi aute non. Exercitation ex fugiat duis sit aliqua proident commodo
          magna aliqua est aliqua aliqua. Exercitation voluptate id non aliquip
          esse sunt quis aliquip et. Anim aute nulla incididunt non in veniam
          non. Aliqua tempor in nulla occaecat. Deserunt sint velit sint veniam
          eiusmod et reprehenderit. Excepteur sit cillum aute sit.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
