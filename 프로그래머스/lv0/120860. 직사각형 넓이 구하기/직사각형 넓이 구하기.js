function solution(dots) {
    var answer = 0;
    let width = 0;
    let height = 0;
    // y축 같고 x축 다른 게 가로 길이
    // x축 같고 y축 다른 게 세로 길이
    for(let i = 0; i < dots.length; i ++) {
        let acc = dots[i]
        for(let j = i + 1; j < dots.length; j ++) {
            let cur = dots[j]
            if(acc[0] === cur[0] && height === 0){
            if(acc[1] < cur[1]) {
                height = cur[1] - acc[1];
            }
            else {
                height = acc[1] - cur[1];
            }
        }
        else if(acc[1] === cur[1] && width === 0){
            if(acc[0] < cur[0]) {
                width = cur[0] - acc[0];
            }
            else {
                width = acc[0] - cur[0];
            } 
        }
        }
    }
        answer = width * height;
        return answer;
    }
    