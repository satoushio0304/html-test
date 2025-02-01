import random
import json

with open('data/hobby.json', encoding='utf-8') as f:
    print(random.choice([item['name'] for item in json.load(f) for _ in range(int(item['weight']))]))