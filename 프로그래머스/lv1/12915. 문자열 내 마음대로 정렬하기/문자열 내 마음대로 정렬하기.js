function solution(strings, n) {
    var answer = [];
    let sorted = strings.sort((a, b) => {
        if(a[n] < b[n]) {
            return -1;
        }
        else if(a[n] > b[n]) {
            return 11;
        }
        else if(a[n] === b[n]) {
            if(a.length >= b.length) {
                for(let i = 0; i < a.length; i ++) {
                    if(a[i] > b[i]) {
                        return 1;
                    }
                    else if(a[i] < b[i]) {
                        return -1;
                    }
                }
            }
            else if(a.length < b.length) {
                for(let i = 0; i < b.length; i ++) {
                    if(a[i] > b[i]) {
                        return 1;
                    }
                    else if(a[i] < b[i]) {
                        return -1;
                    }
                }
            }
            
        }
    })
    return sorted;
}