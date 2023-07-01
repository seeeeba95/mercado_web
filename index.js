const express = require('express');
const { engine } = require('express-handlebars');
const HOST = 'http://localhost';
const PORT = 3000;

const app = express();

// CONFIGURACION HANDLEBARS
/* 1: Establece Handlebars como el motor de plantillas con la extensión .hbs y define el directorio de layouts que esta en /views.
      Antes: app.engine('handlebars', engine({ layoutsDir: __dirname + '/views' }));.
   2: Establece el motor de plantillas handlebars como predeterminado.
   PD: set() es un metodo de express que permite establecer valores de configuracion. engine() es un metodo de handlebars que permite definir un motor (de plantillas?). */
app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		layoutsDir: __dirname + '/views',
		partialsDir: __dirname + '/views/components/',
	})
); // 1
app.set('view engine', 'hbs'); // 2

// MIDDLEWARES
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

// ROUTES
// app.get('/', (req, res) => {
// 	res.render('main');
// });

app.get('/user/:name', (req, res) => {
	const user = req.params.user;
	res.render('main', { user });
});

app.listen(PORT, () => {
	console.log(`El servidor está inicializado en  ${HOST}:${PORT}`);
});
