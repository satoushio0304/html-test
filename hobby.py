import random
import json

def load(path):
    with open(path, encoding='utf-8') as f:
        return f.read()

def tolist(data):
    return [line.split(',') for line in data.split('\n')]


print(tolist(load('data/data.csv')))


def random_choice():
    with open('data/hobby.json', encoding='utf-8') as f:
        print(random.choice([item['name'] for item in json.load(f) for _ in range(int(item['weight']))]))



    


