function solution(dots) {

    let arr = [];
    for(let i = 0; i < dots.length; i ++) {
        for(let j = i + 1; j < dots.length; j ++) {
            arr.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]))
        }
    }
    return arr.reduce((acc, cur, idx) => {
        for(let i = idx + 1; i < arr.length; i ++) {
            if(cur === arr[i]) {
                acc = 1; 
                break;
            }
            else {
                acc;
            }
        }
        return acc;
    }, 0)
}