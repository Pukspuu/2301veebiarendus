let uudised = [
    {
        pealkiri: 'Uued tuuled-uued kuued',
        autor: 'Autor: Onu Uno',
        artikkel: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae.',
        pilt: './assets/windy.jpg'
    },

    {
        pealkiri: 'Langevarjuga või langevarjuta?',
        autor: 'Autor: Onu Kuuno',
        artikkel: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae.',
        pilt: './assets/langevari.jpg'
    },

    {
        pealkiri: 'Maalt ja merelt',
        autor: 'Autor: Onu Aadu',
        artikkel: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam provident dolorem laboriosam officiis repellat distinctio. Quos voluptate ea corporis praesentium iusto atque excepturi, repellendus molestias, quibusdam dolor mollitia. Recusandae.',
        pilt: './assets/maalt.jpg'
    },
]

function koostaUudiseHTML(uudis) {
    return `
    <div class="card">
       
        <div class="card-body">

            <h4>${uudis.pealkiri}</h4>
            <p>
            <h5>${uudis.autor}<h5>
            </p>
            <p>    ${uudis.artikkel} </p>
            
            <img class="card-img-top" src="${uudis.pilt}" alt=""> 
 
               
        </div>
    </div>    
    `
}

let uudisteHtml = ''

for (let uudis of uudised) {
    uudisteHtml += koostaUudiseHTML(uudis)
}

document.querySelector('.uudised').innerHTML = uudisteHtml