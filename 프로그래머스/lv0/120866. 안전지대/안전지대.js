function solution(board) {
    let result = board.length ** 2;
    let boom = [];
    let danger = [];
    for(let i = 0; i < board.length; i ++) { //board의 하나의 배열
        for(let j = 0; j < board[i].length; j ++) { //배열의 요소 
            if(board[i][j] === 1) {
               boom.push([i, j]) 
            };
        }
    }
    
    if(boom.length === result) return 0;
    
    for(let el of boom) {
        if((el[0] === 0 && el[1] === 0) ){
            board[el[0]][el[1] + 1] = 1;
            board[el[0] + 1][el[1]] = 1;
            board[el[0] + 1][el[1] + 1] = 1;
        }
        else if(el[0] === 0 && el[1] === board.length - 1) {
            board[el[0]][el[1] - 1] = 1;
            board[el[0] + 1][el[1]] = 1;
            board[el[0] + 1][el[1] - 1] = 1;
        }
        else if(el[0] === board.length - 1 && el[1] === 0) {
            board[el[0] - 1][el[1]] = 1;
            board[el[0] - 1][el[1] + 1] = 1;
            board[el[0]][el[1] + 1] = 1;
        }
        else if(el[0] === board.length - 1 && el[1] === board.length - 1) {
            board[el[0]][el[1] -1] = 1;
            board[el[0] - 1][el[1]] = 1;
            board[el[0] - 1][el[1] - 1] = 1;
        }
        else if(el[0] === 0) {
            board[el[0]][el[1] + 1] = 1;
            board[el[0] + 1][el[1] + 1] = 1;
            board[el[0]][el[1] - 1] = 1;
            board[el[0] + 1][el[1]] = 1;
            board[el[0] + 1][el[1] - 1] = 1;
        }
        else if(el[1] === 0) {
            board[el[0]][el[1] + 1] = 1;
            board[el[0] + 1][el[1]] = 1;
            board[el[0] + 1][el[1] + 1] = 1;
            board[el[0] - 1][el[1]] = 1;
            board[el[0] - 1][el[1] + 1] = 1;
        }
        else if(el[1] === board.length - 1) {
            board[el[0]][el[1] - 1] = 1;
            board[el[0] + 1][el[1]] = 1;
            board[el[0] + 1][el[1] - 1] = 1;
            board[el[0] - 1][el[1]] = 1;
            board[el[0] - 1][el[1] - 1] = 1;
        }
        else if(el[0] === board.length - 1) {
            board[el[0] - 1][el[1]] = 1;
            board[el[0] - 1][el[1] + 1] = 1;
            board[el[0]][el[1] + 1] = 1;
            board[el[0]][el[1] -1] = 1;
            board[el[0] - 1][el[1] - 1] = 1;
        }
        else {
            board[el[0]][el[1] + 1] = 1;
            board[el[0]][el[1] -1] = 1;
            board[el[0] + 1][el[1]] = 1;
            board[el[0] + 1][el[1] + 1] = 1;
            board[el[0] + 1][el[1] - 1] = 1;
            board[el[0] - 1][el[1] + 1] = 1;
            board[el[0] - 1][el[1]] = 1;
            board[el[0] - 1][el[1] - 1] = 1;
        }
    }
    let dangerNum = board.reduce((acc, cur) => {
        for(let el of cur) {
            if(el === 1) {
                acc ++
            }
        }
        return acc
    }, 0)
    return result - dangerNum;
    }
   