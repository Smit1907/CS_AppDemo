from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simulated database
visitor_logs = []

# Route to render the HTML page
@app.route('/')
def home():
    return render_template('index.html')

# Route to collect visitor data
@app.route('/collect', methods=['POST'])
def collect_data():
    data = request.json
    visitor_logs.append(data)
    return jsonify({"message": "Visitor data logged successfully!"}), 200

# Route to view collected data
@app.route('/view-logs', methods=['GET'])
def view_logs():
    return jsonify(visitor_logs), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    # app.run(debug=True)
