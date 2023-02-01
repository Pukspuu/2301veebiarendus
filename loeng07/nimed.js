let nimi = prompt('Sisesta nimi')

let valjundElement = document.getElementById('valjund')
valjundElement.innerHTML = 'Tähed sinu nimes: <br>'

for (let i = 0; i < nimi.length; i++){
    valjundElement.innerHTML += nimi[i] + '<br>'
}



if(nimi.length <=6){
    valjundElement.innerHTML += ' <h2>Sul on ilus nimi</h2>'
} else {
    valjundElement.innerHTML += ' <h2>Sul on pikk nimi</h2>'
}

function valjastaRuut(x){
    let ruut = x*x
    console.log(x*x)
    //valjundElement.innerHTML += x + ' ruut on ' ruut + '<br>'
}

valjastaRuut(10)
valjastaRuut(100)
valjastaRuut(68)