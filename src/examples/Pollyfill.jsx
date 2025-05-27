//Verificar si el navegador no tiene el metodo includes
if (!Array.prototype.includes) {
    // Si no existe lo agregamos al prototipo de Array
    Array.prototype.includes = function (elementoBuscado) {
        // Recorrer el Array
        for (let i = 0; i < this.length; i++) {
            //Comprar el elemento actual con el buscado
            if (this[i] === elementoBuscado) {
                // Si son iguales, retornar true
                return true
            }
        }
        // Si no se encontró el elemento, retornar false
        return false
    }
}