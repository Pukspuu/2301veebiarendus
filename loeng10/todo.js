
// Järgnevad ülesanded, mida on vaja teha igal hommikul
const ylesanne1 = {
    kirjeldus: 'Lugeda raamatut',
    olulisus: 3,
    kasTehtud: false,
    kategooria: 'heaolu'
}

const ylesanne2 = {
    kirjeldus: 'Käia teatris',
    olulisus: 3,
    kasTehtud: true,
    kategooria: 'heaolu'
}

const ylesanne3 = {
    kirjeldus: 'Jookse kolm korda nädalas 3 kilomeetrit',
    olulisus: 4,
    kasTehtud: false,
    kategooria: 'heaolu'
}

const ylesanded = [
    ylesanne1,
    ylesanne2,
    ylesanne3
]

function koostaYlesandHtml(ylesanne){

    let margitud = ''

if (ylesanne.kasTehtud){
 kasTehtud = 'checked'
}

const ylesanneHtml = `

<div class="ylesanne row">
    <div class= "kasTehtud col-1"><input type="checkbox" name="kasTehtud">${margitud} </div>
    <div class= "kirjeldus col-6"> ${ylesanne.kirjeldus}</div>
    <div class= "kategooria col-3"> ${ylesanne.kategooria}</div>
    <div class= "olulisus col-2"> ${ylesanne.olulisus}</div>
</div>
`
return ylesanneHtml
}

let koguValjundHtml = ''

for (let ylesanne of ylesanded){
koguValjundHtml += koostaYlesandHtml(ylesanne)

function lisaUusYlesanne (){
    const ylesandeteks = koostaYlesandHtml(ylesanne).value
    const ylesanne = {
        kirjeldus: 'ylesandeTekst',
        olulisus: 4,
        kasTehtud: false,
        kategooria: 'heaolu'
    }
}
}

document.getElementById('valjund').innerHTML = koguValjundHtml