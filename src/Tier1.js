import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const [c1, c2, c3] = generateColors()
    this.state = {
      color: c1,
      childColor: c2,
      grandchildColor: c3
    }
  }

  generateColors = (count=3) => {
    const colors = [getRandomColor()]
    for (idx = 0; idx < count; idx++) {
      colors.push(getReducedColor(colors[colors.length - 1]))
    }
    return colors
  }

  handleClick = e => {
    const [c1, c2, c3] = generateColors()
    e.stopPropagation()
    this.setState({
      color: c1,
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleChildClick = e => {
    const [c1, c2] = generateColors(2)
    e.stopPropagation()
    this.setState({
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleGrandchildClick = e => {
    const [c1] = generateColors(1)
    e.stopPropagation()
    this.setState({
      grandchildColor: c3
    })
  }


  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={() => {this.setState({color: "#000"})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={"#0F0"} />
        <Tier2 color={"#0FF"} />
      </div>
    )
  }
}
