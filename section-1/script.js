alert('Bienvenido a su planificador de viaje')

const TICKETS = 50000
const COST_PER_DAY = 100000

const DESTINATION = prompt('Escriba el destino de su viaje: ')

let budget = prompt('Por favor, ingrese el presupuesto con el que cuenta para el viaje: ')

let number_of_days = prompt('Ingrese la cantidad de días que tiene planeado para el viaje: ')

cost_total = number_of_days * COST_PER_DAY + TICKETS

alert(`El costo del viaje a ${DESTINATION} es de ${cost_total}`)

if (budget >= cost_total) {
    alert('Su viaje se puede realizar')
} else {
    alert('Su viaje no se puede realizar')
}

