import React from "react";

class LifecycleNextHalf extends React.Component {
  //There are 6 Methods in lifecycle of class based components.
  // List of them 
  // (1)
  constructor(props) {
    super(props);
    console.log("constructor called");

    this.state = {
      name: "harshit",
      count: 1
    };
  }

  // (2)
  componentDidMount() {
    console.log("ComponentDidMount called");
    setTimeout(() => {
      this.setState({ name: "CV" }); // update phase & repeated calls componentDidUpdate()
    }, 2000);
  }

  //(3)
  // This is nothing but waste just we need to create for sake
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  //(4)
  // Important one which stops from automatic calls while rerendering/updating(key-ins) & asks for permission
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === "Akhila" || nextState.name === "Moni") {
      return true;
    } else {
      alert("Not update since name is not  or Moni");
      return false;
    }
  }
   
  // (5)
  // This we will see while routing class on 31st July/1st Aug 
  componentWillUnmount() {}

  // (6)
  render() {
    console.log("render() called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add By 1
        </button>
      </div>
    );
  }
}

export default LifecycleNextHalf;