import React, { Component } from "react";

class Lifecycle extends Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   React 17
  static getDerivedStateFromProps = (props, state) => {
    console.log(state);
    return state.count;
  };

  //   useEffect(() => {}, [])

  // called only on intial rendering
  componentDidMount = () => {
    //api call
    console.log("component did mount");
  };

  //   optimisation
  shouldComponentUpdate = (nextProps, nextState) => {
    // if() {}
    console.log("should component update");
    return true;
  };

  //    React 17
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "snapshot";
  };

  //   useEffect(() => {}, [count])
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(prevState + ":" + this.state.count + " " + snapshot);
  };

  //   useEffect(() => { return () => {} )}, [count])
  componentWillUnmount = () => {};

  render() {
    console.log("render");
    return (
      <p>
        {this.state.count}
        <button onClick={() => this.setState({ count: 1 })}>Update</button>
      </p>
    );
  }
}

export default Lifecycle;
