
function obtenerDigimonPromesas(){
    return new Promise(function(resolve,reject){ // resolver si va bien o reject si va mal

        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(function(digimones){
            if(!digimones.ok){
                throw new Error("Error po loco");
            }
            return digimones.json();
        })
        .then(function(data){
            resolve(data);
        })
        .catch((error)=> {
            reject( `El error es: ${error}`); 
        })  


    })
}

function generarSaludo(){
    console.log("hola");
}

obtenerDigimonPromesas()
 .then((digimones) =>{ // llega todos los digimones que recorre cada digimon va para
    digimones.map((digimon)=>{ // aca va a mostrar digimon primero, segundo, tercer etc
        console.log(digimon);
    })
 })
 .catch((error)=>{
    console.log(`El error es: ${error}`);
 })

 generarSaludo();