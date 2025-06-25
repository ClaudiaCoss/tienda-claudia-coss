const productos=[
    {
        id:'001',
        name: 'Calavera de azúcar',
        description: 'Calavera de azúcar decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 20,
        categorias: 'DulcesMexicanos',
        img: 'https://travelandleisure-es.com/wp-content/uploads/2024/10/calaveras_de_azucar_portada-1000x667.jpg',

    },

    {
        id:'002',
        name: 'Calavera de chocolate',
        description: 'Calavera de chocolate decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 25,
        categorias: 'DulcesMexicanos',
        img: 'https://i.ytimg.com/vi/qIyRSSmT_fE/maxresdefault.jpg',

    },


    {
        id:'003',
        name: 'Calavera de amaranto',
        description: 'Calavera de amaranto decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 30,
        categorias: 'DulcesMexicanos',
        img: 'https://vivirmejor.mx/wp-content/uploads/2020/09/receta-calaveras-de-amaranto.jpg',

    },


    {
        id:'004',
        name: 'Tumbas de azúcar',
        description: 'Tumbas de azúcar decorada con colores vivos, ideal para el Día de Muertos.',
        stock:200,
        price: 15,
        categorias: 'DulcesMexicanos',
        img: 'https://aldialogo.sfo2.digitaloceanspaces.com/uploads/2023/10/dulces.jpg',

    },


    {
        id:'005',
        name: 'Colación de azúcar',
        description: 'Podemos encontrar este dulce en diferentes colores como azul, amarillo, verde o rosa. El interior puede tener trocitos de cáscara de cítricos, canela o cacahuate.',
        stock:200,
        price: 25,
        categorias: 'DulcesNavidenios',
        img: 'https://revistabitacora.mx/wp-content/uploads/2020/11/la-colaci%C3%B2n-2.jpg',

    },


        {
        id:'006',
        name: 'Colación de chocolate',
        description: 'Podemos encontrar este dulce en diferentes colores como azul, amarillo, verde o rosa. El interior puede tener trocitos de cáscara de cítricos, canela o cacahuate.',
        stock:200,
        price: 25,
        categorias: 'DulcesNavidenios',
        img: 'https://surdestino.com/wp-content/uploads/2024/07/colaciones-2.webp',

    },



]

let error = false;

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Error al cargar los productos');
            } else {
                resolve(productos);
            }
        }, 3000);
    });
};