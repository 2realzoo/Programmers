function solution(n) {
    let arr = Array(n).fill(1);
    for(let i = 0; i < n; i ++) {
        if(i === 0) arr[i] = 0;
        if(arr[i] === 1) {
            for(let j = i; j <= n; j += (i + 1)) {
                if(j === i) continue;
                if(arr[j ]) {
                    arr[j ] = 0;
                }
            }
        }
    }
    arr = arr.filter((el) => el === 1);
    return arr.length;
}