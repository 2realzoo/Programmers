function solution(spell, dic) {
    for(let i = 0; i < dic.length; i ++) {
      let result = spell.reduce((acc, cur, idx) => {
            dic[i] = dic[i].replace(cur, 0)
            if(Number(dic[i]) === 0 && dic[i].length === spell.length){
                return 1
            }
        },2)
      if(result === 1){
          return 1;
      }
}
    return 2;
}