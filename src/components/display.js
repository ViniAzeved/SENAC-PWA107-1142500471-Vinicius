const Display = props => {
    const imc = parseFloat(props.imc)
    let displayOut = ''
    let imcClass = ''
    /* Menor que 18,5 - Abaixo do peso; 
       Maior ou igual 18,5 e menor que 25 - Peso normal; 
       Maior ou igual 25,0 e menor que 30 - Sobrepeso; 
       Maior ou Igual à 30 - Obesidade.
    */
  
    if (imc !== 0) {
      displayOut = `Valor do IMC é ${imc.toFixed(2)}`
      if (imc < 18.5) {
        imcClass = 'Abaixo do peso'
      } else {
        if (imc > 18.5 && imc <= 24.9) {
          imcClass = 'Peso ideal'
        } 
        else if(imc >= 25.0 && imc <= 29.9){
            imcClass = 'Sobrepeso'
          } 
        else if(imc >= 30.0 && imc <= 34.9){
            imcClass = 'Obesidade'
          }
        else if(imc >= 35.0 && imc <= 39.9){
            imcClass = 'Obesidade severa'
          }
        else if(imc >= 40.0){
            imcClass = 'Obesidade mórbida'
          }
      }
    }
    return (
      <div>
        <h2>{imcClass} </h2>
        <p> {displayOut} </p>
      </div>
    )
  }
  
  export default Display