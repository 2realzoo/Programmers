function solution(a, b) {
    let days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    return days[new Date(`2016 ${a} ${b}`).getDay()]
}