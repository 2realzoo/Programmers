function solution(t, p) {
    var answer = 0;
    // t를 p.length로 나누기
        // for => 0부터 t.length - p.length >= i
    for(let i = 0; i <= t.length - p.length; i ++) {
        if(Number(t.slice(i, i + p.length)) <= Number(p)) {
            answer ++;
        }
    }
    return answer;
}