function solution(seoul) {
    return seoul.reduce((acc, cur, idx) => {
        if(cur === 'Kim') {
            acc = `김서방은 ${idx}에 있다`
            return acc;
        }
        else return acc;
    }, `김서방은 0에 있다`)
}