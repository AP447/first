const http = require('http');
const app = require('../app');

const port = parseInt(process.env.PORT, 10) || 8000;
app.search('port',port);

const server = http.createServer(app);
server.listen(port);