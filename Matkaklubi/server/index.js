const http = require("http");

const host = 'localhost';
const port = 8080;

const matkadeAndmed = {
kogus: 3,
labiviija: 'Meistermatkaja',
matkad: [
    {
        pealkiri: 'Ümber Ülemiste järve',
        kestvus: '1h',
        pikkus: '1km',
        kirjeldus: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae'

 },
 {
    pealkiri: 'Läbi soode ja metsade',
    kestvus: '12h',
    pikkus: '5km',
    kirjeldus: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae'
  
 },

 {
    pealkiri: 'Otse ja omadega',
    kestvus: '5h',
    pikkus: '3km',
    kirjeldus: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae'
  
 }
]
};

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
