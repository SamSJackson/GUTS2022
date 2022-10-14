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

    


        


if __name__ == "__main__":
    main()