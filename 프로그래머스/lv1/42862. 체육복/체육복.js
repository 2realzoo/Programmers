function solution(n, lost, reserve) {
    var answer = n - lost.length;
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    // 여벌 체육복 가져온 학생이 도난당했을 경우 
    let lost2 = []
    for(let i = 0; i < lost.length; i ++) {
        if(reserve.includes(lost[i])) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            answer ++;
        }else {
                lost2.push(lost[i])
            }
    }
    //이외 잃어버린 경우
   
    for(let i = 0; i < lost2.length; i ++) {
        if(lost2[i] === 1) {
            if(reserve.includes(lost2[i] + 1)) {
                reserve.splice(reserve.indexOf(lost2[i] + 1), 1);
                answer ++;
            }
        }else if(lost2[i] === n) {
            if(reserve.includes(lost2[i] - 1)) {
                reserve.splice(reserve.indexOf(lost2[i] - 1), 1);
                answer ++;
            }
        }else if(reserve.includes(lost2[i] - 1)){
            reserve.splice(reserve.indexOf(lost2[i] - 1), 1);
            answer ++;
        }else if(reserve.includes(lost2[i] + 1)){
            reserve.splice(reserve.indexOf(lost2[i] + 1), 1);
            answer ++;
        }
    }
    return answer;
}