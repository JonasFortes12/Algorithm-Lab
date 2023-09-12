import measureComplexity from "./modules/measureIt.mjs";
// import loadData from "./modules/loadData.mjs";
import { generateOrderedNumbers, generateUnorderedNumbers } from "./modules/dataGenerator.mjs"; 
import { maxVal1, maxVal2 } from "./src/highestValueSearch.mjs";

// const targetValue = 1
const sizeInstance = 10000000
const iterations = 100
const note = `maxVal02_${sizeInstance}`

// loadData(`./data/data-for-search/ordered/${sizeInstance}.txt`).then(data =>{
// })

let data = generateUnorderedNumbers(sizeInstance)


function algorithm(){
    console.log(maxVal2(data, 0, data.length-1));
}

measureComplexity(algorithm, iterations, `${note}`)





