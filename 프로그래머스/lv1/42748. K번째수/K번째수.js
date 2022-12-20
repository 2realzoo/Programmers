function solution(array, commands) {
    return commands.map((command) => {
        let sliced = array.slice(command[0] - 1, command[1]);
        let sorted = sliced.sort((a, b) => a - b);
        return sorted[command[2] - 1];
    })
}