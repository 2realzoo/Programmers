function solution(s) {
    var str = '';
    let nums = {zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9};
    let en = '';
    for(let i = 0; i < s.length; i ++) {
        if(nums[en] || nums[en] === 0) {
                str += nums[en];
                en = '';
            }
        if(Number(s[i]) % 1 === 0) {
            str += s[i];
        }
        if(Number(s[i]) % 1 !== 0) {
            en += s[i];
        }
    }
    if(nums[en] || nums[en] === 0) {
                str += nums[en];
                en = '';
            }
    return Number(str);
}