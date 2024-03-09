from flask import Flask, request
import psycopg2
from psycopg2 import sql
import traceback

PASSWORD = 'mysecretpassword'



app = Flask(__name__)

@app.route('/create_user', methods=['POST'])
def create_user():
    conn = psycopg2.connect(
        database="postgres",
        host="localhost",
        user="postgres",
        password=PASSWORD,
        port="5432",
    )
    cursor = conn.cursor()
    data = request.json
    try:
        query = sql.SQL(f'INSERT INTO users(name, email, occupation, password) VALUES {data["first_name"] + " " + data["last_name"], data["email"], data["occupation"], data["password"]}')
        cursor.execute(query)
        conn.commit()


    except Exception as e:
        traceback.print_exc()
        cursor.close()
        conn.close()
        return "error", 400

    
    cursor.close()
    conn.close()
    return "okay" 



if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)