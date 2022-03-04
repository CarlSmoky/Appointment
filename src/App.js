import { useState, useEffect, useCallback} from 'react';
import { BiCalendar} from "react-icons/bi"
import AddAppointments from "./components/AddAppointments";
import { AppoinmentInfo } from "./components/AppointmentInfo";
import { Search } from "./components/Search";



function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

useEffect(() => {
  fetchData()
}, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl" mb-3>
        <BiCalendar className="inline-block text-red-300 align-top" /> My Appointment</h1>
      <AddAppointments />
      <Search />
      <ul className="divide-y divide_gray-200">
        {appointmentList.map(appointment => (
          <AppoinmentInfo 
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={
              appointmentId =>
                setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))
            }
          />
        ))
        }
      </ul>
    </div>
  );
}

export default App;
