function solution(s, n) {
    var answer = '';
    let al = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < s.length; i ++) {
        let lower = s[i].toLowerCase();
        if(s[i] === ' ') {
            answer += ' ';
        }
        else if(lower === s[i]) {
            answer += al[(al.indexOf(s[i]) + n) % (al.length)];
        }
        else if(lower !== s[i]) {
            answer += al[(al.indexOf(lower) + n) % (al.length)].toUpperCase();
        }
    }
    return answer;
}