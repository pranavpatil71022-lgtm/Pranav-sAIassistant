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
                {
                    text: `${systemPrompt}

                 PRANAV PUBLIC PROFILE SOURCES:
                 - LinkedIn: https://www.linkedin.com/in/pranav-g-patil-6230aa365
                 - GitHub: https://github.com/pranavpatil71022-lgtm
                 - Instagram: https://www.instagram.com/pranav.xyz_/
                 - Snapchat: https://www.snapchat.com/add/pranav_patil846

                 PRANAV CONTACT:
                 - Email: pranavpatil71025@gmail.com

                 PROFILE RULES:
                 - If the user asks how to contact, reach, or email Pranav, provide the configured email address.
                 - If the user asks about Pranav's public profile, skills, projects, coding journey, GitHub, LinkedIn, Instagram, or Snapchat, use the relevant public profile sources when available.
                 - Do not invent information.
                 - If information cannot be verified from the provided profile context or public sources, say that it is not available.

                USER QUESTION:
                ${message}`
                }
            ]
        }
    ],
    tools: [
        {
            url_context: {}
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
