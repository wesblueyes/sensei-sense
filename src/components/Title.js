import React from 'react'
import { Link } from 'react-router'
import '../styles/instructions.sass'

export default () => {
  return <div className='instructions'>
    <h2>How to Play</h2>

    <p>There is a hidden row with four color balls. The row may have one of each or up to four of the same color balls.</p>
    <p>Select the color balls you think may be in the hidden row and pull them into the cups. When you have a row that matches the hidden row, you win!</p>

    <button><Link to='/game'>PLAY!</Link></button>
  </div>
}
