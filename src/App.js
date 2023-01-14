import { useEffect, useState } from "react";
import "./App.css";
import BookingForm from "./BookingForm/BookingForm";
import BookingSeats from "./Seats/BookingSeats";
import { totalSeats } from "./Seats/TotalSeats";

function App() {
  const [showHall, setShowHall] = useState(false);
  const [seat, setSeat] = useState(
    JSON.parse(localStorage.getItem("totalSeats"))
  );
  const [availableSeat, setAvailableSeat] = useState(
    localStorage.getItem("availableSeats")
  );
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    localStorage.setItem("totalSeats", JSON.stringify(totalSeats));
    localStorage.setItem("availableSeats", 80);
    // console.log(localStorage.getItem("availableSeats"));
    setSeat((seat) => (!seat ? totalSeats : seat));
    setAvailableSeat((el) => (!el ? 80 : el));
  }, []);

  return (
    <div className="App">
      {!showHall && (
        <BookingForm
          setShowHall={setShowHall}
          setSeat={setSeat}
          seat={seat}
          setAvailableSeat={setAvailableSeat}
          availableSeat={availableSeat}
          name={setUsername}
        />
      )}
      {showHall && (
        <BookingSeats
          setShowHall={setShowHall}
          arr={seat}
          size={7}
          name={username}
        />
      )}
      <h1>Available Seat : {availableSeat}</h1>
    </div>
  );
}

export default App;
