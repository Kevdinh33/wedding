from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template ("index.html")

@app.route("/about")
def about():
    return render_template ("about.html")

@app.route("/ceremony")
def ceremony():
    return render_template ("ceremony.html")

@app.route("/reception")
def reception():
    return render_template ("reception.html")

if __name__ == "__main__":
    app.run(debug=True)