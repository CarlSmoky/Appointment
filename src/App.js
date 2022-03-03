import { BiCalendar} from "react-icons/bi"
import AddAppointments from "./components/AddAppointments";
import { AppoinmentInfo } from "./components/AppointmentInfo";
import { Search } from "./components/Search";
import appointmentList from "./data.json";


function App() {
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
          />
        ))
        }
      </ul>
    </div>
  );
}

export default App;
