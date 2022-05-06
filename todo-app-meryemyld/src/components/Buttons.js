import React from 'react'
import { useDispatch } from 'react-redux'
import {increase, decrease} from "../store/actions/counter"
import 'bootstrap/dist/css/bootstrap.min.css';

const Buttons = () => {
  const dispach = useDispatch()
  return (
    <div>
        <button className='btn btn-success w-50' onClick={() => dispach(increase())}>increase</button>
        <button className='btn btn-danger w-50' onClick={() => dispach(decrease())}>decrease</button>
    </div>
  )
}

export default Buttons