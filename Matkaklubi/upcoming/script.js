const API_URL = 'https://expressjs-postgres-production-6006.up.railway.app'

const rida = document.querySelector('.rida');


async function getTreks() {
    const treks = await fetch(`${API_URL}/treks?status=Registration_open`).then((response) => response.json());
    console.log(treks);
    rida.innerHTML = '';

    for(const trek of treks){
rida.innerHTML += `
        <div class="trekk">
        <div class='image'>
        <img src="${trek.image_url}" height="100" alt="pilt">
        </div>
        <div class='content'>
        <h3>${trek.title}</h3>
        <p>${trek.description}</p>
        <button onclick = "signUp(${trek.id})">Registreeri</button>
        </div>
        </div>
        `;
    }
};

getTreks();