import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Agent Document Viewer</h1>
      <div className="card">
        <div>
          <input type="text" name="" id="" />
        </div>
        <button onClick={() => console.log('test')}>
          get agent data
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
