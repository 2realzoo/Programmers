function solution(d, budget) {
    let answer = 0;
    let sorted = d.sort((a, b) => a - b);
    for(let i = 0; i < sorted.length; i ++) {
        budget -= sorted[i];
        if(budget < 0) {
            break;
        }
        if(budget === 0 || budget < sorted[i + 1]) {  
            answer ++;
            break;
        }
        answer ++;
    }
    return answer;
}