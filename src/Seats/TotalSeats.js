// export const totalSeats = [
//   [
//     { seat: 1, isBooked: false },
//     { seat: 2, isBooked: false },
//     { seat: 3, isBooked: false },
//     { seat: 4, isBooked: false },
//     { seat: 5, isBooked: false },
//     { seat: 6, isBooked: false },
//     { seat: 7, isBooked: false },
//   ],
//   [
//     { seat: 8, isBooked: false },
//     { seat: 9, isBooked: false },
//     { seat: 10, isBooked: false },
//     { seat: 11, isBooked: false },
//     { seat: 12, isBooked: false },
//     { seat: 13, isBooked: false },
//     { seat: 14, isBooked: false },
//   ],
//   [
//     { seat: 15, isBooked: false },
//     { seat: 16, isBooked: false },
//     { seat: 17, isBooked: false },
//     { seat: 18, isBooked: false },
//     { seat: 19, isBooked: false },
//     { seat: 20, isBooked: false },
//     { seat: 21, isBooked: false },
//   ],
//   [
//     { seat: 22, isBooked: false },
//     { seat: 23, isBooked: false },
//     { seat: 24, isBooked: false },
//     { seat: 25, isBooked: false },
//     { seat: 26, isBooked: false },
//     { seat: 27, isBooked: false },
//     { seat: 28, isBooked: false },
//   ],
//   [
//     { seat: 29, isBooked: false },
//     { seat: 30, isBooked: false },
//     { seat: 31, isBooked: false },
//     { seat: 32, isBooked: false },
//     { seat: 33, isBooked: false },
//     { seat: 34, isBooked: false },
//     { seat: 35, isBooked: false },
//   ],
//   [
//     { seat: 36, isBooked: false },
//     { seat: 37, isBooked: false },
//     { seat: 38, isBooked: false },
//     { seat: 39, isBooked: false },
//     { seat: 40, isBooked: false },
//     { seat: 41, isBooked: false },
//     { seat: 42, isBooked: false },
//   ],
//   [
//     { seat: 43, isBooked: false },
//     { seat: 44, isBooked: false },
//     { seat: 45, isBooked: false },
//     { seat: 46, isBooked: false },
//     { seat: 47, isBooked: false },
//     { seat: 48, isBooked: false },
//     { seat: 49, isBooked: false },
//   ],
//   [
//     { seat: 50, isBooked: false },
//     { seat: 51, isBooked: false },
//     { seat: 52, isBooked: false },
//     { seat: 53, isBooked: false },
//     { seat: 54, isBooked: false },
//     { seat: 55, isBooked: false },
//     { seat: 56, isBooked: false },
//   ],
//   [
//     { seat: 57, isBooked: false },
//     { seat: 58, isBooked: false },
//     { seat: 59, isBooked: false },
//     { seat: 60, isBooked: false },
//     { seat: 61, isBooked: false },
//     { seat: 63, isBooked: false },
//     { seat: 63, isBooked: false },
//   ],
//   [
//     { seat: 64, isBooked: false },
//     { seat: 65, isBooked: false },
//     { seat: 66, isBooked: false },
//     { seat: 67, isBooked: false },
//     { seat: 68, isBooked: false },
//     { seat: 69, isBooked: false },
//     { seat: 70, isBooked: false },
//   ],
//   [
//     { seat: 71, isBooked: false },
//     { seat: 72, isBooked: false },
//     { seat: 73, isBooked: false },
//     { seat: 74, isBooked: false },
//     { seat: 75, isBooked: false },
//     { seat: 76, isBooked: false },
//     { seat: 77, isBooked: false },
//   ],
//   [
//     { seat: 78, isBooked: false },
//     { seat: 79, isBooked: false },
//     { seat: 80, isBooked: false },
//   ],
// ];

const seatsArrangements = (totalNoOfSeats, seatsInARow) => {
  let dummyArray = [];
  let initialValue = 1;
  let rowsFullyFilled = Math.trunc(totalNoOfSeats / seatsInARow);
  const remainingSeats = totalNoOfSeats % seatsInARow;
  while (rowsFullyFilled-- > 0) {
    dummyArray.push(new Array(seatsInARow));
  }
  if (remainingSeats > 0) {
    dummyArray.push(new Array(remainingSeats));
  }
  for (let i = 0; i < dummyArray.length; i++) {
    for (let j = 0; j < dummyArray[i].length; j++) {
      dummyArray[i][j] = { seat: initialValue++, isBooked: false };
    }
  }
  return dummyArray;
};

export const totalSeats = seatsArrangements(80, 7);

export const seatBooking = (seat, numSeats) => {
  let num = numSeats;
  let arr = [...seat];
  for (let i = 0; i < seat.length; i++) {
    const row = seat[i].length;
    for (let j = 0; j < row; j++) {
      if (!arr[i][j].isBooked && num > 0) {
        arr[i][j].isBooked = true;
        num--;
      }
    }
  }

  return arr;
};
