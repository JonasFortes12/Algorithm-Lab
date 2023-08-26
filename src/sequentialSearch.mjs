
export function sequentialSearch_v1(target, vet) {
    let index = -1;
    for (let i = 0; i < vet.length; i++) {
      if (vet[i] === target) {
        index = i;
      }
    }
    return index;
  }
  
  export function sequentialSearch_v2(target, vet) {
    for (let i = 0; i < vet.length; i++) {
      if (vet[i] === target) {
        return i;
      }
    }
    return -1;
  }
