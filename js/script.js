//variables G.
const botonAlertEl = document.querySelector('#btnAlert')
const botonConsoleEl = document.querySelector('#btnConsole')
const botonConsoleAlertEl = document.querySelector('#btnConsoleAlert')
const bodyEl = document.querySelector('body')

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
