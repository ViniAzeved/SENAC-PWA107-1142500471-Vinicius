import { useState } from 'react'

const Form = props => {
  const [imc, setimc] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    props.handleResult(imc)
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
       
        <label>IMC: </label>
        <input
          type="float"
          required
          value={imc}
          onChange={e => {
            setimc(e.target.value)
          }}
        />
        <button>Calcular</button>
      </form>
    </div>
  )
}

export default Form