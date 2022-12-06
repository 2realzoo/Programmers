function solution(chicken) {
    var answer = 0;
    let couponChicken = Math.floor(chicken / 10);
    let coupon = chicken - couponChicken * 9;
    answer = couponChicken;
    while(coupon >= 10) {
        couponChicken = Math.floor(coupon / 10);
        coupon = coupon - couponChicken * 9
        answer = answer + couponChicken;
    }
    return answer;
}