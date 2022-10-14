import processData


def main():
    statements = []
    with open("data/student_statements.txt", "r")as f:
        
        for i in range(25):
            testimony = {}
            f.readline()
            f.readline()
            key= f.readline().strip()[6:]
            value =f.readline().strip()[11:]
            testimony[key] = value
            statements.append(testimony)
            f.readline()


    peoples = processData.main()

    societies = []
    
    for i in peoples:
        if i.society == "N/A":
            continue
        for j in i.society:
            if not j in societies:
                societies.append(j)
    
    for i in societies:
        print(i)


if __name__ == "__main__":
    main()