import numpy as np
def solution(board, h, w):
    board = np.array(board)
    color = board[h,w]
    answer = 0
    boardSize = np.shape(board)
    #아래
    if h<boardSize[0]-1 and board[h+1,w]==color:
       answer +=1
    #위
    if h>0 and board[h-1,w]==color:
        answer +=1
    #왼
    if w>0 and board[h, w-1]==color:
        answer +=1
    #오
    if w<boardSize[1]-1 and board[h,w+1]==color:
        answer +=1
    
    return answer