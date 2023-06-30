const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', engine({ layoutsDir: __dirname + '/views' }));

app.get('/', (req, res) => {
	res.render('main.handlebars');
});

app.listen(port, () => {
	console.log(`El servidor está inicializado en el puerto ${port}`);
});

/* codigo maria
const { engine } = require('express-handlebars');

const PORT = 3000;
// Motor de plantillas

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');

*/
