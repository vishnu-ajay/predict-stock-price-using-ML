from flask import Flask
app = Flask(__name__)

@app.route('/enter')
def print_stock_price():
    return {"moir!!"}

if __name__ == "__main__":
    app.run(debug=True)