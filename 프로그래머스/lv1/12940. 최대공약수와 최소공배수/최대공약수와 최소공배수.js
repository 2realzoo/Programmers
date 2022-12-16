function solution(n, m) {
    var answer = [];
    let arr = [n , m].sort((a, b) => a - b)
    n = arr[0];
    m = arr[1];
    let common;
    for(let i = 0; i <= m; i ++) {
        if(n % i === 0 && m % i === 0) {
            common = i;
        }
    }
    answer.push(common);
    let multiple;
    for(let i = m; i <= n * m; i ++) {
        if(i % n === 0 && i % m === 0) {
            multiple = i;
            answer.push(multiple);
            return answer;
        }
    }
}