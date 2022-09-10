// Acá nos falta nuestra fuente de datos
let platos = [
  {
    id: 1,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.5,
    img: "/images/Carpaccio-de-salmon.jpg"
  },
  {
    id: 2,
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: 47.0,
    img: "/images/Risotto-berenjena-queso-cabra.jpg"
  },
  {
    id: 3,
    nombre: "Mouse de arroz",
    descripcion: "Mouse de arroz con leche y aroma de azahar",
    precio: 27.5,
    img: "/images/Mousse-de-arroz-con-leche.jpg"
  },
  {
    id: 4,
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.5,
    img: "/images/esparragos.png"
  },
];

let about = {
  nombre: "Pimienta & Sal",
  descripcion1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients",
  descripcion2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  chef: "https://images.unsplash.com/photo-1625631980722-b728f9cf1036?ixlib=rb-1.2.1&ixid=MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}

// Acá nos falta un objeto literal con las acciones para cada ruta
const showIndex = (req, res) => {
  res.render("index", { platos });
};

const showMenu = (req, res) => {
  res.render("detalleMenu", { platos });
};

const showDetalle = (req, res) => {
  let id =  parseInt(req.params.id);
  let plato = platos.find(pl => pl.id === id );
  res.render("detallePlato", { plato });
};

const showAbout = (req,res) => {
  let array = about.descripcion1.split(" ");
  let parte1 = array.splice(0,  array.length -2).join(" ")
  let parte2 = array.splice(array.length -2, array.length)
  res.render("about", { about, parte1 , parte2 });
}
// Acá exportamos el resultado
module.exports = { showIndex, showMenu, showDetalle, showAbout };
