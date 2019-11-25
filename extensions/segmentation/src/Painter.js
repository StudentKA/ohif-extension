import React, { Component } from 'react';

class Painter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      brush: undefined,
      figures: undefined,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <p style={{color: "red"}}>
          Here shall be icon?
        </p>
      </div>
    );
  }

}

export default Painter;