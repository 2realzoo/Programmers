function solution(n) {
    let result = 0;
    for(let i = 1; i <= n; i ++) {
        result ++;
        while(result % 3 === 0 || String(result)[0] === '3' || String(result)[1] === '3' || String(result)[2] === '3') {
            result % 3 === 0 ? result ++ : result;
            String(result)[0] === '3' ? result ++ : result;
            String(result)[1] === '3' ? result ++ : result;
            String(result)[2] === '3' ? result ++ : result;
        }
    }
    return result;
}