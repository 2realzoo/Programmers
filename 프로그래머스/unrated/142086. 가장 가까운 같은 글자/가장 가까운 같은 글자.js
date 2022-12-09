function solution(s) {
    var answer = [];
    let nearest;
    for(let i = 0; i < s.length; i ++) {
        if(s.slice(0, i).includes(s[i])) {
            for(let j = 0; j < s.slice(0, i).length; j ++) {
                if(s.slice(0, i)[j] === s[i]) {
                    nearest = j;
                }
            }
            answer.push(i - nearest);  
        }
        else {
            answer.push(-1);
        }
    }
    return answer;
}