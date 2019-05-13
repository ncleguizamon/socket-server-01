import Server from './classes/server';
import { SERVER_PORT } from './global/enviroment';
import  router  from './routes/router';

const server = new Server();

server.app.use('/' , router);


server.start(() => {
console.log(`servidor corriendo en el puerto ${SERVER_PORT}`);
});
