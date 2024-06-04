import { useState } from 'react'
import Row from './Row/Row.jsx'
import './ButtonRows.css'

function ButtonRows () {
  const ascendingNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'L']
  const descendingNums = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 'L']

  return <>
    <div id="button-rows">
        <Row color={'red'} nums={ascendingNums} />
        <Row color={'yellow'} nums={ascendingNums} />
        <Row color={'green'} nums={descendingNums} />
        <Row color={'blue'} nums={descendingNums} />
    </div>
  </>
}

export default ButtonRows
