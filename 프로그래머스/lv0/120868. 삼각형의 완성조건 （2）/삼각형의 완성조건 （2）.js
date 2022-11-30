function solution(sides) {
    var answer = 0;
    if(sides[0] > sides[1]){ 
        for(let i = 1; i < sides[0] + sides[1]; i ++){
            if((sides[1] + i > sides[0] && i <= sides[0] )|| (i < sides[1] + sides[0] && i > sides[0])){ 
                answer ++;
            }
        }
    }
    else if(sides[1] > sides[0]){
        for(let i = 1; i < sides[1] + sides[0]; i ++){
            if((sides[0] + i > sides[1] && i <= sides[1] )|| (i < sides[0] + sides[1] && i > sides[1])){ 
                answer ++;
            }
        }
    }
    else if(sides[0] === sides[1]){
        for(let i = 1; i < sides[1] + sides[0]; i ++){
            if((sides[0] + i > sides[1] && i <= sides[1] ) || (i < sides[0] + sides[1] && i > sides[1])){ 
                answer ++;
            }
        }
    }
    return answer;
}