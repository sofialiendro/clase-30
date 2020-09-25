const cards = document.querySelectorAll('.card');
const botonesFiltro = document.querySelectorAll('.filtro-boton');
const filtroSexo = document.querySelectorAll("input[type='radio']");
const filtroBusqueda = document.querySelector('#filtro-nombre');
const filtroColor = document.querySelectorAll("input[type='checkbox']");


filtroBusqueda.oninput = () => {
  for (let card of cards) {
    const busquedaUsuarioEnMinusculas = filtroBusqueda.value.toLowerCase();
    if (card.dataset.nombre.includes(busquedaUsuarioEnMinusculas)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  }
};


const filtrarPorColor = () => {
 for (let checkbox of filtroColor) {
   checkbox.oninput = () => {
     for (let card of cards) {
       card.classList.add('hidden');
       for (let filtro2 of filtroColor) {
         if (filtro2.checked) {
           if (filtro2.value === card.dataset.color) {
             card.classList.remove('hidden');
           }
           
            if (filtro2.value === "todos") {
                card.classList.remove('hidden');
            }
                
         }
       }
     }
   };
 }
}

filtrarPorColor()



// for (let checkbox of filtroColor) {
//     checkbox.oninput = () => {
//         for (let card of cards) {
//             card.classList.add('hidden');
//             for (let filtro2 of filtroColor) {
//                 if (filtro2.checked) {
//                     if (filtro2.value === "todos") {
//                     card.classList.remove('hidden');
//                     }
//                 }
//             }
//         }
//     };
// }
