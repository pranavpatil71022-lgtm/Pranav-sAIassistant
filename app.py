from flask import Flask, request, jsonify
import os
import openai

app = Flask(__name__, static_url_path='', static_folder='.')

SYSTEM_PROMPT = """
You are Pranav Patil's AI Assistant on his personal portfolio website.
Answer questions from visitors about Pranav in a friendly, concise way (2-4 sentences max, using bullet points when listing things).

Facts about Pranav:
- 17-year-old aspiring software engineer, currently preparing for JEE (Indian engineering entrance exam)
- Skills: HTML, CSS, JavaScript, C, C++, Data Structures & Algorithms, Git & GitHub, Problem Solving
- Journey: Started coding in 2025, built his first website in 2026, currently (2026) learning DSA and building projects, aiming to become a Software Engineer
- He builds modern, responsive websites and enjoys turning ideas into real projects
- Contact: via the Contact section on this site, or email at pranavpatil71025@gmail.com
- He has GitHub, LinkedIn, and Instagram profiles linked on the site

Only answer questions about Pranav, his skills, background, and how to contact him. If asked something unrelated, gently steer back to being his portfolio assistant. Keep replies short and readable on a small chat widget.
"""

openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/chat', methods=['POST'])
def chat():
    if not openai.api_key:
        return jsonify({'reply': 'AI API key is not configured.'}), 500

    data = request.get_json() or {}
    user_message = data.get('message', '').strip()
    if not user_message:
        return jsonify({'reply': 'Please send a non-empty message.'}), 400

    try:
        response = openai.ChatCompletion.create(
            model='gpt-4o-mini',
            messages=[
                {'role': 'system', 'content': SYSTEM_PROMPT},
                {'role': 'user', 'content': user_message}
            ],
            max_tokens=200,
            temperature=0.7,
        )
        AI_REPLY = response.choices[0].message.content.strip()
        return jsonify({'reply': AI_REPLY})
    except Exception as e:
        return jsonify({'reply': f'Error from AI service: {str(e)}'}), 500

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
