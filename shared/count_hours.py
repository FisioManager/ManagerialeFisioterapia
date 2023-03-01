import os, pandas, re
from datetime import datetime as dt, timedelta as td
from time import sleep

path_csv = "./count_hours/count_hour.csv"
path_session = "./count_hours/session.txt"
#format = "%a %b %d %H:%M:%S %Y"


def check_file(path):
    print(f"... looking for the file {path}:")

    if os.path.exists(path):
        print(f" file {path} found!")
        return True
    else:
        print(f" file {path} not found!")
        return False


def write_file(hours_minutes):
    print("... writing data to .csv file ...")

    try:
        file = open(path_csv, "a")
        name = input("Nome,Cognome: ")
        file.write(f"\n{name},{dt.now().ctime()},{hours_minutes}")
        file.close()

        print(" .csv file written successfully")
    except Exception as e:
        print(f" unable to write .csv file: {e}")

    sleep(1)


def init_session():
    try:
        session = open(path_session, "w")
        session.write(str(dt.now().hour) + ":" + str(dt.now().minute))
        session.close()

        print("Session file created successfully")
    except Exception as e:
        print(f"Session file could not be created: {e}")

    sleep(1)


def end_session():
    try:
        session = open(path_session, "r")
        tm_init = session.read()

        tm_init_re = re.match("(\d{1,2}):(\d{1,2})", tm_init)

        td_init = td(hours=int(tm_init_re.group(1)), minutes=int(tm_init_re.group(2)))
        td_end = td(hours=dt.now().hour, minutes=dt.now().minute)

        tm_delta = td_end - td_init
        write_file(re.sub(":\d{2}$", "", str(tm_delta)))

        session.close()
        os.remove(path_session)

        print("Session file processed successfully")
    except Exception as e:
        print(f"Session file could not be processed: {e}")

    sleep(1)


def print_res():
    print("\nThe result:")
    print(pandas.read_csv(path_csv))


def main():
    print("A basic script to count coding hours\n")

    if check_file(path_session):
        if not check_file(path_csv):
            csv = open(path_csv, "w")
            csv.write("Name,Surname,Date,HH:mm")
            csv.close()
        end_session()
        print_res()
        return

    print("Select the compilaition mode:")
    print(" 1] auto")
    print(" 2] manually")

    mode = input("choice: ")
    if mode == "1":
        init_session()
        return
    else:
        if not check_file(path_csv):
            csv = open(path_csv, "w")
            csv.write("Name,Surname,Date,HH:mm")
            csv.close()

        hours_minutes = input("HH:mm to add to file: ")
        write_file(hours_minutes)

        print_res()


main()
