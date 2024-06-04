import { useState } from 'react'
import scoreRef from '../../../../data/scoreRef.js'
import RefCard from './RefCard/RefCard.jsx'
import './ScoreRef.css'

function ScoreRef () {
  return <>
    <div id="score-ref">
        {scoreRef.map( (ref, index) => (
            <RefCard key={index} data={ref} />
        ))}
    </div>
  </>
}

export default ScoreRef
