import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

    state = {
      color: this.props.color,
      childColor: this.props.childColor
    }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.color, childColor: nextProps.childColor })
  }

  changeMyChildren = (e) => {
    e.stopPropagation()
    this.setState({ childColor: getRandomColor()})
  }

  render() {
    return (
      <div onClick={this.props.changeMyColor} className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} changeMyColor={this.changeMyChildren} /> 
        <Tier3 color={this.state.childColor} changeMyColor={this.changeMyChildren} />
      </div>
    )
  }
}
