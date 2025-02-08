import random
import json

def random_choice(json_path):
    l = []
    with open(json_path, encoding='utf-8') as f:
        for item in json.load(f):
            for _ in range(int(item['weight'])):
                l.append(item['name'])
    return random.choice(l)


json_path = 'data/hobby.json'

print(random_choice(json_path))
    


