// Módulos
const express = require("express");
const app = express();
const puerto = 3500;
// Acá falta uno... 😇
const routes = require("./src/routes/mainRouter");
// Configuración
app.use(express.static("public"));
// Acá falta el template engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use("/", routes);

app.listen(puerto, () => {
  console.log(`Servidor arriba en el puerto ${puerto} 🤓👌`);
});
