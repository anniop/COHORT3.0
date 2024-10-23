import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <ErrorBoundary>
      <Card1 />
    </ErrorBoundary>
    <ErrorBoundary>
      <Card2 />
    </ErrorBoundary>

  </div>
}


function Card1() {


  return <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}>
    Jay Ganesh
  </div>
}

function Card2() {
  return <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}>
    Har Har Mahadev
  </div>
}


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}>Something Went Wrong</div>
    }

    return this.props.children;
  }
}

export default App
