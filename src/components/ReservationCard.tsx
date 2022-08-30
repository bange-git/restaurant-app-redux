import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveReservation } from '../features/ReservationSlice';
import { addCustomer } from '../features/CustomerSlice';
import { v4 as uuid } from 'uuid';

interface ReservationType {
  name:string;
  index:number;
}


export default function ReservationCard({name, index}:ReservationType) {
  
  const dispatch = useDispatch();

  return (
      <div className="reservation-card-container" onClick={() => {
        dispatch(RemoveReservation(index));
        dispatch(addCustomer({
          id:uuid(),
          name,
          food:[]
        }))
      }
       
      } >{name}</div>
    )
} 
  


