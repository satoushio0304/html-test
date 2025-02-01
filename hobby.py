import random
import json

def f1():
    hobby_list = ["書道","スプラ","ポケポケ"]
    hobby_num = len(hobby_list)
    x = random.randrange(hobby_num)
    y = hobby_list[x]
    return y

def f3():
    hobby_list = ["書道","スプラ","ポケポケ"]
    weight_list = [1, 2, 3]
    weighted_list = []
    for hobby, weight in zip(hobby_list, weight_list):
        for i in range(weight):
            weighted_list.append(hobby)
    hobby_num = len(weighted_list)
    x = random.randrange(hobby_num)
    y = weighted_list[x]
    return y

def f4():
    y = 1
    return y

def f2():
    hobby_json = "data/hobby.json"
    with open(hobby_json, encoding="utf-8") as f:
        hobby_dict = json.load(f)
    hobby_num = len(hobby_dict)
    x = random.randrange(hobby_num)
    y = hobby_dict[x]["name"]
    return y



print(f4())