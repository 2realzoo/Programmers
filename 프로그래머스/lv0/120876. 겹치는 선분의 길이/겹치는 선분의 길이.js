function solution(lines) {
    let commons = [];
    for(let i = 0; i < 3; i ++) {
        for(let j = i + 1; j < 3;  j ++) {
            if(lines[i][1] > lines[j][0] && lines[i][0] < lines[j][1]) {
                commons.push([Math.max(lines[i][0],lines[j][0]),Math.min(lines[i][1], lines[j][1])])
            }
        }
    }
    if(!commons.length) return 0;
    commons = commons.reduce((acc, common, idx) => {
        if(idx === 0) {
            return [[common[0],common[1]]]
        }
        else if(acc[0][1] > common[0] && acc[0][0] < common[1]) {
            return [[Math.min(acc[0][0],common[0]), Math.max(acc[0][1], common[1])]]
        }
        else {
            return [common, ...acc];
        }
    },[[0,0]])
    return commons.reduce((acc, cur, idx) => {
        acc = acc + cur[1] - cur[0];
        return acc
    }, 0)
}