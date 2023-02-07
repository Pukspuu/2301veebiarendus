const pillid = [
    'Kitarr',
    'Midi',
    'Viiul',
    'Trumm'
]

function mituPilliHtml(index) {
    let pill = pillid[index]
    return '<div class= "rida">' + pill + '</div>'
}

let pillideHtml = ''
for (let i = 0; i < pillid.length; i++) {
    pillideHtml += mituPilliHtml(i)
}

document.getElementById('pillid').innerHTML = pillideHtml