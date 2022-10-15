def main():
    inpt = "Boyd Orr Building"

    # format: location : [(opening,closing),(subject,(lecture time))]
    # if empty string then can be used by anyone
    locationTimes = {"boyd orr building": [(800, 2100), ("computing science", (1000, 1200))],
                     "james watt building": [(900,1700), ("engineering", (1000, 1300))],
                     "adam smith building": [(900,1700), ("Business", (1000, 1100))],
                     "main building": [(900,1700), ("mathematics", (1100, 1300))],
                     "wolfson medical building": [(900,1700), ("medicine", (1300, 1500))],
                     "glasgow university union": [(900, 2300), ("", (900, 2300))],
                     "the hive": [(2200, 200), ("", (2200, 200))],
                     "guu": [(900, 2300), ("", (900, 2300))],
                     "sir alwyn williams building": [(900, 1700), ("", (900, 1700))],
                     "library": [(700, 200), ("", (700, 200))],
                     "queen margaret union": [(800, 2300), ("", (800, 2300))],
                     "qmu": [(800, 2300), ("", (800, 2300))],
                     "st andrews building": [(900, 1700), ("english literature", (900, 1200))],
                     "kelvingrove park": [(0000, 0000), ("", (0000, 0000))],
                     "joseph black building": [(900, 1700), ("chemistry", (1000, 1100))],
                     "kelvin building": [(900, 1700), ("physics", (900, 1100))]
                     }




    pass


if __name__ == "__main__":
    main()
