function solution(s) {
    if(s.length === 4 || s.length == 6) {
        for(let i = 0; i < s.length; i ++) {
            if(!(Number(s[i]) % 1 === 0)) {
            return false;
            }
        }
         return true;
    }
    return false;
}