function solution(arr) {
    var answer = 0;
    for(let el of arr) {
        answer = answer + el;
    }
    return answer / arr.length;
}