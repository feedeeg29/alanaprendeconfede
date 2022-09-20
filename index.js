
class Articulo {
    constructor(id, nombre, precio, categoria, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.categoria = categoria;
        this.imagen = imagen;
    }
}


const productosId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const nombres = ["remera", "carlo", "campera", "pantalon", "zapatillas", "gorra", "buzo", "camisa", "pantaloneta", "remera", "campera", "pantalon", "zapatillas", "gorra", "buzo", "camisa", "pantaloneta", "remera", "campera", "pantalon"];
const imgen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const categoria = ["hombre", "mujer", "nino", "nina", "calzado", "accesorios"];

let productosAr = [];

for (let productoS of productosId) {
    productosAr.push(new Articulo(productosId[productoS], nombres[Math.floor(Math.random() * 20)], Math.floor(Math.random() * 1000), categoria[Math.floor(Math.random() * 6)], imgen[Math.floor(Math.random() * 11)]));
}

console.log(productosAr);


document.addEventListener("DOMContentLoaded", init);


function init() {
    const divBoton = document.querySelector("#elBoton"); //tomamos el div para el boton
    const pepe = document.querySelector("#entrega"); // capturamos el div para mostrar lo generardo
    pepe.innerHTML = ""; // Dejo el div vacio


    //Para ELBOTON descomentar desde linea hasta linea
    const elBoton = document.createElement("button"); // creo EL BOTON
    divBoton.appendChild(elBoton); //adjunto EL BOTON a su div
    elBoton.setAttribute('class', 'elBoton') //le asigno la clase a EL BOTON
    elBoton.innerHTML = ("Apriete el boton"); //relleno el texto de EL BOTON
    elBoton.addEventListener('click', destruccion) //asigno el evento a EL BOTON
    function destruccion() {
        pepe.innerHTML = ""; //lo vuelvo a vaciar para que destruya los divs y no se acumulen cada vez que apretamos EL BOTON
        let elegir = prompt('elija un numero del 0 al 10') //pido un numero para crear random
        let productito = productosAr[parseInt(elegir)]; //le paso a una variable el producto capturado
        let elDiv = document.createElement('div') //creo un div contenedor
        elDiv.setAttribute('class', 'elDiv')
        pepe.appendChild(elDiv); //adjunto el contenedor al div pepe
        let elNombre = document.createElement(`p`); //creo el tag para pasar el nombre
        elNombre.setAttribute('class', 'elNombre'); //le asigno la clase al tag
        elDiv.appendChild(elNombre);    //adjunto el tag 
        let elPrecio = document.createElement(`p`);//creo el tag para pasar el nombre
        elDiv.appendChild(elPrecio);    //adjunto el tag
        elPrecio.setAttribute('class', 'elPrecio');     //le asigno la clase al tag
        let laCategoria = document.createElement(`p`);//creo el tag para pasar el nombre
        elDiv.appendChild(laCategoria);     //adjunto el tag
        laCategoria.setAttribute('class', 'laCategoria');   //le asigno la clase al tag
        let laImagen = document.createElement(`img`);   //creo el tag para pasar el nombre
        laImagen.setAttribute('class', 'laImagen');     //le asigno la clase al tag
        laImagen.setAttribute('src', `./img/${productito.imagen}.jpg`) //le asigno el atributo src para que me busque la imagen
        elDiv.appendChild(laImagen);    //adjunto el tag

        //con template strings le paso los valores del producto capturado
        elNombre.innerHTML = `Nombre: ${productito.nombre}`;
        elPrecio.innerHTML = `Precio: $ ${productito.precio}`;
        laCategoria.innerHTML = `Categoria: ${productito.categoria}`;
    }

    //Generador DOM Random descomentar linea 33 hasta linea 72
    /*
        if (productosAr.length > 0) {
            
            for (let productoRandom of productosAr) {
    
                const containerRandom = document.createElement("div");
                containerRandom.setAttribute(`class`, `containerrandom`);
                pepe.appendChild(containerRandom);
                containerRandom.innerHTML = `producto : ${productoRandom.nombre}`;
    
                const precioRandom = document.createElement('div');
                containerRandom.appendChild(precioRandom);
                precioRandom.innerHTML = `precio : ${productoRandom.precio}`;
    
    
                const nombreP = document.createElement("h5");
                nombreP.setAttribute(`class`, `nombreP`);
    
                const categoriaP = document.createElement("h5");
                categoriaP.setAttribute(`class`, `categoriaP`);
                categoriaP.innerHTML = `Categoria: ${productoRandom.categoria}`;
                (`Hola`)
                containerRandom.appendChild(categoriaP);
    
                const idP = document.createElement("h5");
                idP.setAttribute(`class`, `idP`);
                idP.innerHTML = `Id: ${productoRandom.id}`;
                containerRandom.appendChild(idP);
    
                const imgRandom = document.createElement("img")
                imgRandom.setAttribute(`src`, `./img/${productoRandom.imagen}.jpg`)
                containerRandom.appendChild(imgRandom)
    
                nombreP.innerHTML = `Nombre:`;
    
    
    
            }
        }
        */
}
