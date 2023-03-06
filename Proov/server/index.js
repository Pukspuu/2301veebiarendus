const http = require("http");

const host = 'localhost';
const port = 8080;

const matkadeAndmed = {
    kogus: 2,
    labiviija: 'Kaarel',
    matkad:[
        {
            pealkiri:'Ülemiste üllatus',
            kestvus: '2h',
            pikkus: '1km'

        },
        {
            pealkiri:'Alumiste alatus',
            kestvus: '4h',
            pikkus: '2km'

        },
]

};

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(matkadeAndmed));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


