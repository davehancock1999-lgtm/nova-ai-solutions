import numpy as np
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-l6-v2")

memory_store = []

def store_memory(text):
    embedding = model.encode(text, normalize_embeddings=True)
    memory_store.append({
        "text": text,
        "embedding": embedding
    })

def search_memory(query, top_k=3):
    query_embedding = model.encode(query, normalize_embeddings=True)
    similarities = []

    for item in memory_store:
        sim = np.dot(query_embedding, item["embedding"])
        similarities.append((item["text"], sim))

        similarities.sort(key=lambda x: x[1], reverse=True)
        return [s[0] for s in similarities[:top_k]]    