import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";

import binarySearch from "./src/binarySearch.mjs";
import cubicSearch from "./src/cubicSearch.mjs";
import {sequentialSearch_v1, sequentialSearch_v2} from "./src/sequentialSearch.mjs"
import quadraticSearch from "./src/quadraticSearch.mjs";
import ternarySearch from "./src/ternarySearch.mjs";

const sizeInstance = 5000000
const desiredValue=1471442
const note = `Busca Quadrática - intância de ${sizeInstance} ordenada - valor buscado '${desiredValue}'`

loadData(`./data/ordered/${sizeInstance}.txt`).then(data =>{

    function algorithm(){

        console.log("\n Busca Quadrática____________")
        console.log("Value '"+ desiredValue + "' found at position: " + quadraticSearch(desiredValue, data))

        // console.log("\n Busca Cubica____________")
        // console.log("Value '"+ desiredValue + "' found at position: " + cubicSearch(48, data))
 
        // console.log("\n Busca Sequencial____________")
        // console.log("Value '"+ desiredValue + "' found at position: " + sequentialSearch_v1(49, data))
        
        // console.log("\n Busca Binaria____________")
        // console.log("Value '"+ desiredValue + "' found at position: " + binarySearch(48, data, 0, data.length))

        // console.log("\n Busca Ternaria____________")
        // console.log("Value '"+ desiredValue + "' found at position: " + ternarySearch(48, data))

    }

    measureComplexity(algorithm, 5, `${note}`)

});





