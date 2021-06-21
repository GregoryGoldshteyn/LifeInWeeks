import json
import datetime

one_day = datetime.timedelta(1)

dbfileloc = "./LifeInWeeks/src/assets/data.json"

d = datetime.date(1995, 11, 30)
print(d)

years = []

start_year = 1995

for i in range(100):
    year = {"id": i, "year": start_year + i, "weeks": []}
    date = datetime.date(start_year + i, 11, 30)
    for j in range(51):
        t = {}
        t["id"] = j
        t["start_date"] = date.isoformat()
        for k in range(6):
            date += one_day
        t["end_date"] = date.isoformat()
        t["notable_events"] = []
        date += one_day
        year["weeks"] += [t]
    
    t = {"id": 51, "start_date": date.isoformat()}
    while date < datetime.date(start_year + 1 + i, 11, 29):
        date += one_day

    t["end_date"] = date.isoformat()
    year["weeks"] += [t]

    years += [year]

print(years)

with open(dbfileloc, 'w') as data:
    json.dump(years, data, ensure_ascii=False, indent=2)