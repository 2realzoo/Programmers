function solution(s) {
    var answer = 0;
    let x = s[0];
    let xNum = 1;
    let otherNum = 0;
    if(s.length === 1) return 1;
    for(let i = 1; i < s.length; i ++){
        if(xNum === otherNum) {
            answer ++;
            x = s[i];
            xNum = 1;
            otherNum = 0;
        }
        else if(s[i] !== x){
            otherNum ++;
        }
        else if(s[i] === x){
            xNum ++
        }
        if(i === s.length - 1) {
            answer ++;
        }
    }
    return answer;
}