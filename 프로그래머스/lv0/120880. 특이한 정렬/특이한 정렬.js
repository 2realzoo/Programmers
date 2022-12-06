function solution(numlist, n) {
    let distance, shortest;
    let result = [];
    while(numlist.length > 0) {
        for(let i = 0; i < numlist.length; i ++) {
            if(i === 0) {
                distance = Math.abs(numlist[0] - n);
                shortest = 0
                }
            else if(Math.abs(numlist[i] - n) < distance) {
                distance = Math.abs(numlist[i] - n);
                shortest = i
                }
            else if(Math.abs(numlist[i] - n) === distance && numlist[i] - n > 0) {
                distance = Math.abs(numlist[i] - n);
                shortest = i
            }
            }
        result.push(numlist[shortest]);
        numlist.splice(shortest, 1);
    }
    return result;
}