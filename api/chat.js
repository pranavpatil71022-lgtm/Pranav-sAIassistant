export default async function handler(request, response) {

    if (request.method !== "POST") {
        return response.status(405).json({
            reply: "Use POST request."
        });
    }

    const { message, systemPrompt } = request.body || {};

    if (!message) {
        return response.status(400).json({
            reply: "Message is required."
        });
    }

 const apiKey = process.env.GEMINI_API_KEY;
 
if (!apiKey) {
    return response.status(500).json({
        reply: "GEMINI_API_KEY is missing."
    });
}

    try {

        const aiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
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
            }
        );

        const data = await aiResponse.json();

        if (!aiResponse.ok) {
    console.error(data);

    return response.status(aiResponse.status).json({
        reply: data.error?.message || "Gemini API Error"
    });
    }


        if (!data.candidates || !data.candidates.length) {

            return response.status(500).json({
                reply: "Gemini did not return a valid response."
            });

        }

        const replyText = data.candidates[0].content.parts[0].text;

        return response.status(200).json({
            reply: replyText
        });

    } catch (error) {

        console.error(error);

        return response.status(500).json({
           reply: error.message
        });

    }

}
