
export default function quadraticSearch(target, vet) {
  let counter = 0;
  let position = -1;
  let entered = false;

  for (let i = 0; i < vet.length; i++) {
    for (let j = i; j < vet.length; j++) {
      if (vet[i] === target) {
        if (!entered) {
          position = i;
          if (vet[j] === target) {
            counter++;
          }
        }
      }
    }
    if (counter > 0) {
      entered = true;
    }
  }
  if (entered) {
    console.log("Position: " + position + "\nRepetition Counter: " + counter);
  }
}
