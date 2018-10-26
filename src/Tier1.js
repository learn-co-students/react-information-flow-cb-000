import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor() {
    super()
    const [c1, c2, c3] = this.generateColors()
    this.state = {
      color: c1,
      childColor: c2,
      grandChildColor: c3
    }
  }

  generateColors = (count=3) => {
    const colors = [getRandomColor()]

    for (let idx = 1; idx < count; idx++) {
      colors.push(getReducedColor(colors[colors.length - 1]))
    }
    return colors
  }

  handleClick = () => {
    const [c1, c2, c3] = this.generateColors()
    this.setState({
      color: c1,
      childColor: c2,
      grandChildColor: c3
    })

  }

  handleChildClick = (e) => {
    e.stopPropagation()
    const [c2, c3] = this.generateColors(2)
    this.setState({
      childColor: c2,
      grandChildColor: c3
    })


  }

  handleGrandChildClick = (e) => {
    e.stopPropagation()
    const [c3] = this.generateColors(1)
    this.setState({
      grandChildColor: c3
    })

  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} handleClick={e => this.handleChildClick(e)} handleChildClick={e => this.handleGrandChildClick(e)} />
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} handleClick={e => this.handleChildClick(e)} handleChildClick={e => this.handleGrandChildClick(e)} />
      </div>
    )
  }
}
