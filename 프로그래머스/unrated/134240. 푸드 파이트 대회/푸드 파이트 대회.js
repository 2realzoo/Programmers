function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i ++) {
        let currentFood = String(i);
        let foodNum = Math.floor(food[i] / 2)
        for(let j = 0; j < foodNum; j ++) {
        answer += currentFood;     
        }
    }
    let answer2 = "";
    for(let k = answer.length - 1; k >= 0; k--) {
        answer2 += answer[k];
    }
    return answer + "0" + answer2;
}