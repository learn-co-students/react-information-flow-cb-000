import {getRandomColor, getReducedColor} from './randomColorGenerator.js'

export function updateChildColors(event) {
  event.stopPropagation();
  
  this.setState({
    childColor: getRandomColor()
  })
}