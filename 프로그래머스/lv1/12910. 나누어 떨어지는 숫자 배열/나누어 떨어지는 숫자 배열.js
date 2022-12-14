function solution(arr, divisor) {
    var answer = [];
    arr = arr.filter((el) => {
        if(el % divisor === 0) {
            return true;
        }
        return false;
    });
    if(arr.length === 0) {return [-1]};
    while(arr.length > 0) {
        answer.push(Math.min(...arr));
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    return answer;
}