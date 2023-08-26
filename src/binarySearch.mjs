
export default function binarySearch(target, vet, start, end) {

  const middle = Math.floor((start + end) / 2);
  
  if (vet[middle] === target) {
    return middle;
  }
  
  if (start >= end) {
    return -1;
  } else if (vet[middle] < target) {
    return binarySearch(target, vet, middle + 1, end);
  } else {
    return binarySearch(target, vet, start, middle - 1);
  }
}

