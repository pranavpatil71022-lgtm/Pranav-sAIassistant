# ChatBotproject

## Setup

1. Install Python dependencies:
   ```bash
   python -m pip install -r requirements.txt
   ```

2. Set your OpenAI API key:
   - Windows PowerShell:
     ```powershell
     $env:OPENAI_API_KEY = "your_api_key_here"
     ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

4. Open the site in your browser:
   `http://127.0.0.1:5000`

## Notes

- The chat widget now sends messages to a local `/chat` endpoint.
- The backend uses OpenAI to generate AI-based replies.
- If the API key is missing, the server returns an error message.
