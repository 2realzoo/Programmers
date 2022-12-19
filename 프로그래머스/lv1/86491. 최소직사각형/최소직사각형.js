function solution(sizes) {
    let sorted = sizes.map((size) => {
        return size.sort((a, b) => a - b);
    });
    let answer = sorted.reduce((acc, cur) => {
        if(acc[0] < cur[0]) {
            acc[0] = cur[0];
        }
        if(acc[1] < cur[1]) {
            acc[1] = cur[1];
        }
        return acc;
    },[0, 0])
    return answer[0] * answer[1];
}