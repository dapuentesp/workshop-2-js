alert('Bienvenido a su planificador de viaje')

const tickets = 50000
const cost_per_day = 100000

const destination = prompt('Escriba el destino de su viaje: ')

let budget = prompt('Por favor, ingrese el presupuesto con el que cuenta para el viaje: ')

let number_of_days = prompt('Ingrese la cantidad de días que tiene planeado para el viaje: ')

cost_total = number_of_days * cost_per_day + tickets

alert(`El costo del viaje a ${destination} es de ${cost_total}`)

if (budget >= cost_total) {
    alert('Su viaje se puede realizar')
} else {
    alert('Su viaje no se puede realizar')
}

