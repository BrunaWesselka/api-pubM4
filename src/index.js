const roteador = require('./roteador/routes.js');
const custoExpress = require('./config/config.js')
const APP_PORT = require('./config/config.js');
const app = customExpress()
app.use(express.json());

//pedindo para porta que esta no arquivo de config
app.listen(APP_PORT, console.log("Servidor funcionando na porta 3000"));



