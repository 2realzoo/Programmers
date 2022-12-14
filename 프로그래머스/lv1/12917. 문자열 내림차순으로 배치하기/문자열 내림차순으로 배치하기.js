function solution(s) {
    var answer = '';
    let strArr = s.split('');
    strArr.sort((a, b) => {
        if(a < b) {
            return 1;
        }
        else {
            return -1;
        }
    });
    answer = strArr.join('')
    return answer;
}