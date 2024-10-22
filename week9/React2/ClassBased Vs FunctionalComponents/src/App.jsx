import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react'

function App() {
  return (
    <div>
      <div>
        This is a Class Based Component
        <ClassCounter />
      </div>
      <br />
      <div>
        This is a Functional Based Component
        <FunctionalCounter />
      </div>
    </div>
  )
}

// Function Based Approch
const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};


// Class Based Approch
class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}


export default App
