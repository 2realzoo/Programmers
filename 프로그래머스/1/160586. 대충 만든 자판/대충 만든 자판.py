from functools import reduce
def solution(keymap, targets):
    #keymap의 갯수에 따른 키 갯수
    #키 중에 가장 적은 숫자 인덱스 찾기
    #찾아서 dictionary로 만들기
    #찾아서 더하기
    #다음 target에서도 같은 행동 반복
    alMap = {}
    answer = []
    for key in keymap:
        for al in key:
            if al in alMap and alMap[al] <= key.index(al):
                continue
            else:
                alMap[al] = key.index(al) + 1

    for target in targets:
        keyNum = 0
        for al in target:
            if al in alMap:
                keyNum += alMap[al]
            else:
                keyNum = -1
                break
        answer.append(keyNum)
    return answer