from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.form['user_message']
    bot_response = generate_response(user_message)
    return bot_response

def generate_response(user_message):
    if user_message.lower() == 'hello':
        return "Hello! How can I assist you today?"
    elif 'how are you' in user_message.lower():
        return "I'm just a bot, but thank you for asking!"
    elif 'bye' in user_message.lower():
        return "Goodbye! Have a great day!"
    elif "what is your name " in user_message.lower():
         return "My name is Doremon "
    elif "What are you doing"  in user_message.lower():
         return"I am fine" 
    else:
        return "I'm sorry, I didn't understand that."

if __name__ == '__main__':
    app.run(debug=True)

