function solution(a, b, n) {
    var answer = 0;

    function getCoke(n) {
        answer += (Math.floor(n / a) * b);
        if(n < a) {
            return;
        }    
        let coke = (Math.floor(n / a) * b) + (n % a);
        getCoke(coke);
    }
    getCoke(n)
    return answer;
}