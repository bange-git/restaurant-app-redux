
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reservation {
  value: string[]
}

const initialState: Reservation = {
  value: []
}


const reservationSlice = createSlice({
name: 'reservations',
initialState,
reducers: {
  AddReservation: (state, action: PayloadAction<string>) => {
    state.value.push(action.payload)
  },
  RemoveReservation: (state, action: PayloadAction<number>) => {
    state.value.splice(action.payload, 1);
  }
}
})

export const { AddReservation, RemoveReservation } =  reservationSlice.actions;
export default reservationSlice.reducer;