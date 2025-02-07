import random
import time

def win_housoku(a,b):
    a_housoku = [1, a-1, a, a+1]

    b_housoku = []
    for i in range(1-b, b-2):
        l = []
        for j in range(0, b):
            l.append(i+j)
        b_housoku.append(l)
    
    housoku = []
    for i in a_housoku:
        for j in b_housoku:
            l = []
            for k in j:
                l.append(i*k)
            housoku.append(l)
    
    return housoku


def select(ita,px):
    px.append(ita.pop(random.randrange(len(ita))))


def narabe(a,b):
    ita = []
    for i in range(0, a**2):
        ita.append(i)
    
    p1 = []
    
    win_jouken = []
    for i in range(8):
        pick = select(ita,p1)
        for i in win_housoku(a,b):
            l = []
            for j in i:
                l.append(j+pick)
        win_jouken.append(l)
    
    print(win_jouken)

print(narabe(5,3))
