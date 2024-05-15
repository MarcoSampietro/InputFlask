from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def form():
    return render_template('imc2.html')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)