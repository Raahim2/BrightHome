from flask import Flask, jsonify
from flask_cors import CORS
import pymongo

app = Flask(__name__)
CORS(app)

client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['BrightHomeApp']
collection = db['Products']


@app.route('/getProducts/<string:type>', methods=['GET'])
def get_products(type):
    fetched_products = list(collection.find({'type': type.upper()} , {'_id': 0}))
    return jsonify(fetched_products)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
