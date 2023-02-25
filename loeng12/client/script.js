const url = 'http://localhost:8080';

const app = document.querySelector('#app');

async function kysiMatkad(){

    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
    let matkadHTML = `<p>Matkade läbiviija: ${data.labiviija}</p>`;
    for (let i=0; i < data.matkad.lenght; i++){
        matkadHTML +=`<div class="pealkiri">${data.matkad[i].pealkiri}</div>`;

    }
    app.innerHTML = matkadHTML;
}
kysiMatkad();

