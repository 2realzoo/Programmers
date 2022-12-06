function solution(score) {
    let average = score.map((el) => {
        return (el[0] + el[1]) / 2;
    });
    return average.map((el) => {
        let count = 1;
        for(let i = 0; i < average.length; i ++){
            if(el < average[i]) {
                count ++;
            };
        };
        return count;
    })
}