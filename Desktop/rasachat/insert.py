import sqlite3
import pandas as pd
data = pd.read_csv('training_data.csv')
conn = sqlite3.connect("/Users/avi/Desktop/rasachat/amex.db")
print(conn)
sql= "CREATE TABLE IF NOT EXISTS train_data(train_id Integer PRIMARY KEY AUTOINCREMENT,Intent TEXT, Entity TEXT, Answers TEXT); "
cur = conn.cursor()
cur.execute(sql)
for index, row in data.iterrows():
    intent= row['Intent']
    entity=row['Entity']
    answers=row['Answers']
    sql_ins="""INSERT INTO train_data(Intent, Entity,Answers) VALUES(?,?,?)"""
    values=(intent,entity,answers)
    cur=conn.cursor()
    cur.execute(sql_ins,values)
    conn.commit()
