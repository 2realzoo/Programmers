function solution(board, moves) {
    var answer = 0;
    let bucket = [];    
    let pickDollArr = (arr, arrIdx, boardIdx) => {
        if(!arr[arrIdx]){
            if(boardIdx === board.length - 1) {
                return;
            }
            else{
                pickDollArr(board[boardIdx + 1], arrIdx, boardIdx + 1)
            }
        }else if(arr[arrIdx]){
            bucket.push(arr[arrIdx]);
            arr[arrIdx] = 0;
            return;
        }
    }
    for(let move of moves){
        //move를 pickDollArr에 arrIdx로 넣기
        pickDollArr(board[0], move - 1, 0);
        // 이전 인형 확인 후 같으면 사라지게
        if(bucket[bucket.length - 1] === bucket[bucket.length - 2] && bucket.length) {
            answer += 2;
            bucket.splice(bucket.length - 2, 2);
        }
    }
    return answer;
}