import React, { Component } from 'react'
import Loading from '../assest/Hourglass.gif'

const Spinner =()=> {
  // render() {
    return (
      <div className='text-center'>
        <img className='p-3' src={Loading} alt="" />
      </div>
    )
  }
// }

export default Spinner