var http = require('http');

const host = 'localhost';
const port = 8080;

const matkadeAndmed = {
kogus: 2,
labiviija: 'Kaarel',
matkad: [
    {
        pealkiri: 'Ümber Ülemiste',
        kestvus: '1h',
        pikkus: '1 km'
 },
 {
    pealkiri: 'Üle Ülemiste',
    kestvus: '12h',
    pikkus: '5 km'
  
 }
]
}

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(matkadeAndmed));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
