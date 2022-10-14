import csv
import linecache
from PersonRaw import PersonRaw



def main():
    people = []
    with open("data/people_data.csv", "r")as f:
        csv_reader = csv.reader(f, delimiter = ",")
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                line_count += 1

            else:
                person = PersonRaw(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], [])
                people.append(person)
                line_count += 1


            
    print(people[3].name)


if __name__ == "__main__":
    main()