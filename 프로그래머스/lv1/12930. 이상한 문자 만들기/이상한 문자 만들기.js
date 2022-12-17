function solution(s) {
    let arr = s.split(' ') 
    let answer = arr.reduce((acc, cur) => {
        for(let i = 0; i < cur.length; i ++) {
            if(i % 2 === 0) {
               acc += cur[i].toUpperCase();
            }
            else {
                acc += cur[i].toLowerCase();
            }
        }
        acc += ' '
        return acc
    },'')
    return answer.slice(0, -1)
}