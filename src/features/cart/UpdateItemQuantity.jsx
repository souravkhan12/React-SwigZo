import React from 'react'
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({pizzaId}) {
    const dispatch = useDispatch();
    const quantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity