import React from 'react'
import Tier3 from './Tier3'


const Tier2 = (props) => (
  <div onClick={props.handleClick} className="tier2" style={{backgroundColor: props.color, color: props.color}}>
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
  </div>
)

export default Tier2
