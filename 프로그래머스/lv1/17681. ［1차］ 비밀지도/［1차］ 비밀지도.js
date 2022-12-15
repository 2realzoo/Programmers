function solution(n, arr1, arr2) {
    var answer = [];
    arr1 = arr1.map((el) => {
        let strEl = el.toString(2);
        if(strEl.length < n) {
            while(strEl.length < n) {
                strEl = '0' + strEl;
            }
        }
        return strEl;
    });
    arr2 = arr2.map((el) => {
        let strEl = el.toString(2);
        if(strEl.length < n) {
            while(strEl.length < n) {
                strEl = '0' + strEl;
            }
        }
        return strEl;
    });
    for(let i = 0; i < n; i ++) {
        let row = '';
        for(let j = 0; j < n; j ++) {
            if(arr1[i][j] !== arr2[i][j]) {
                row += '#'; 
            }
            else if(arr1[i][j] === '1') {
                row += '#';
            }
            else if(arr1[i][j] === '0') {
                row += ' ';
            }
        }
        answer.push(row);
    }
    return answer;
}