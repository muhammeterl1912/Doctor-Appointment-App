import React, { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helpers/data";

const Home = () => {
  const [appointment, setAppointment] = useState(appointmentData);
  
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">EROL HOSPITAL</h1>
      <Doctors appointment={appointment} setAppointment={setAppointment} />
      <AppointmentList appointment={appointment} setAppointment={setAppointment} />
    </main>
  );
};

export default Home;
