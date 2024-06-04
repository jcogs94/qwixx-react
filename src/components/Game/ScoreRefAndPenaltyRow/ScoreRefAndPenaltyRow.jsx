import { useState } from 'react'
import ScoreRef from './ScoreRef/ScoreRef'
import './ScoreRefAndPenaltyRow.css'

function ScoreRefAndPenaltyRow () {
  return <>
    <div id="score-ref-and-penalty-row">
        <ScoreRef />
    </div>
  </>
}

export default ScoreRefAndPenaltyRow
