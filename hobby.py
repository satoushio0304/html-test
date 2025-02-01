import random
import json
import csv
import os


def load(path, type=''):
    # path -> [{}]
    if not os.path.exists(path):
        raise FileNotFoundError(f"ファイルが見つかりません: {path}")
    ext = os.path.splitext(path)[1].lower()
    if ext == '.json':
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    elif ext == '.csv':
        with open(path, encoding='utf-8') as f:
            l = list(csv.reader(f))
        if len(l) < 2:
            raise ValueError("CSVファイルのフォーマットが不正です")
        return [dict(zip(l[0], val)) for val in l[1:]]
    else:
        raise ValueError(f"対応していないファイル形式です: {ext}")
    


def choice(items):
    # [{'name','weight'}] -> ['name'] -> 'name'
    weighted = [item['name'] for item in items for _ in range(int(item['weight']))]
    return random.choice(weighted)



d = load('data/hobby.json')
print(choice(d))

d = load('data/hobby.csv')
print(choice(d))