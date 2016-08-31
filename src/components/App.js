import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return <div>
      <h1>Sensei Sense</h1>
      {this.props.children}
    </div>
  }
}

export default App
