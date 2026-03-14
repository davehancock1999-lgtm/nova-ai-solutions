from flask import Flask, request, jsonify
from flask_cors import CORS 
import threading 

import sys
sys.dont_write_bytecode = True
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent / "nais_system"))

from ai_engine import start_client_bot
from ai_engine import ask_ai
app = Flask(__name__)
CORS(app)

def main():
    print("Chatbot started. type 'quit' to exit.\n")
    start_client_bot("knowledge")
    conversation_history = []

    while True:
        user_input = input("You ")
        if user_input.lower() == "quit":
            print("Exciting chatbot. Goodbye!")
            break

        conversation_history.append(f"You: {user_input}")

        try:
            response = ask_ai(user_input)
            print("AI:", response)

            conversation_history.append(f"AI: {response}")
        except Exception as e:
            print("Error:", e)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_query = data.get("message")
    response = ask_ai(user_query)
    return jsonify({"response": response})

def run_web():
    app.run(port=5000, debug=False, use_reloader=False)

    threading.Thread(target=run_web, daemon=True).start()



if __name__ == "__main__":
     run_web()           

            


             
