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
  
  changeColor = () => {
    const newColor = getRandomColor();
    
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }
  
  handleChildClick = (event) => {
    event.stopPropagation();
    
    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.changeColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleChildClick={this.handleChildClick} />
        <Tier2 color={this.state.childColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}
