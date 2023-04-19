function solution(numbers, hand) {
    var answer = '';
    let board = [[1,2,3],[4,5,6],[7,8,9],[10, 0, 12]]
    let left = [3, 0];
    let right = [3, 2];
    let findIdx = (number) => {
        for(let i = 0; i < board.length; i ++) {
            if(board[i].includes(number)){
                return [i ,board[i].indexOf(number)]
            }
        }
    }
    let nearHand = (number) => {
        let numberIdx = findIdx(number);
        let leftLength = Math.abs(numberIdx[0] - left[0]) + Math.abs(numberIdx[1] - left[1]); // board 사용하기
        let rightLength = Math.abs(numberIdx[0] - right[0]) + Math.abs(numberIdx[1] - right[1]);
        if(leftLength > rightLength) {
            right = numberIdx;
            return "R";
        }else if(leftLength < rightLength) {
            left = numberIdx;
            return "L";
        }else if(leftLength === rightLength) {
            if(hand === "right"){
                right = numberIdx;
                return "R";
            }else {
                left = numberIdx;
                return "L";
            }
        };
    }
    for(let number of numbers) {
        let numberIdx = findIdx(number);
        switch (number) {
            case 1: case 4: case 7: case 10 :
                answer += "L";
                left = numberIdx;
                continue;
            case 3: case 6: case 9: case 12 :
                answer += "R";
                right = numberIdx;
                continue;
            case 2: case 5: case 8: case 0:
                answer += nearHand(number);
                continue;
            default:
        }
    }
    return answer;
}