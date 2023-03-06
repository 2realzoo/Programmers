function solution(dartResult) {
    var answer = [];
    let start = 0;
    for(let i = 0; i < dartResult.length; i ++) {
        let num = Number(dartResult.slice(start, i))
        if(dartResult[i] === "S") {
            answer.push(num)
            start = i + 1;
        }
        else if(dartResult[i] === "D") {
            answer.push(num ** 2)
            start = i + 1;
        }
        else if(dartResult[i] === "T") {
            answer.push(num ** 3)
            start = i + 1;
        }
        else if(dartResult[i] === "*") {
            answer[answer.length - 1] = answer[answer.length - 1] * 2;
            if(answer[answer.length - 2]) {
                answer[answer.length - 2] = answer[answer.length - 2] * 2;
            }
            start = i + 1;
        }
        else if(dartResult[i] === "#") {
            answer[answer.length - 1] = - answer[answer.length - 1];
            start = i + 1;
        }
    }
    return answer.reduce((acc, cur) =>  acc + cur);
}