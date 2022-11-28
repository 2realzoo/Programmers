function solution(numbers) {
    let largest;
    for(let i = 0; i < numbers.length; i ++){
        for(let j = i + 1; j < numbers.length; j ++){
            if(i === 0 && j === 1) {
                largest = numbers[i] * numbers[j];
            }
            else if(numbers[i] * numbers[j] > largest){
                largest = numbers[i] * numbers[j]
            }
        }
    }
    return largest;
}