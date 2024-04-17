let souvenirs_names = prompt('Ingrese los nombres de los souvenirs que desea listar separados por coma: ')
let souvenirs_name_array = souvenirs_names.split(',') // List with the names of the souvenirs

let souvenirs_cost = prompt('Ingrese los costos de los souvenirs ingresados anteriormente, respectivamente, separados por espacio: ')

let souvenirs_costArray = souvenirs_cost.split(' ')
let souvenirs_costArray_integer = []  // List with souvenir prices

souvenirs_costArray.forEach(function(i) { //Converting string prices to integers
    var entero = parseInt(i);
    souvenirs_costArray_integer.push(entero);
})

let souvenirs_disp = prompt('Ingrese las disponibilidades de los souvenirs ingresados anteriormente como 0 o 1, respectivamente, separados por espacio: ')

let souvenirs_dispArray = souvenirs_disp.split(' ') //List with the availability of souvenirs
let souvenirs_dispArray_bools = souvenirs_dispArray.map(function(i) { // Converting souvenir availability to booleans
    return i === "1";
});


function menu(){
    let option = prompt("Do you want to add a new souvenir?\n\t1. Yes\n\t2. No")
    if(option == 1){
        let souvenir_name = prompt('Ingrese el nombre del souvenir que desea agregar: ')
        let souvenir_cost = prompt('Ingrese el costo del souvenir que desea agregar: ') 
        let souvenir_cost_integer = parseInt(souvenir_cost)
        let souvenirs_disp = prompt('Ingrese la disponibilidad del souvenir que desea agregar como 0 o 1: ')
        let souvenir_disp_bool = souvenirs_disp === "1"
        souvenirs_name_array.push(souvenir_name)
        souvenirs_costArray_integer.push(souvenir_cost_integer)
        souvenirs_dispArray_bools.push(souvenir_disp_bool)
    }
    else {
        alert('Bye!')
    }
}

menu()