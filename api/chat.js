export default async function handler(request, response) {
  const { message, systemPrompt } = request.body;
  const apiKey = process.env.GEMINI_API_KEY; 

  try {
    const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: systemPrompt },
              { text: message }
            ]
          }
        ]
      })
    });

    const data = await aiResponse.json();
    const replyText = data.candidates[0].content.parts[0].text;
    
    response.status(200).json({ reply: replyText });

  } catch (error) {
    console.error(error);
    response.status(500).json({ reply: "Error processing your request." });
  }
}