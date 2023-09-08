/*

These algorithms return the largest number from a list of numbers.

 */

export function maxVal1(vet, length){
    let max = vet[0]
    for(let i = 0; i < length; i++){
        if(vet[i] > max) max = vet[i]
    }
    return max; 
}

export function maxVal2(vet, start, end){
    if(end - start <= 1){
        return Math.max(vet[start], vet[end])
    }else{
        let middle = Math.floor((start + end) / 2);
        let vet1 = maxVal2(vet, start, middle)
        let vet2 = maxVal2(vet, middle+1, end)
        return Math.max(vet1, vet2)
    }
}


