function solution(n) {
    var answer = '';
    let strN = String(n);
    let largest;
    while(answer.length < strN.length) {
        for(let i = 0; i < strN.length; i ++) {
            if(i === 0) {
                largest = strN[i];
            }
            else if(largest < Number(strN[i])) {
                largest = strN[i];
            }
        }
        answer = answer + largest;
        strN = strN.slice(0, strN.indexOf(largest)) +'0'+ strN.slice(strN.indexOf(largest) + 1);
    }
    return Number(answer);
}