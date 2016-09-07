import React from 'react'

export default () => {
  return <div className='game'>
    <div className='previous'>
      <div className='turn'>
        <div className='cup' />
        <div className='cup' />
        <div className='cup' />
        <div className='cup' />
        <div className='pegs' />
      </div>
      <div className='turn'>
        <div className='cup' />
        <div className='cup' />
        <div className='cup' />
        <div className='cup' />
        <div className='pegs' />
      </div>
    </div>
    <div className='current turn'>
      <div className='cup' />
      <div className='cup' />
      <div className='cup' />
      <div className='cup' />
      <div className='go'>
        <button>
          Go
        </button>
      </div>
    </div>
    <div className='color-well'>
      <div className='color green' />
      <div className='color aqua' />
      <div className='color fuschia' />
      <div className='color blueberry' />
      <div className='color fire' />
      <div className='color coal' />
    </div>
  </div>
}
