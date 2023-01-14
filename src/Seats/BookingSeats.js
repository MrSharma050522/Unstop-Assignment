import { Fragment } from "react";
import classes from "./BookingSeats.module.css";

const BookingSeats = (props) => {
  const arr = props.arr;
  const size = props.size;
  const newArr = arr
    ? arr.map((row, i) => {
        return (
          <Fragment key={i}>
            {row.map((el, j) => {
              return (
                <div
                  className={classes.seats}
                  key={`${i},${j}`}
                  style={{
                    background: `${
                      el.isBooked
                        ? "radial-gradient(circle, #6f6fe1, #6462e5, #5954e9, #4e45ec, #4334ee, #4d39ee, #553fef, #5d44ef, #735fed, #8878e9, #9b90e4, #aea7de)"
                        : ""
                    }`,
                  }}
                >
                  {el.seat}
                </div>
              );
            })}
          </Fragment>
        );
      })
    : null;

  const backHandler = () => {
    props.setShowHall(false);
  };

  return (
    <Fragment>
      <h1 className={classes.heading}>Hello {props.name}!</h1>
      <button className={classes.button} onClick={backHandler}>
        Go Back
      </button>
      <div style={{ boxSizing: "border-box" }}>
        <div
          className={classes["grid-container"]}
          style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
        >
          {newArr}
        </div>
      </div>
    </Fragment>
  );
};

export default BookingSeats;
