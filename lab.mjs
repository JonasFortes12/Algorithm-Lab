import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";

import binarySearch from "./src/binarySearch.mjs";
import cubicSearch from "./src/cubicSearch.mjs";
import {sequentialSearch_v1, sequentialSearch_v2} from "./src/sequentialSearch.mjs"
import quadraticSearch from "./src/quadraticSearch.mjs";
import ternarySearch from "./src/ternarySearch.mjs";

const sizeInstance = 100
const note = `Busca Cúbica - intância de ${sizeInstance} desordenada (8718114)`

loadData(`./data/unordered/${sizeInstance}.txt`).then(data =>{

    function algorithm(){

        // console.log("\n Busca Quadrática____________")
        // console.log(quadraticSearch(1471442, data))

        console.log("\n Busca Cubica____________")
        console.log(cubicSearch(8718114, data))
 
        // console.log("\n Busca Sequencial____________")
        // console.log(sequentialSearch_v1(8815815, data))
        
        // console.log("\n Busca Binaria____________")
        // console.log(binarySearch(48, data, 0, data.length))

        // console.log("\n Busca Ternaria____________")
        // console.log(ternarySearch(48, data))

    }

    measureComplexity(algorithm, 2, `${note}`)

});





