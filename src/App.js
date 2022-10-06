import { useState } from 'react'
import './App.css'
import Display from './components/display'
import Form from './components/form'
import Header from './components/header'

function App() {
  const [result, setResult] = useState(0)

  const updateResult = r => {
    setResult(r)
  }

  return (
    <div className="App">
      <Header title="Cálculo do IMC" />
      <div className="Body">
        <Form handleResult={updateResult} />
        <Display imc={result} />
      </div>
    </div>
  )
}

export default App
