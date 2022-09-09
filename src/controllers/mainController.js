// Acá nos falta nuestra fuente de datos
let platos = [
  {
    id: 1,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.5,
  },
  {
    id: 2,
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: 47.0,
  },
  {
    id: 3,
    nombre: "Mouse de arroz",
    descripcion: "Mouse de arroz con leche y aroma de azahar",
    precio: 27.5,
  },
  {
    id: 4,
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.5,
  },
];

// Acá nos falta un objeto literal con las acciones para cada ruta
const showIndex = (req, res) => {
  res.render("index", { platos });
};

const showMenu = (req, res) => {
  res.render("detalleMenu", { platos });
};

const showDetalle = (req, res) => {
  res.render("detallePlato", { platos });
};

// Acá exportamos el resultado
module.exports = { showIndex, showMenu, showDetalle };
