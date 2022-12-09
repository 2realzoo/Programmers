function solution(n){
    let answer = 0;
    let nums = String(n).split('');
    for(let num of nums){
        answer = answer + Number(num);
    }
    return answer;
}