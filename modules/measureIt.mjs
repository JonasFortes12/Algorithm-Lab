import reportGenerator from "./reportGenerator.mjs";

export default function measureComplexity(code, repeat = 1, description) {
  let fullTime = 0;
  let allMemory = []

  for (let i = 1; i <= repeat; i++) {
    const startTime = performance.now();

    code();
  
    const endTime = performance.now();
    
    fullTime += endTime - startTime
    allMemory.push(process.memoryUsage().heapTotal)
  }

  const averageTime = (fullTime/repeat).toFixed(5) // in miliseconds 
  const memoryPeak = Math.max(...allMemory)

  reportGenerator(`
  ________________${description}_________________


  Iterações: ${repeat}
  Tempo Total: ${fullTime.toFixed(5)} milisegundos | ${(fullTime/60000).toFixed(5)} minutos 
  Tempo médio: ${averageTime} milisegundos | ${(averageTime/60000).toFixed(5)} minutos
  Memória Pico: ${memoryPeak} bytes

  `, description)

}
