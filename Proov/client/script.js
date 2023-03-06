const url = 'http://localhost:8080';
const app = document.querySelector('#app');

   async function kysiMatkad(){
        fetch(url)
    .then((response) => {
      return response.json();
    }).then((data) => {
        console.log(data);
        app.innerHTML = data.labiviija, data.matkad;
    });
    }

    kysiMatkad()