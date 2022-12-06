function solution(i, j, k) {
    var answer = 0;
    for(let num = i; num <= j; num ++){
        if(String(num).includes(String(k))) {
            for(let h = 0; h < String(num).length; h ++){
                if(String(num)[h] === String(k)){
                    answer ++
                }
            }
        }
    }
    return answer;
}