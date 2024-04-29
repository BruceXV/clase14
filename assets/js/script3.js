const obtenerDigimonAsyncAwait = async() => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');

        if (!response.ok) {
            throw new Error('hubo un problema al obtener los datosa de Digimon.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
} 

// function parA MOSTAR LOS DIGIMOS EN CARDS
const mostrarDigimon = async () => {
    const digimonRow = document.getElementById('digimonRow');
    try {
        const digimones = await obtenerDigimonAsyncAwait();
        //localStorage.setItem("digimones",JSON.stringify(digimones));
        digimones.map((digimon) =>{
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-sm-4');

            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('mt-2');
            card.classList.add('mt-2');

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = digimon.img;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement
            cardTitle.textContent = digimon.name;
        })
    }
}