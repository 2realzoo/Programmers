function solution(s){
    var answer = true;
    let pNum = 0;
    let yNum = 0;
    for(let i = 0; i < s.length; i ++) {
        if(s[i].toLowerCase() === 'p') {
            pNum ++;
        }
        else if(s[i].toLowerCase() === 'y') {
            yNum ++;
        }
    }
    if(pNum !== yNum) {
        answer = false;
    }
    return answer;
}