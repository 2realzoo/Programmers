function solution(before, after) {
   return after.split('').reduce((acc, cur) => {
        before = before.replace(cur, 0)
        if(Number(before) === 0){
            return 1;
        }
        else {
            return acc;
        }
    }, 0)
}