import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";
import { generateOrderedNumbers, generateUnorderedNumbers } from "./modules/dataGenerator.mjs"; 

import binarySearch from "./src/binarySearch.mjs";
import cubicSearch from "./src/cubicSearch.mjs";
import {sequentialSearch_v1, sequentialSearch_v2} from "./src/sequentialSearch.mjs"
import quadraticSearch from "./src/quadraticSearch.mjs";
import ternarySearch from "./src/ternarySearch.mjs";

const sizeInstance = 1000000
const targetValue = 1
const iterations = 20
const note = `Busca_Binária_intância_${sizeInstance}_alvo_${targetValue}`

// loadData(`./data/data-for-search/ordered/${sizeInstance}.txt`).then(data =>{
//     function algorithm(){

//         // console.log("\n Busca Quadrática____________")
//         // console.log(quadraticSearch(targetValue, data))
    
//         // console.log("\n Busca Cubica____________")
//         // console.log(cubicSearch(targetValue, data))
    
//         // console.log("\n Busca Sequencial____________")
//         // console.log(sequentialSearch_v1(targetValue, data))
        
//         console.log("\n Busca Binaria____________")
//         console.log(binarySearch(targetValue, data, 0, data.length))
    
//         // console.log("\n Busca Ternaria____________")
//         // console.log(ternarySearch(targetValue, data))
    
//     }
    
//     measureComplexity(algorithm, iterations, `${note}`)
// });



// const data = generateOrderedNumbers(sizeInstance)

// function algorithm(){

//     // console.log("\n Busca Quadrática____________")
//     // console.log(quadraticSearch(targetValue, data))

//     // console.log("\n Busca Cubica____________")
//     // console.log(cubicSearch(targetValue, data))

//     // console.log("\n Busca Sequencial____________")
//     // console.log(sequentialSearch_v1(targetValue, data))
    
//     console.log("\n Busca Binaria____________")
//     console.log(binarySearch(targetValue, data, 0, data.length))

//     // console.log("\n Busca Ternaria____________")
//     // console.log(ternarySearch(targetValue, data))

// }



measureComplexity(algorithm, iterations, `${note}`)





