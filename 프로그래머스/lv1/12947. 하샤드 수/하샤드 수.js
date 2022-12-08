function solution(x) {
    let strX = String(x);
    let sum = 0;
    for(let i = 0; i < strX.length; i ++) {
        sum = sum + Number(strX[i]);
    };
    if(x % sum === 0) {
        return true;
    }
    return false;
}