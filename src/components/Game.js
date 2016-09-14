import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import Cup from './Cup'
import Well from './Well'

const CUPS = [0, 1, 2, 3]

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      id: 0,
      moves: [],
      currentMove: []
    }
  }

  componentDidMount () {
    window.fetch(`https://sensei-sense-api.herokuapp.com/games?access_token=whitney`, {method: 'POST'})
      .then((resp) => resp.json())
      .then(json => this.setState({
        id: json.id,
        moves: json.moves
      }))
      .catch(err => console.log(err))
    }

    _getColor = (color, index) => {
      this.state.currentMove[index] = color
      this.setState({
        currentMove: this.state.currentMove
      })
    }
    _handleClick = () => {
      window.fetchwindow.fetch(`https://sensei-sense-api.herokuapp.com/games/move?access_token=whitney&game_id=${this.state.id}`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
          guess: this.state.currentMove
        })
      })

      .then(resp => resp.json())
      .then(json => this.setState({ moves: json.moves, currentMove: []}, () => {
        let last = this.state.moves.length - 1
        const matches = this.state.moves[last].result.filter((result) => result === 'exact_match')
        if (matches.length === 4) {
          window.alert('You Win')
        }
      }))
    }

  render () {
    return <div className='game'>
      <div className='previous'>
        {this.state.moves.map((turn, i) => {
          return <div className='turn'>
          <Cup color={turn.guess[0]} />
          <Cup color={turn.guess[1]} />
          <Cup color={turn.guess[2]} />
          <Cup color={turn.guess[3]} />
          <div className='pegs'>
            {turn.result.map((result, k) => {
              return <div className={result} key={k} />
            })}
          </div>
        </div>
      })}
      </div>
      <div className='current turn'>
      (CUPS.map((cup, i) => <Cup droppable index={i} passColor={this._getColor} key={i} color={this.state.currentMove[i]} />)}
      <div className='go'>
      <button onClick={this._handleClick}>Go</button>
        <Well color='green' />
        <Well color='aqua' />
        <Well color='fuschia' />
        <Well color='blueberry' />
        <Well color='fire' />
        <Well color='coal' />
        </div>
      </div>
    }
  )
// TODO: Handling touch events (for mobile) is not implemented.
// React doesn't have `touchenter` so this will likely require some refactoring...
export default Game
