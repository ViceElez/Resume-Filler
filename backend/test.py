import os
from groq import Groq
from dotenv import load_dotenv
from pathlib import Path

env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(dotenv_path=env_path)
api_key = os.getenv("API_KEY")

client = Groq(
    api_key=api_key
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Explain the importance of fast language models",
        }
    ],
    model="llama-3.3-70b-versatile",
)

print(chat_completion.choices[0].message.content)




# curl https://api.groq.com/openai/v1/chat/completions -s \
# -H "Content-Type: application/json" \
# -H "Authorization: Bearer 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" \
# -d '{
# "model": "meta-llama/llama-4-scout-17b-16e-instruct",
# "messages": [{
#     "role": "user",
#     "content": "Explain the importance of fast language models"
# }]
# }'