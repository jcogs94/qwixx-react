import { useState } from 'react'
import Row from './Row/Row.jsx'
import ascendingNums from '../../../data/ascendingNums.js'
import descendingNums from '../../../data/descendingNums.js'
import './ButtonRows.css'

function ButtonRows () {
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
