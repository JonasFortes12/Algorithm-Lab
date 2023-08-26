
export default function ternarySearch(target, vet) {
    let start = 0;
    let end = vet.length - 1;
  
    while (start <= end) {
      const leftThird = start + Math.floor((end - start) / 3);
      const rightThird = end - Math.floor((end - start) / 3);
  
      if (vet[leftThird] === target) {
        return leftThird;
      } else if (vet[rightThird] === target) {
        return rightThird;
      } else if (vet[leftThird] > target) {
        end = leftThird - 1;
      } else if (vet[rightThird] < target) {
        start = rightThird + 1;
      } else {
        start = leftThird + 1;
        end = rightThird - 1;
      }
    }
  
    return -1;
  }
  
  