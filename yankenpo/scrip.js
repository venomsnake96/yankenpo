const opcionJugador = document.querySelectorAll('.option')
const resultadoMensaje = document.getElementById('mensaje')

const opciones = ['piedra', 'papel', 'tijeras']


function jugar(opcionSeleccionada){
    const opcionComputadora = opciones [Math.floor(Math.random() * 3)]

    let resultado = ''

    if(opcionSeleccionada === opcionComputadora){
        resultado = 'Empate'
    }else if (
        (opcionSeleccionada === 'piedra' && opcionComputadora === 'tijeras') ||   
        (opcionSeleccionada === 'papel' && opcionComputadora === 'piedra') ||
        (opcionSeleccionada === 'tijeras' && opcionComputadora === 'papel')
    ){

            resultado = 'Winner'
    }else{
        resultado = 'Looser!'
    }

    resultadoMensaje.textContent = `Elegiste ${opcionSeleccionada}, la maquina eligio ${opcionComputadora} . ${resultado} `
}

opcionJugador.forEach(option => {
    option.addEventListener('click', () =>{
        const opcionSeleccionada = option.dataset.option
        jugar(opcionSeleccionada)
    })
})