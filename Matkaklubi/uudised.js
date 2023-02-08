let uudised = [
    {
        pealkiri: 'Uued tuuled-uued kuued',
        autor: 'Onu Uno',
        artikkel: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae.',
        pilt: './assets/windy.jpg'
    },

    {
        pealkiri: 'Langevarjuga või langevarjuta?',
        autor: 'Onu Kuuno',
        artikkel: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae.',
        pilt: './assets/langevari.jpg'
    },

    {
        pealkiri: 'Maalt ja merelt',
        autor: 'Onu Aadu',
        artikkel: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae.',
        pilt: './assets/maalt.jpg'
    },
]

function koostaUudiseHTML(uudis) {
    return `
    <div class="card">
        <img class="card-img-top" src="${uudis.pilt}" alt="">
        <div class="card-body">

            <h3>${uudis.pealkiri}</h3>
            <p>
            <h4>${uudis.autor}<h4>
            </p>
                ${uudis.artikkel}
        </div>
    </div>    
    `
}

let uudisteHtml = ''

for (let uudis of uudised) {
    uudisteHtml += koostaUudiseHTML(uudis)
}

document.querySelector('.uudised').innerHTML = uudisteHtml