import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../Reducers/counter';

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div>
            <div>{count}</div>
            <button className="btn" onClick={() => dispatch(increment())}>+</button>
            <button className="btn" onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;