let matkad = [
    {
        nimi: 'Reis lennukiga',
        kirjeldus: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi nam obcaecati unde natus voluptas ex, voluptatum soluta enim dolorem ut blanditiis neque similique impedit ad qui sapiente rem reprehenderit!',
        pildiAadress: './assets/Plane-taking-off-twilight-1024x684.jpg'
    },
    {
        nimi: 'Reis kaamliga',
        kirjeldus: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi nam obcaecati unde natus voluptas ex, voluptatum soluta enim dolorem ut blanditiis neque similique impedit ad qui sapiente rem reprehenderit!',
        pildiAadress: './assets/saved-by-camel-india-geoex.jpg'
    },
    {
        nimi: 'Reis seljakotiga',
        kirjeldus: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi nam obcaecati unde natus voluptas ex, voluptatum soluta enim dolorem ut blanditiis neque similique impedit ad qui sapiente rem reprehenderit!',
        pildiAadress: './assets/athletic-african-american-woman-backpacker-on-top-2022-06-13-17-48-21-utc-e1659564068402-1600x900.jpg'
    },
]

function koostaMatkaHTML(matk) {
    return `
    <div class="card">
        <img class="card-img-top" src="${matk.pildiAadress}" alt="">
        <div class="card-body">
            <h4>${matk.nimi}</h4>
            <p>
                ${matk.kirjeldus}
            </p>
        </div>
    </div>    
    `
}

let matkadeHtml = ''

for (let matk of matkad) {
    matkadeHtml += koostaMatkaHTML(matk)
}

document.querySelector('.matkad').innerHTML = matkadeHtml

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
            <h4>${uudis.pealkiri}</h4>
            <p>
            <h5>${uudis.autor}<h5>
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