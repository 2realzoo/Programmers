function solution(wallpaper) {
    let files = [];
    for(let i = 0; i < wallpaper.length; i ++){
        for(let j = 0; j < wallpaper[i].length; j ++){
            if(wallpaper[i][j] === "#"){
            files.push([i, j]);
        }
        }
        
    }
    let lux, luy, rdx, rdy;
    for(let file of files){
        if(lux === undefined || lux > file[0]) lux = file[0];
        if(luy === undefined || luy > file[1]) luy = file[1];
        if(rdx === undefined || rdx < file[0]) rdx = file[0];
        if(rdy === undefined || rdy < file[1]) rdy = file[1];
    }
    return [lux, luy, rdx + 1, rdy + 1];
    // 각 파일의 좌표 나타내기
    // 가장 왼쪽, 가장 위쪽 좌표 생성 (시작점)
    // 가장 오른쪽, 가장 아래쪽 좌표 생성 (끝점)
    // 리턴 배열
}