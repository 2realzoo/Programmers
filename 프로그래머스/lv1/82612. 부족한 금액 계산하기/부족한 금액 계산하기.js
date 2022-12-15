function solution(price, money, count) {
    var answer = money;
    function needMoney (price, count) {
        if(count === 0) {
            return 0;
        }
        return price * count + needMoney(price, count - 1)
    }
    answer -= needMoney(price, count);
    if(answer >= 0) {
        return 0;
    }
    return Math.abs(answer);
}