import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
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
  
  handleChildClick = (event) => {
    event.stopPropagation();
    
    this.setState({
      childColor: getRandomColor()
    });
  }

  render() {
    return (
      <div className="tier2" onClick={this.props.handleChildClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick} />
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}
