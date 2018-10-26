import React, { Component } from 'react'
import {  getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: this.props.childColor
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      color: nextProps.color,
      childColor: nextProps.childColor
    })
  }


  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={(e) => this.props.handleClick(e)} className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} handleClick={(e) => this.props.handleChildClick(e)}  />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}
