export function generateOrderedNumbers(amount) {
  const data = [];

  for (let i = 0; i < amount; i++) {
    const randomNumber = i + getRandomInt(2);
    data.push(randomNumber);
  }

  return data;
}


export function generateUnorderedNumbers(amount) {
    const data = [];
  
    for (let i = 0; i < amount; i++) {
      const randomNumber = getRandomInt(1000);
      data.push(randomNumber);
    }
  
    return data;
  }


function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
