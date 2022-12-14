function solution(phone_number) {
    var answer = phone_number.slice(-4);
    let starNum = phone_number.slice(0, -4).length;
    while(starNum) {
        starNum = starNum - 1;
        answer = '*' + answer;
    }
    return answer;
}