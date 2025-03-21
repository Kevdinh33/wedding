from flask import Flask, render_template, send_from_directory

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')
app.config['SECRET_KEY'] = 'key'

@app.route("/")
def home():
    return render_template ("index.html")

@app.route("/image")
def image():
    return send_from_directory("static", "/static/assets/img/portfolio/WeddingSchedule.jpg")

if __name__ == "__main__":
    app.run(debug=True)