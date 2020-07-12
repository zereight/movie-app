import React from "react";

class App extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    count : 0
  }

  add = () => {
    // this.state.count = 1; // React 는 render function을 refresh하지 않기 떄문에 직접수정하면 안된다.
    this.setState( 
      (current) => { return {count: current.count+1} }
    );
    console.log("Add");
  };
  minus = () => {
    console.log("Minus");
    this.setState(
      (current) => { return {count: current.count-1} }
    );
};

  render(){
    return (
    <div>
      <h1>I'm a Class. {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
