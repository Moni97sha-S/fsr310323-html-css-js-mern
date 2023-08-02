import React from "react";

class Product extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            counter: 1,
            // obj1: { x:100, y:200},
            name: "Monisha"
        }
    }
    render(){
        return (
            <div>
                <h1>Counter - {this.state.counter}</h1>
                {/* <h1>Counter X - {this.state.obj1.x}</h1>
                <h1>Counter Y - {this.state.obj1.y}</h1> */}
                <button
                    onClick = {() => {
                        this.setState({counter: this.state.counter + 1});
                        // this.setState({counter: this.state.obj1.x + 1});
                        this.setState({name: "Moni"});
                    }}
                >
                Add by 1
                </button>
                <br />
                <br />
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    onChange={(e) => {
                        this.setState({ name:e.target.value });
                    }} 
                />
                <h1>Name - {this.state.name}</h1>
                <img src={this.props.u} />
                <h1>{this.props.t}</h1>
                <h1>{this.props.d}</h1>
            </div>
        );
    }
}
export default Product;
