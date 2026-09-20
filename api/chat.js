export default async function handler(request, response) {

    // =========================================================
    // METHOD CHECK
    // =========================================================

    if (request.method !== "POST") {
        return response.status(405).json({
            reply: "Method not allowed."
        });
    }


    // =========================================================
    // READ REQUEST BODY
    // =========================================================

    const body =
        request.body && typeof request.body === "object"
            ? request.body
            : {};

    const message =
        typeof body.message === "string"
            ? body.message.trim()
            : "";

    const systemPrompt =
        typeof body.systemPrompt === "string"
            ? body.systemPrompt
            : "";


    // =========================================================
    // VALIDATE MESSAGE
    // =========================================================

    if (!message) {
        return response.status(400).json({
            reply: "Please enter a message."
        });
    }


    // =========================================================
    // GEMINI API KEY
    // =========================================================

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("GEMINI_API_KEY is missing.");

        return response.status(500).json({
            reply: "The AI service is temporarily unavailable."
        });
    }


    // =========================================================
    // NORMALIZE MESSAGE
    // =========================================================

    const normalizedMessage = message
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();


    // =========================================================
    // PRANAV / GITHUB RESEARCH DETECTION
    // =========================================================

    const mentionsPranav =
        /\bpranav\b|\bpatil\b/i.test(normalizedMessage);

    const mentionsGitHub =
        /\bgithub\b|\bgit hub\b/i.test(normalizedMessage);

    const researchLanguage =
        /\b(about|according to|based on|using|from|what|which|how|show|tell|built|build|made|created|create|project|projects|repository|repositories|repo|repos|development|developed|developer|coding|code|work|technologies|technology|contributions|contribution|activity|activities|programming)\b/i
            .test(normalizedMessage);

    const isDirectGitHubRequest =
        /^(?:(?:can i get|show me|give me|open|visit)\s+)?(?:pranav(?:'s)?\s+)?(?:github|git hub)\s*$/i
            .test(message);

    const isPranavGitHubResearch =
        mentionsPranav &&
        mentionsGitHub &&
        researchLanguage &&
        !isDirectGitHubRequest;


    // =========================================================
    // GITHUB RESEARCH INSTRUCTIONS
    // =========================================================

    const githubResearchInstructions =
        isPranavGitHubResearch
            ? `

PRANAV GITHUB RESEARCH MODE

The user is asking for information about Pranav based on
his public GitHub profile.

This is a research question, NOT a request for the GitHub
profile link.

Primary GitHub source:

https://github.com/pranavpatil71022-lgtm

RULES:

1. Use the provided GitHub URL as the primary source.

2. Use URL Context to inspect the public GitHub page when
   it is publicly accessible.

3. Answer the user's exact question.

4. If the user asks what Pranav has built, identify actual
   repositories or projects visible on the GitHub profile.

5. If the user asks about technologies, mention technologies
   actually supported by the public GitHub information.

6. If the user asks about development work, describe actual
   publicly visible development work.

7. Do NOT give generic GitHub advice.

8. Do NOT say things like:
   "A good GitHub profile should include..."

9. NEVER invent repository names, project names, technologies,
   programming languages, commits, contributions, achievements,
   followers, stars, or development activity.

10. If the GitHub page cannot be accessed or does not contain
    enough information, clearly say that the information could
    not be verified.

11. If only part of the question can be verified, answer the
    verified part and clearly identify what is unavailable.

12. Do not claim private access to Pranav's GitHub account.

13. Do not use passwords, cookies, tokens, or private account
    information.

14. Do not return the GitHub link as the entire answer unless
    the user actually asks for the link.

15. The frontend handles direct social-profile cards.
    Do not create HTML cards.

16. Keep the answer natural, concise, and directly related
    to the question.

`
            : "";


    // =========================================================
    // GENERAL CORTEXFLOWAI INSTRUCTIONS
    // =========================================================

    const backendInstructions = `

CORTEXFLOWAI BACKEND INSTRUCTIONS

You are CortexFlowAI, an AI assistant created by Pranav Patil.

USER QUESTION:

${message}


PRANAV PUBLIC PROFILE SOURCES:

LinkedIn:
https://www.linkedin.com/in/pranav-g-patil-6230aa365

GitHub:
https://github.com/pranavpatil71022-lgtm

Instagram:
https://www.instagram.com/pranav.xyz_/

Snapchat:
https://www.snapchat.com/add/pranav_patil846


PRANAV CONTACT:

Email:
pranavpatil71025@gmail.com


PROFILE RULES:

- Use the approved Pranav profile information from the
  frontend system prompt when answering questions about Pranav.

- Do not invent information about Pranav.

- Do not invent projects, achievements, education, experience,
  skills, technologies, links, or personal information.

- If information is unavailable or cannot be verified, clearly
  say so.

- Never claim private access to Pranav's accounts.

- Never use passwords, cookies, tokens, or private credentials.

- If the user asks how to contact Pranav, provide the configured
  email address.

- If the user asks about Pranav's public profile, skills,
  projects, coding journey, or development work, answer using
  the approved profile information and relevant public sources.

- Do not automatically list every social-media link when the
  user asks a general question about Pranav.

- Direct social-profile requests are handled by the frontend.

- Do not turn a research question into a social-profile link
  response.

- Do not turn a direct social-profile request into a long
  research response.

- Answer the actual question directly.

`;


    // =========================================================
    // FINAL PROMPT
    // =========================================================

    const finalPrompt = `
${systemPrompt}

${backendInstructions}

${githubResearchInstructions}
`;


    // =========================================================
    // CALL GEMINI
    // =========================================================

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
                                    text: finalPrompt
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


        // =====================================================
        // READ RESPONSE
        // =====================================================

        const data = await aiResponse.json();


        // =====================================================
        // API ERROR
        // =====================================================

        if (!aiResponse.ok) {

            console.error(
                "Gemini API error:",
                data?.error || data
            );

            return response.status(500).json({
                reply:
                    "The AI service is temporarily unavailable. Please try again shortly."
            });
        }


        // =====================================================
        // CHECK CANDIDATES
        // =====================================================

        const candidates =
            Array.isArray(data?.candidates)
                ? data.candidates
                : [];

        if (candidates.length === 0) {

            console.error(
                "Gemini returned no candidates:",
                JSON.stringify(data)
            );

            return response.status(500).json({
                reply:
                    "The AI service did not return a usable response."
            });
        }


        // =====================================================
        // GET RESPONSE PARTS
        // =====================================================

        const parts =
            Array.isArray(candidates[0]?.content?.parts)
                ? candidates[0].content.parts
                : [];


        // =====================================================
        // EXTRACT TEXT
        // =====================================================

        const replyText = parts
            .map((part) => {
                return typeof part?.text === "string"
                    ? part.text.trim()
                    : "";
            })
            .filter(Boolean)
            .join("\n\n");


        // =====================================================
        // EMPTY RESPONSE
        // =====================================================

        if (!replyText) {

            console.error(
                "Gemini returned no text:",
                JSON.stringify(data)
            );

            return response.status(500).json({
                reply:
                    "The AI service did not return a usable response."
            });
        }


        // =====================================================
        // SUCCESS
        // =====================================================

        return response.status(200).json({
            reply: replyText
        });


    } catch (error) {

        console.error(
            "Gemini request failed:",
            error
        );

        return response.status(500).json({
            reply:
                "The AI service is temporarily unavailable. Please try again shortly."
        });
    }
}