function solution(name, yearning, photo) {
    var answer = [];
    let missObj = {};
    for(let i = 0; i < name.length; i ++){
        missObj[name[i]] = yearning[i];
    };
    for(let i = 0; i < photo.length; i ++){
        let sum = 0;
        let thisPhoto = photo[i]
        for(let j = 0; j < thisPhoto.length; j ++){
            if(missObj[thisPhoto[j]]){
                sum += missObj[thisPhoto[j]];
            }
        }
        answer.push(sum);
    }
    return answer;
}