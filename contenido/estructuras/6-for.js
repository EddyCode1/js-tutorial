/**
 * 
 * 
 *      CICLO FOR -> PARA
 */
/*

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

let lista = ["comer","dormir","code","repetir"]; 

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    
}

// FOR-OF ----------------------> For each
let canasta = ["manzanas","naranjas","mangos","uvas"]
for (fruta of canasta) {
  //  console.log(fruta)
}

//FOR-IN
// -> itera sobre las propiedades de un objeto

const canastaDeFrutas ={
    nombre : "manzana",
    precio : 5.0, 
    tipo : "verde", 
    marca : "Chanita's apples"
}

    for (fruta in canastaDeFrutas) {
        //console.log(fruta);    
    }

    for (fruta in canastaDeFrutas) {
        console.log(`${fruta} : ${canastaDeFrutas[fruta]}` ); 
    }