import os
from memory import store_memory

def load_client_knowledge(client_folder):
    knowledge_folder = os.path.join(client_folder, "knowledge")

    if not os.path.exists(knowledge_folder):
        print(f"No knowledge folder found for {client_folder}")
        return
    
    for filename in os.listdir(knowledge_folder):
        file_path = os.path.join(knowledge_folder, filename)
        if os.path.isfile(file_path) and filename.endswith(".txt"):
            with open(file_path, "r", encoding="utf-8") as f:
                text = f.read().strip()
                if text:
                    store_memory(text)