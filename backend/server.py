from flask import Flask, request

app = Flask(__name__)

@app.route('/test',methods=['GET'])
def getTest():
    return {'test':"Hello World"}


@app.route('/init',methods=['GET'])
def init():
    return 'Server Running'


@app.route('/test/<id>',methods=['GET'])
def dynamicRoute(id):
    return 'Hello ' + str(id)

@app.route('/post/<text>',methods=['POST','GET'])
def postTest(text):
    if request.method == 'POST':
        return 'post request from react: ' + text
    else:
        return 'get request from react: ' + text


if __name__ == '__main__':
    app.run(debug=True)