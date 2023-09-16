import measureComplexity from "./modules/measureIt.mjs";
import {
  generateOrderedNumbers,
  generateUnorderedNumbers,
} from "./modules/dataGenerator.mjs";
import { maxVal1, maxVal2 } from "./src/highestValueSearch.mjs";

// const targetValue = 100
const sizeInstances = [
  100, 200, 1000, 2000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000,
  10000000, 100000000,
];
const iterations = 100;

sizeInstances.forEach((instance) => {

  const note = `maxVal2_${instance}`;
  let data = generateUnorderedNumbers(instance);

  function algorithm() {
    // console.log(maxVal1(data, data.length));
    console.log(maxVal2(data, 0 ,data.length-1))
  }

  measureComplexity(algorithm, iterations, `${note}`);
});
