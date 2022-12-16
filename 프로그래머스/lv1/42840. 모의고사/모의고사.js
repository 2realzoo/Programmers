function solution(answers) {
    var answer = [];
    const math1 = [1, 2, 3, 4, 5];
    const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    function score(arr) {
        let count = 0;
        for(let i = 0; i < answers.length; i ++) {
            if(!arr[i]) {
                arr.push(...arr);
            }
            if(answers[i] === arr[i]) {
                count ++;
            }
        }
        return count;
    };
    if(Math.max(score(math1), score(math2), score(math3)) === score(math1)) {
        answer.push(1);
    }
    if(Math.max(score(math1), score(math2), score(math3)) === score(math2)) {
        answer.push(2);
    }
    if(Math.max(score(math1), score(math2), score(math3)) === score(math3)) {
        answer.push(3);
    }
    
    return answer;
}