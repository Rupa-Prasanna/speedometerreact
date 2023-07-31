import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  applyBrake = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading"> Speed is {count}mph</h1>
        <p className="para"> Min Limit is 0mph, Max Limit is 200mph</p>
        <button className="button1" onClick={this.accelerate} type="button">
          Accelerate
        </button>
        <button className="button2" onClick={this.applyBrake} type="button">
          Apply Brake
        </button>
      </div>
    )
  }
}
export default Speedometer
