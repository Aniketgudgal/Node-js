const http = require('http');
const PORT = 3000;
const server =  http.createServer((req, res) => {
console.log(req);
res.write('<h1>Hello Gokul Kaka</h1>');
res.write('<p>Hello world</p>');
});
server.listen(PORT, () => 
{
	console.log(`Server is running on port ${PORT}`);	
});