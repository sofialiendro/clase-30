// const cards = document.querySelectorAll('.card');
// const botonesFiltro = document.querySelectorAll('.filtro-boton');
// const filtroSexo = document.querySelectorAll("input[type='radio']");
// const filtroBusqueda = document.querySelector('#filtro-nombre');
// const filtroColor = document.querySelectorAll("input[type='checkbox']");


// filtroBusqueda.oninput = () => {
//   for (let card of cards) {
//     const busquedaUsuarioEnMinusculas = filtroBusqueda.value.toLowerCase();
//     if (card.dataset.nombre.includes(busquedaUsuarioEnMinusculas)) {
//       card.classList.remove('hidden');
//     } else {
//       card.classList.add('hidden');
//     }
//   }
// };


// const filtrarPorColor = () => {
//  for (let checkbox of filtroColor) {
//    checkbox.oninput = () => {
//      for (let card of cards) {
//        card.classList.add('hidden');
//        for (let filtro2 of filtroColor) {
//          if (filtro2.checked) {
//            if (filtro2.value === card.dataset.color) {
//              card.classList.remove('hidden');
//            }
           
//             if (filtro2.value === "todos") {
//                 card.classList.remove('hidden');
//             }
                
//          }
//        }
//      }
//    };
//  }
// }

// filtrarPorColor()


const cards = document.querySelectorAll('.card');
const botonesFiltro = document.querySelectorAll('.filtro-boton');
const filtroSexo = document.querySelectorAll("input[type='radio']");
const filtroBusqueda = document.querySelector('#filtro-nombre');
const filtroColor = document.querySelectorAll("input[type='checkbox']");




// pasaFiltros -> param card -> return true o false 
// revisar si hay algo escrito en input // true / false
// CUMPLIDA revisar si hay algo chequeado en los checkbox // true / false
// revisar si hay algo chequeado en los radio // true / false 
// ver si el nombre escrit en el input coincide con el data-nombre de la tarjeta // true / false
// ver si alguno de los checkbox chequeados coincide con los colores de la tarjeta // true / false
// ver si el radio chequeado coincide con el sexo de la tarjeta // true / false 


const pasaFiltros = (card) => {

  // me fijo si hay algo escrito en el input, 
  // si hay algo escrito en el input me fijo si lo escrito coincide con la tarjeta
  // si coincide con lo escrito en la trajeta retorno true 
  // si no coincide, retorno false 

  // if (hayAlgoEscritoEnElInput()) {
  //   if (compararInputConTarjeta(card)) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }
  // else {
  //   return true
  // }

  // me fijo si hay algo chequeado en los checkbox
  // si lo hay, me fijo que checkbox esta chequeado
  // si los checkbox chequeados coinciden con el color de alguna tarjeta
  // retorno true, sino retorno false

  // if (hayAlgunCheckBoxChequeado()) {
  //   if (compararColorConTarjeta(card)) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }
  // else {
  //   return true
  // }


    // me fijo si hay algo chequeado en los radio
  // si lo hay, me fijo que radio esta chequeado
  // si el radio chequeado coinciden con el sexo de alguna tarjeta
  // retorno true, sino retorno false 

  if (hayAlgunRadioChequeado()) {
    if (compararSexoConTarjeta(card)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }

}

const compararSexoConTarjeta = (card) => {
  for (let radio of filtroSexo) {
    if (radio.checked) {
      if ((radio.value === card.dataset.sexo) || (radio.value === "i")) {
        return true
      }
    }
  }
  return false
}

const compararColorConTarjeta = (card) => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.color || checkbox.value === "todos") {
        return true
      }
    }
  }
  return false
}

const ocultarTarjeta = (card) => {
  return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
   return card.classList.remove("hidden")
}

const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      
      mostrarTarjeta(card)
    }
    else {
      ocultarTarjeta(card)
    }
  }
}


const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}


const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}

const hayAlgunRadioChequeado = () => {
  for (let radio of filtroSexo) {
    if (radio.checked) {
      return true
    }
  }
  return false
}


const hayAlgoEscritoEnElInput = () => {
  if (filtroBusqueda.value) {
    return true 
  }
  else {
    return false
  }
}

filtroBusqueda.oninput = () => {
  filtrarTarjetas()
}


for (let checkbox of filtroColor) {
  checkbox.oninput = () => {
    filtrarTarjetas()
  }
}

for (let radio of filtroSexo) {
  radio.oninput = () => {
    filtrarTarjetas()
  }
}