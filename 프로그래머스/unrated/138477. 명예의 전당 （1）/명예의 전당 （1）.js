function solution(k, score) {
    var answer = [];
    let stage = [];
    for(let i = 0; i < score.length; i ++) { // 일차 
        if(i < k) {
            stage.push(score[i]);
            answer.push(Math.min(... stage));
        }
        else {
            stage.push(score[i]);
            let smallest = stage.indexOf(Math.min(...stage));
            stage.splice(smallest, 1);
            answer.push(Math.min(...stage));
            }
        }
    return answer;
}