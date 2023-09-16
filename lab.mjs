import measureComplexity from "./modules/measureIt.mjs";
// import loadData from "./modules/loadData.mjs";
import { generateOrderedNumbers, generateUnorderedNumbers } from "./modules/dataGenerator.mjs"; 
import { maxVal1, maxVal2 } from "./src/highestValueSearch.mjs";


// const targetValue = 100
const sizeInstance = 100000000
const iterations = 20
const note = `maxVal1_${sizeInstance}`

// loadData(`./data/data-for-search/ordered/${sizeInstance}.txt`).then(data =>{
// })

function algorithm(){
    console.log(maxVal1(data, data.length))
    // console.log(maxVal2(data, 0 ,data.length-1))
}


let data = generateUnorderedNumbers(sizeInstance)

measureComplexity(algorithm, iterations, `${note}`)
