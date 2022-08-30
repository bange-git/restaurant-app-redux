import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import { AddReservation } from "./features/ReservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {

  const [reservationInput, setReservationInput] = useState<string>('');
  const reservations = useSelector((state:RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value );

  const dispatch = useDispatch();

  const addReservationHandler = () => {
    if(!reservationInput) return ;

    dispatch(AddReservation(reservationInput));
    setReservationInput('');
  }


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
           {
             reservations.map((name, index) => {
             return <ReservationCard name={name} index={index}/>
            })
           }
            
            </div>
          </div>
          <div className="reservation-input-container">
            <input type='text' onChange={(e) => setReservationInput(e.target.value) } value={reservationInput} />
            <button onClick = {addReservationHandler}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        
        {customers.map((customer) =><CustomerCard id={customer.id} name={customer.name} food={customer.food} /> )}

        </div>
      </div>
    </div>
  );
}

export default App;