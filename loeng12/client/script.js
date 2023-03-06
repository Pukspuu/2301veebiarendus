const url = 'http://localhost:8080';

const app = document.querySelector('#app');

async function kysiMatkad(){

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let matkadHTML = `<p>Matkade läbiviija: ${data.labiviija}</p>`;
    for (let i=0; i < data.matkad.length; i++){
        matkadHTML += `<div class="matk">
        <span>${data.matkad[i].pealkiri}</span>
        <br><span> Kestvus${data.matkad[i].kestvus}</span> 
        <span> Pikkus${data.matkad[i].pikkus}</span>
        <span> Kirjeldus${data.matkad[i].kirjeldus}</span>
            </div>`;
    };
    app.innerHTML = matkadHTML;
}
kysiMatkad();

