import random
import json

# with open('data/hobby.json', encoding='utf-8') as f:
#     print(random.choice([item['name'] for item in json.load(f) for _ in range(int(item['weight']))]))



def put(a, b):
    if type(a) == type(''):
        if (a[0] == '"') & (a[-1] == '"'):
            a = a[1:-1]
        b.append(a)
        a = ''
    elif type(b) == type([]):
        b.append(a)
        a = []
    return a, b

str = '[{"weight":1,"name":"書道"},{"weight":1,"name":"ノート"}]'

keys_list = []
keys = []
key = ''
 
vals_list = []
vals = []
val = ''

state = 0

for i in str:
    if state == 0:
        if i == '[':
            state = 1
    elif state == 1: 
        if i == '{':
            state = 2
    elif state == 2:
        if i == '"':
            state = 3
    elif state == 3:
        if i == '"':
            key, keys = put(key, keys)
            state = 4
        else:
            key += i
    elif state == 4:
        if i == ':':
            state = 5
    elif state == 5:
        if i == ',':
            val, vals = put(val, vals)
            state = 6
        elif i == '}':
            val, vals = put(val, vals)
            vals, vals_list = put(vals, vals_list)
            keys, keys_list = put(keys, keys_list)
            state = 7
        else:
            val += i
    elif state == 6:
        if i == '"':
            state = 3
    elif state == 7:
        if i == ',':
            state = 8
        elif i == ']':
            state = 9
    elif state == 8:
        if i == '{':
            state = 2


print(keys_list)
print(vals_list)




    


