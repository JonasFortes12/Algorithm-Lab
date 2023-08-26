import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";

import binarySearch from "./src/binarySearch.mjs";
import cubicSearch from "./src/cubicSearch.mjs";
import {sequentialSearch_v1, sequentialSearch_v2} from "./src/sequentialSearch.mjs"
import quadraticSearch from "./src/quadraticSearch.mjs";
import ternarySearch from "./src/ternarySearch.mjs";

const sizeInstance = 5000
const note = `Busca cúbica - intância de ${sizeInstance}`

loadData(`./data/ordered/${sizeInstance}.txt`).then(data =>{

    function algorithm(){

        // console.log("\n Busca Quadrática____________")
        // console.log(quadraticSearch(48, data))

        console.log("\n Busca Cubica____________")
        console.log(cubicSearch(48, data))

        // console.log("\n Busca Binaria____________")
        // console.log(binarySearch(48, data, 0, data.length))

        // console.log("\n Busca Sequencial____________")
        // console.log(sequentialSearch_v1(49, data))

        // console.log("\n Busca Ternaria____________")
        // console.log(ternarySearch(48, data))

    }

    measureComplexity(algorithm, 5, `${note}`)

});





