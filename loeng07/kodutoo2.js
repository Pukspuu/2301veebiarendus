let nimi
nimi=prompt('Mis su nimi on?')
let valjundElement = document.getElementById('valjund')
valjundElement.innerHTML = 'Sinu nimi tagurpidi: '

for (let i = nimi.length-1; i >=0; i--){
    valjundElement.innerHTML += nimi[i]

}



