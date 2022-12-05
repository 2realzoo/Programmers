function solution(a, b) {
    let aDiv = [];
    for(let i = 2; i <= a ; i ++){
        if(a % i === 0){
            aDiv.push(i)
        }
    };
    let common = aDiv.filter((el) => {
        if(b % el === 0) {
            return true;
        }
        else {
            return false;
        }
    });
    if(common.length) {
        a = a / common[common.length - 1]
        b = b / common[common.length - 1]
    };
    while(b > 1) {
        if(b % 5 === 0){
            b = b / 5;
        }
        else if(b % 2 === 0){
            b = b / 2;
        }
        else{
            return 2
        }
    };
    return 1
}