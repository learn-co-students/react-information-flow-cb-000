import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import { updateChildColors } from './updateColors.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const newColor = nextProps.color;
    
    this.setState({
      childColor: getReducedColor(newColor)
    })
  }

  render() {
    return (
      <div className="tier2" onClick={this.props.handleChildClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={updateChildColors.bind(this)} />
        <Tier3 color={this.state.childColor} handleChildClick={updateChildColors.bind(this)} />
      </div>
    )
  }
}
