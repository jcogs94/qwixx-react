import { useState } from 'react'
import './Row.css'

function Row ({ color, nums }) {
  return <>
    <div className={'button-row ' + color}>
        {nums.map( (value) =>
            <button key={color + ' ' + value}
                className={value === 'L' ? 'lock' : null}
                >{value}</button>
        )}
    </div>
  </>
}

export default Row
