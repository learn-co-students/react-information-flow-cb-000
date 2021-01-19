import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  changeMyColor = (e) => {
    e.stopPropagation()
    const newColor = getRandomColor()
    this.setState({ color: newColor, childColor: getReducedColor(newColor)})
  }

  changeMyChildren = (e) => {
    e.stopPropagation()
    this.setState({ childColor: getRandomColor()})
  }

  render() {
    return (
      <div onClick={this.changeMyColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={getReducedColor(this.state.childColor)} changeMyColor={this.changeMyChildren} />
        <Tier2 color={this.state.childColor} childColor={getReducedColor(this.state.childColor)} changeMyColor={this.changeMyChildren} />
      </div>
    )
  }
}
