import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="Clock">
        The time is now {this.state.date.toLocaleTimeString()}.
      </div>
    );
  }
}
export default Clock;