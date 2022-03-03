import { BiArchive } from "react-icons/bi"
import { Search } from "./components/Search";


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-300 align-top" /> My Appointment</h1>
        <Search />
    </div>
  );
}

export default App;
