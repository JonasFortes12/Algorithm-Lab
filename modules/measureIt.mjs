

export default function measureComplexity(code, repeat = 1) {
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

  console.log(`Tempo médio: ${averageTime} minutes`);
  console.log(`Memória média: ${averageMemory} bytes`);
}
