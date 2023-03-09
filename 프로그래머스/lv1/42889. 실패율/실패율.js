function solution(N, stages) {
    var answer = [];
    let stage = [];
    for(let i = 1; i <= N + 1; i ++) {
        let num = stages.filter((el) => el === i);
        stage.push({"currentStage": i,"stopPlayer" : num.length});
    };
    for(let j = 1; j <= N + 1; j ++) {
        let everyPlayer = 0;
        for(let k = j; k <=  N + 1; k ++) {
            if(j <= k) {
                everyPlayer += stage[k - 1].stopPlayer;
            }
        }
        stage[j - 1].failParcent = stage[j - 1].stopPlayer / everyPlayer;
    }
    stage = stage.sort(function(a, b) {
        if(a.failParcent > b.failParcent) {
            return -1;
        }
        if(a.failParcent < b.failParcent) {
            return 1;
        }
        return 0;
    });
    stage = stage.filter((el) => el.currentStage !== N + 1)
    answer = stage.map((el) => el.currentStage)
    
    return answer;
}

// 마지막 스테이지 제외 