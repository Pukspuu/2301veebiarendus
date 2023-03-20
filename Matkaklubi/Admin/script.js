const API_URL = 'https://expressjs-postgres-production-6006.up.railway.app'

const sisu = document.querySelector('.matkad');


async function getTreks() {
    const treks = await fetch(`${API_URL}/treks?columns=id,title`).then((response) => response.json());
    console.log(treks);
    sisu.innerHTML = '';

    for(const trek of treks){
sisu.innerHTML += `
        <a href="/Admin/index.html?id=${trek.id}">${trek.title}</a>
        `;
    }
};

getTreks();




