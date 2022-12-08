function solution(arr) {
    var answer = [];
    let smallest, idx;
    if(arr.length === 1) return [-1];
    for(let i = 0; i < arr.length; i ++) {
        if(i === 0) {
            smallest = arr[i];
            idx = i;
        }
        else if(arr[i] < smallest) {
            smallest = arr[i];
            idx = i;
        }
    }
    answer = arr.slice()
    answer.splice(idx, 1);
    return answer;
}