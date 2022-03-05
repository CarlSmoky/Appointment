import { BiTrash } from "react-icons/bi"
export const AppoinmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={() => onDeleteAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-400/60 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-zinc-700/70">{appointment.petName}</span>
          <span className="flex-grow text-right">{appointment.aptDate}</span>
        </div>
        <div><b className="font-bold text-zinc-700/70">Owner:</b> {appointment.ownerName}</div>
        <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
    </li>
  )
}
