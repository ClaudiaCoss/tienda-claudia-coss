const productos=[
    {
        id:'001',
        name: 'Calavera de azúcar',
        description: 'Calavera de azúcar decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 20,
        img: 'https://travelandleisure-es.com/wp-content/uploads/2024/10/calaveras_de_azucar_portada-1000x667.jpg',

    },

    {
        id:'002',
        name: 'Calavera de chocolate',
        description: 'Calavera de chocolate decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 25,
        img: 'https://i.ytimg.com/vi/qIyRSSmT_fE/maxresdefault.jpg',

    },


    {
        id:'003',
        name: 'Calavera de amaranto',
        description: 'Calavera de amaranto decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 30,
        img: 'https://vivirmejor.mx/wp-content/uploads/2020/09/receta-calaveras-de-amaranto.jpg',

    },


    {
        id:'004',
        name: 'Tumbas de azúcar',
        description: 'Tumbas de azúcar decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 15,
        img: 'https://aldialogo.sfo2.digitaloceanspaces.com/uploads/2023/10/dulces.jpg',

    },


]

let error = false;


export const getProductos = () =>{
    return new Promise ((reject, resolve)=>{
        setTimeput(()=>{
            if(error){
                reject('Error al cargar los productos')
            }else{
                resolve(productos)
        }
        },3000)
        })
}