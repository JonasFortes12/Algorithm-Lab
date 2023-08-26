

export default function cubicSearch(taget, vet) {
  let position = -1;

  for (let i = 0; i < vet.length; i++) {
    for (let j = 0; j < vet.length; j++) {
      for (let k = 0; k < vet.length; k++) {
        if (
          vet[i] === taget &&
          vet[j] === taget &&
          vet[k] === taget
        ) {
          position = i;
        }
      }
    }
  }

  if (position !== -1) {
    return position;
  }
}
