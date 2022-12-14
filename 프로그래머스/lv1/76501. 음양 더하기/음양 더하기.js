function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < signs.length; i ++) {
        if(signs[i]) {
            answer = answer + absolutes[i];
        }
        else {
            answer = answer - absolutes[i];
        }
    }
    return answer;
}