function validate() {
  const cardNumber = document.getElementById("CardNumber").value // almacena # tarjeta

  if (cardNumber === ""){
    alert("CAMPO VACIO!, Ingresa tu número de tarjeta.") // Mostrar mensaje de error en div#resultado 
  }
  else {
    const valid = isValid(cardNumber) // Mostrar éxito en div#resultado
  }
}


function isValid(creditCardNumber){
  //Define las variables 
  let arreglo=Array.from(creditCardNumber)
    console.log(arreglo)

  let invertir=arreglo.reverse()
    console.log(invertir)

  let añadirDigitos = 0
  let Par = 0
  let impar = 0
    
    // Recorrido de la matriz inversa 
    for (let i=0; i<invertir.length; i++){ 
      let posicionDeNúmeros = Number(invertir[i])
       console.log(posicionDeNúmeros)
    
      
      if ((i+1) % 2 === 0) { //Duplicar los números que están en las posiciones pares
        posicionDeNúmeros = Number(invertir[i]*2)
         console.log(posicionDeNúmeros)

        //Sumar los dígitos de los números mayores o iguales a diez
      if (posicionDeNúmeros >= 10){
        añadirDigitos = posicionDeNúmeros - 9
        Par += añadirDigitos
          console.log(añadirDigitos + " Estoy sumando los numeros de 2 digitos")

      //Números en posiciones impares
      } else {
        Par += posicionDeNúmeros

      }  
      } else { 
        posicionDeNúmeros = Number(arreglo[i])
        impar += posicionDeNúmeros
      }
    }

    //Variable con la suma de los números en posiciones pares e impares
    let Total = Par + impar
    console.log(Total)

    //Si el total dividido entre diez tiene residuo 0, indicar si es VÁLIDA o INVÁLIDA
    if (Total % 10 === 0) {
      alert("tarjeta valida")
      return true
      
      } else {
      alert("tarjeta NO valida")
      return false 
      
      } 
}

    

