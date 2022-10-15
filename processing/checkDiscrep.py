import csv
import processData

def main():
    societies = []
    with open("Societies.csv", "r")as f:
        csv_reader = csv.reader(f)
        for row in csv_reader:
            societies.append("".join(row))

    statements = []
    with open("Statements.csv", "r")as f:
        csv_reader = csv.reader(f)
        temp = ""

        for row in csv_reader:
            if temp == "":
                temp = row
            else:
                statements.append(temp + row)
                temp = ""
    

    peoples = processData.main()

    #get list of societies for each statement

    statementID = []
    for i in statements:
        temp = 0
        #print(i[0])
        for j in peoples:
            if i[0] != j.name:
                temp += 1
                continue
            else:
                statementID.append(temp)
                #print(i[0] + ":" + j.name)
                break
    #print(peoples[1].society)
    for i in range(24):
        for j in societies:
            #print(statements[i])
            if statements[i][1].lower() == "philosophy society" and i == 13:
                print(j)
            if j.lower() in statements[i][1].lower():
                #print(j)
                for k in peoples[statementID[i]].society:
                    #print(k)
                    #add check for N/A societies
                    if j.lower() == k.lower():  
                        print(str(i+1) + ":" + peoples[statementID[i]].name + ":" + j)
               
            
            
        


if __name__ == "__main__":
    main()