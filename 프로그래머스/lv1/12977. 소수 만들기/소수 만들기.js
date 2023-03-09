function solution(nums) {
    var answer = -1;
    let sums = [];
    const makeNum = (arr, toPick, sum) => {
        if(toPick === 0) {
            sums.push(sum);
            return;
        }
        for(let i = 0; i < arr.length; i ++) {
            let sliceArr = arr.slice(i + 1);
            makeNum(sliceArr, toPick - 1, sum + arr[i]);
        }
    }
    makeNum(nums, 3, 0);
    let primeNum = [];
    for(let j = 0; j < sums.length; j ++) {
        let count = 0;
        for(let k = 2; k < sums[j]; k ++) {
            if(sums[j] % k === 0) {
                count ++;
                break;
            }
        }
        if(count === 0) {
            primeNum.push(sums[j]);
        }
    }
    return primeNum.length;
}