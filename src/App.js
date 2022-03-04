import { useState, useEffect, useCallback} from 'react';
import { BiCalendar} from "react-icons/bi"
import AddAppointments from "./components/AddAppointments";
import { AppoinmentInfo } from "./components/AppointmentInfo";
import { Search } from "./components/Search";



function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] =useState("");
  let [sortBy,setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("desc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLocaleLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  
  
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
      <AddAppointments
      onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
      lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id): max, 0)}
      />
      <Search
        query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={myOrder => setOrderBy(myOrder)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
      />
      <ul className="divide-y divide_gray-200">
        {filteredAppointments.map(appointment => (
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
