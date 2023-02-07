const pildiAadressid = [
    './assets/midi.jpeg',
    './assets/trumm.jpg',
    './assets/viiul.jpg'
]

function teePildiHtml(index){
    let pildiAadress = pildiAadressid[index]
    //return '<img src="' + pildiAadress + '">'
   // return `<img src="${pildiAadress}">`
}

let pildiGaleriiHTML = ''


for (let i=0; i<pildiAadressid.length; i++){
   pildiGaleriiHTML += teePildiHtml(i)
}
document.getElementById('valjund').innerHTML = pildiGaleriiHTML