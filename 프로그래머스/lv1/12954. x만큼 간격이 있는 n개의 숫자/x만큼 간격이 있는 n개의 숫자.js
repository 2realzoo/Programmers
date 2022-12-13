function solution(x, n) {
    var answer = [];
    let num = x;
    while(n > 0) {
        answer.push(num)
        num = num + x;
        n = n - 1;
    }
    return answer;
}