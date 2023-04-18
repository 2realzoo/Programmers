function solution(participant, completion) {
    let hashmap = {};
    for(let i of completion) {
       if(hashmap[i]) {
           hashmap[i] ++;
       }else {
           hashmap[i] = 1;
       }
    }
    for(let j of participant) {
        if(!hashmap[j] || hashmap[j] === 0){
            return j;
        }else {
            hashmap[j]--;
        }
    }
}