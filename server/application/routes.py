from application import app

@app.route("/")
@app.route("/index")
def index():
  return {"members": ["Member1", "Member2", "Member3"]}