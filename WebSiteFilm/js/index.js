

const http = require('http');

const server = http.createServer();

server.on('request', (reg, res)=>{
	res.end('Основы Node.js');
});

server.listen(3000,() => console.log('Сервер работает'));
