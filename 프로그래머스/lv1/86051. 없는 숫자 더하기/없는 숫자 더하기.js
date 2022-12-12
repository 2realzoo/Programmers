function solution(numbers) {
    var answer = 0;
    let nums = '1234567890';
    for(let i = 0; i < numbers.length; i ++) {
        if(nums.includes(String(numbers[i]))){
            answer = answer + numbers[i];
        }
    }
    return 45 - answer;
}