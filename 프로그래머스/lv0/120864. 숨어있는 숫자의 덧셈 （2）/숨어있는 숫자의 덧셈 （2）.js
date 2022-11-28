function solution(my_string) {
    var answer = 0;
    let number = '';
    for(let i = 0; i < my_string.length; i ++){
        if(Number(my_string[i]) % 1 === 0){
            number = number + my_string[i];
        }
        else if (number.length > 0){
            answer = answer + Number(number);
            number = '';
        }
    }
    answer = answer + Number(number);
    return answer;
}