import { useState } from 'react'
import './RefCard.css'

function RefCard ({ data }) {
  return <>
    <div className='ref-card'>
        <div>{data[0]}</div>
        <div>{data[1]}</div>
    </div>
  </>
}

export default RefCard
