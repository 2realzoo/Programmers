function solution(n) {
    var answer = [];
    let strN = String(n)
    for(let i = strN.length - 1; i >= 0; i = i - 1) {
        answer.push(Number(strN[i]));
    }
    return answer;
}