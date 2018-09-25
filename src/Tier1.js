import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const [c1, c2, c3] = this.generateColors()
    this.state = {
      color: c1,
      childColor: c2,
      grandchildColor: c3
    }
  }

  generateColors = (count=3) => {
    const colors = [getRandomColor()]
    for (let idx = 0; idx < count; idx++) {
      colors.push(getReducedColor(colors[colors.length - 1]))
    }
    return colors
  }

  handleClick = e => {
    const [c1, c2, c3] = this.generateColors()
    e.stopPropagation()
    this.setState({
      color: c1,
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleChildClick = e => {
    const [c1, c2] = this.generateColors(2)
    e.stopPropagation()
    this.setState({
      childColor: c1,
      grandchildColor: c2
    })
  }

  handleGrandchildClick = e => {
    const [c1] = this.generateColors(1)
    e.stopPropagation()
    this.setState({
      grandchildColor: c1
    })
  }


  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick}
        color={this.state.childColor} childColor={this.state.grandchildColor}
        />
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick}
        color={this.state.childColor} childColor={this.state.grandchildColor}
        />
      </div>
    )
  }
}
