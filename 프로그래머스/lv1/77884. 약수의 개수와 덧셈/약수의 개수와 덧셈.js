function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i ++) {
        let measure = 0;
        for(let j = 1; j <= i; j ++) {
            if(i % j === 0) {
               measure ++; 
            }
        }
        if(measure % 2 === 0) {
            answer += i;
        }
        else {
            answer -= i;
        }
    }
    return answer;
}