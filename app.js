// Módulos
const express = require("express");
const app = express();
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

app.listen(5000, () => {
  console.log("Servidor arriba en el puerto 5000 🤓👌");
});
