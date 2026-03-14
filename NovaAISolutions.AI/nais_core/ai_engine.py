from knowledge_loader import load_client_knowledge
from memory import search_memory
import requests
from duckduckgo_search import DDGS

def start_client_bot(client_name):
    " " " Initializes the chatbot with specific client data." " "
    client_folder = f"../clients/{client_name}"
    print(f"System: Loading Advanced Knowledge for{client_name}...")
    load_client_knowledge(client_folder)
    print("System: Knowledge Base indexed. AI is online and secure.")

def web_search(query):
        try:
            with DDGS() as ddgs:
                results = [r['body'] for r in ddgs.text(query, max_results=3)]
                return "\n".join(results)
            
        except:
            return "No live web data available."

def ask_ai(user_question):
    " " "Processes quesstions using RAG (Retrieval-Augemented Generaton)." " "
    # 1. Search private memory for relevant facts
    relevant_texts = search_memory(user_question, top_k=3)
    context = "\n".join(relevant_texts) if relevant_texts else ""

    web_info = web_search(user_question)
    print(f"DEBUG: Web results found:{web_info[:100]}")          

    # 2. Construct the high leevel prompt
    prompt = f"""
    You are a corporate AI assistant for Nova AI Solutions.
    Use the Internal Context for company questions and Live Web Data for general info.

    Internal Context: {context}
    Live Web Data: {web_info}

    User Question: {user_question}

    Answer:"""

    # 3. Connect to the local Llama 3 engine (Secure & Private)
    try:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                 "Authorization": f"Bearer", 
                 "Content-Type": "application/json"
            },
            json={
                 "model": "llama-3.3-70b-versatile",
                 "messages": [
                      {"role": "system", "content": "You are Nova AI Assistant. Use the provided context to answer."},
                      {"role": "user", "content": prompt}
                 ]
            }     
                    )    
        
        result = response.json()
        print(f"DEBUG: Groq says -> {result}")
        return result['choices'][0]['message']['content']
        

    except Exception as e:
         return f"System Error: Cloud connection failed. {str(e)}" 
         
        
