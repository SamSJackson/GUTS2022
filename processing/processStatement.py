import csv
import linecache
from PersonRaw import PersonRaw
from ast import literal_eval
import json


def main():
    people = []
    with open("data/people_data.csv", "r")as f:
        csv_reader = csv.reader(f, delimiter = ",")
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                line_count += 1

            else:
                if row[8] == "N/A":
                    person = PersonRaw(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], [], [])
                else:
                    person = PersonRaw(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], literal_eval(row[8]), [])

                people.append(person)
                line_count += 1

    return people
        


if __name__ == "__main__":
    main()