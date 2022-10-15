from os import stat
import processData
import csv


def main():
    statements = []
    with open("data/student_statements.txt", "r")as f:
        
        for i in range(25):
            testimony = {}
            f.readline()
            f.readline()
            if(i == 11):
                key= f.readline().strip()[14:]
            else:
                key= f.readline().strip()[6:]
            value =f.readline().strip()[11:]
            testimony[key] = value
            statements.append(testimony)
            f.readline()


    with open('Statements.csv', 'w', newline='') as f:
        write = csv.writer(f)
        for statement in statements:
            write.writerow(statement)
            csv.DictWriter(f, fieldnames = statement).writerow(statement)


    peoples = processData.main()

    societies = []
    
    for i in peoples:
        if i.society == "N/A":
            continue
        for j in i.society:
            if not j in societies:
                societies.append(j)
    
    with open('Societies.csv', 'w', newline='') as f:
        write = csv.writer(f)
        for society in societies:
            write.writerow([society])


if __name__ == "__main__":
    main()