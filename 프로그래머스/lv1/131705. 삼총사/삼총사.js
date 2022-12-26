function solution(number) {
    var answer = 0;
    let sorted = number.sort((a, b) => a - b);
    // let plus = sorted.filter((el) => el > 0);
    // let minus = sorted.filter((el) => el < 0);
    // let zero = sorted.length - plus.length - minus.length
    // if(zero === 3) answer ++;
    // if(sorted.includes(0)) {
    //     for(let i = 0; i < minus.length; i ++) {
    //         for(let j = 0; j < plus.length; j ++) {
    //             if(minus[i] + plus[j] === 0) {
    //                 answer ++;
    //             }
    //         }
    //     }
    //     if(zero > 1) {
    //         answer = answer * zero;
    //     }
    // }
    // function findThree(arr1, arr2) {
    //     for(let k = arr1.length - 1; k >= 0; k--) {
    //         for(let m = arr2.length - 1; m >= 0; m --) {
    //             for(let h = m - 1; h >= 0; h --) {
    //                 if(arr2[m] + arr2[h] + arr1[k] === 0) {
    //                     answer ++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // findThree(minus, plus);
    // findThree(plus, minus);
    // return answer;
    for(let i = 0; i < number.length; i ++) {
            for(let j = i + 1; j < number.length; j ++) {
                for(let k = j + 1; k < number.length; k ++) {
                    if(number[j] + number[k] + number[i] === 0) {
                        answer ++;
                    }
                }
            }
        }
    return answer;
}