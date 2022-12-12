function solution(n) {
    var answer = 0;
    let three = n.toString(3);
    let reverse = '';
    for(let i = three.length - 1; i >= 0; i = i - 1) {
        reverse = reverse + three[i];
    };
    answer = parseInt(reverse, 3);
    return answer;
}