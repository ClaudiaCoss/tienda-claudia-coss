//Spred Operator
const numerosSugar=[...numeros, ...numerosNuevos,7,8,9,10]

//Destructuring
const persona ={
    nombre: 'Daniel',
    mail: 'daniel@correo.com'
    edad:18
}
console.log(persona.nombre)

const {nombre, edad}=persona
const colores=['rojo', 'morado', 'azul']

console.log(colores[2])

const [primero, segundo, tercero] = colores

console.log(primero)

if(edad >18){
    console.log('mayor')
    mensajeJS= 'Eres mayor'
}else{
    console.log('menor')
    mensajeJS= 'Eres menor'
}

console.log('Hola' +nombre)




