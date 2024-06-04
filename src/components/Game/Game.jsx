import { useState } from 'react'
import ButtonRows from './ButtonRows/ButtonRows'
import ScoreRefAndPenaltyRow from './ScoreRefAndPenaltyRow/ScoreRefAndPenaltyRow.jsx'
import './Game.css'

function Game () {
  return <>
    <div id="game">
        <ButtonRows />
        <ScoreRefAndPenaltyRow />
    </div>
  </>
}

export default Game
