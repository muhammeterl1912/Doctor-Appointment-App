import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { useState } from "react";
import { appointmentData } from "../helpers/data";

const Home = () => {
  const [appointment,setAppointment] = useState(appointmentData)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">EROL HOSPITAL</h1>
      <Doctors appointment ={appointment} setAppointment={setAppointment}/>
      <AppointmentList />
    </main>
  );
};

export default Home;
