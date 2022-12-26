function solution(nums) {
    let uni = [];
    nums.forEach(num => {
        if(!uni.includes(num)) {
        uni.push(num);
        }
    });
    if(nums.length / 2 > uni.length) {
        return uni.length;
    }
    else {
        return nums.length / 2;
    }
}