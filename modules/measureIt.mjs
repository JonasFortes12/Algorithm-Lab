import reportGenerator from "./reportGenerator.mjs";

export default function measureComplexity(code, repeat = 1, description) {
  let fullTime = 0;
  let fullMemory = 0;

  for (let i = 1; i <= repeat; i++) {
    const startTime = performance.now();
    const startMemory = process.memoryUsage().heapUsed;

    code();

    const endMemory = process.memoryUsage().heapUsed;
    const endTime = performance.now();

    fullTime += endTime - startTime
    fullMemory += endMemory - startMemory;
  }

  const averageTime = ((fullTime/repeat) / 60000).toFixed(4) // in minutes 
  const averageMemory = (fullMemory / repeat).toFixed(2); // in bytes

  reportGenerator(`
  ________________${description}_________________


  Iterações: ${repeat}
  Tempo Total: ${(fullTime/60000).toFixed(5)} minutos
  Memória Total: ${fullMemory.toFixed(2)} bytes

  Tempo médio: ${averageTime} minutos
  Memória média: ${averageMemory} bytes

  `, description)

}
