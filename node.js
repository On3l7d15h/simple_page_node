const express = require("express");
const app = express();
const port = 3000;

//seteando los ejs

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//nuestra carpeta de archivos estáticos

app.use(express.static(__dirname + "/public"));

//iniciar el servidor

app.listen(port, () => {
	console.log(`Iniciando el servidor en el puerto ${port}`);
});

//seteando la página principal
app.get('/', (req, res) => {
	res.render("index", {
		title: "Inicio"
	});
});

app.get('/const', (req, res) => {
	res.render("const", {
		title: "En construcción..."
	})
}) 

app.get((req, res, next) => {
	res.status(404).render()
})