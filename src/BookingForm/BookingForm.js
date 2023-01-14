import { Fragment, useRef, useState } from "react";
import classes from "./BookingForm.module.css";
import { seatBooking } from "../Seats/TotalSeats";
import ErrorModal from "../Modal/ErrorModal";

const BookingForm = (props) => {
  const nameRef = useRef();
  const numberOfSeats = useRef();
  const [displayModal, setDisplayModal] = useState("none");

  const bookingHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const noOfSeats = Number(numberOfSeats.current.value);

    if (+noOfSeats > 7) {
      setDisplayModal("block");
      return;
    }

    if (props.availableSeat < noOfSeats) {
      alert("Seats are not available");
      return;
    }
    if (!name) {
      props.name("Guest");
    }
    // console.log(name, noOfSeats);
    const newArr = seatBooking(props.seat, noOfSeats);

    // console.log(newArr);
    localStorage.setItem("totalSeats", JSON.stringify(newArr));
    props.setSeat(newArr);
    props.setAvailableSeat((num) => num - noOfSeats);
    localStorage.setItem("availableSeats", props.availableSeat - noOfSeats);

    props.name(name);
    props.setShowHall(true);
  };

  const closeModal = () => {
    setDisplayModal("none");
  };

  return (
    <Fragment>
      <ErrorModal display={displayModal} close={closeModal} />
      <div className={classes.div}>
        <form onSubmit={bookingHandler}>
          <h1>Book From Here</h1>
          <label htmlFor="name">Passenger Name</label>
          <br />
          <input type="text" ref={nameRef} />
          <br />
          <label htmlFor="seat-number">Number Of Seats</label>
          <br />
          <input type="number" ref={numberOfSeats} required />
          <br />
          <button className={classes.button} type="submit">
            Book
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default BookingForm;
