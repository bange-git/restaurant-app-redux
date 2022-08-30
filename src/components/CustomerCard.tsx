import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/CustomerSlice';

interface CustomerType {
  id: string;
  name: string;
  food: string[];
}
const CustomerCard = ({id, name, food}: CustomerType) => {

  const [customerFood, setcustomerFood] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="customer-food-card-container">
    <p>{name}</p>
    <div className="customer-foods-container">
      <div className="customer-food">
        {food.map((food, index) => <p>{food}</p> )}
      </div>
      <div className="customer-food-input-container">
        <input type="text" onChange={(e) => setcustomerFood(e.target.value)} value={customerFood} />
        <button onClick={() => {
          if(!customerFood) return;
          dispatch(addFoodToCustomer({
          id,
          food:customerFood
        }));
        setcustomerFood('');
        }}>Add</button>
      </div>
    </div>
  </div>
  )
}

export default CustomerCard