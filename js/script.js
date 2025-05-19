//variables G.
const botonAlertEl = document.querySelector('#btnAlert')
const botonConsoleEl = document.querySelector('#btnConsole')
const botonConsoleAlertEl = document.querySelector('#btnConsoleAlert')
const bodyEl = document.querySelector('body')
const valor1El = document.querySelector('#valor1')
const valor2El = document.querySelector('#valor2')
const igualEl = document.querySelector('#igual')
const resultadoEl = document.querySelector('#resultado')

//LOAD



//funciones
function limpiarcolor () {
    bodyEl.classList.forEach(clase => {
        if (clase.startsWith('cambio')) {
            bodyEl.classList.remove(clase)
        }
    })
}


//eventos
botonAlertEl.addEventListener('click',function() {
    limpiarcolor()
    console.log('autodestruccion iniciada')
    bodyEl.classList.add('cambiorojo')
})
botonConsoleEl.addEventListener('click',function() {
    limpiarcolor()
    console.log('autodestruccion evitada')
    bodyEl.classList.add('cambioverde')
})
botonConsoleAlertEl.addEventListener('click',function() {
    limpiarcolor()
    console.log('autodestruccion pausada')
    bodyEl.classList.add('cambioazul')
})
igualEl.addEventListener('click',function() {
    limpiarcolor()
    const valor1 = parseInt(valor1El.value)
    const valor2 = parseInt(valor2El.value)
    const resultado = valor1 + valor2
    resultadoEl.innerHTML = `Resultado: ${resultado}`
})

