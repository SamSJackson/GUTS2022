import csv
import csv

#suspicious names are: Abdul Murphy, Oscar Brown, Alice Patterson, 
#Paul Butler, Scott Johnston, Eric Parkin, Jonny Craig

#Scott Johnston is likely mastermind

def main():

    names = ["Abdul Murphy", "Oscar Brown", "Alice Patterson", "Paul Butler", "Jonny Craig", "Eric Parkin"]

    security_data = []
    with open("data/security_logs.csv", "r")as f:
        entry = []
        csv_reader = csv.reader(f, delimiter = ",")
        f.readline()
        for row in csv_reader:
            entry = [row[1], row[2], row[3]]
            security_data.append(entry)

    #print(security_data)

    peoples = []
    with open("data/people_data.csv", "r")as f:
        entry = []
        csv_reader = csv.reader(f, delimiter = ",")
        f.readline()
        for row in csv_reader:
            entry = [row[1]]
            peoples.append(entry)

    #print(len(peoples))

    for i in security_data:
        for j in range(len(peoples)):
            if i[0] == peoples[j][0]: 
                temp = i[2].split("-")
                peoples[j].append([i[1], int(temp[0]), int(temp[1])])

    perp_Timetables = []
    for i in names:           
        for j in range(len(peoples)):
            if i.lower() == peoples[j][0].lower():
                perp_Timetables.append(peoples[j])
                peoples.pop(j)
                break
    #print(len(peoples))

    #print(perp_Timetables)


    #print(perp_Timetables)

    possibles = peoples

    #run through every innocent person
    for person in possibles:
        confirmed = 0

        #run through every perp
        for perp in perp_Timetables:
            #have break for either confirmed perp or non confirmed
            confirmed_2 = 0
            #run through each entry in perp
            for p_Entry in perp:
                confirmed_3 = 0
                #run through each entry in person
                for i_Entry in person:
                    if type(i_Entry) == 'str':
                        continue
                        #are they in the same building
                    if p_Entry[0].lower() == i_Entry[0].lower():
                        #at the same time
                        if p_Entry[1] <= i_Entry[1] and p_Entry[2] >= i_Entry[1]:
                            confirmed_3 += 1
                            #print(person[0])
                            break
                        elif i_Entry[1] <= p_Entry[1] and i_Entry[2] >= p_Entry[1]:
                            confirmed_3 += 1
                            #print(person[0])
                            break
                    

                if confirmed_3 == 1:
                    confirmed_2 += 1
                    break
            if confirmed_2 == 1:
                confirmed += 1
                #print(person[0])
            else:
                break
        if confirmed == 6:
            print(person[0])
            #   break   


if __name__ == "__main__":
    main()