const technologyReplies = [

{
    id: 1,
    title: "What is Linux?",
    category: "Operating Systems",
    keywords: [
        "linux",
        "linx",
        "ubuntu",
        "debian",
        "kali linux",
        "operating system linux"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Operating System",
        "Ubuntu",
        "Kali Linux"
    ],
    reply: `Linux is a free and open-source operating system created by Linus Torvalds in 1991. It acts as the bridge between computer hardware and software, allowing applications to run efficiently. Linux is widely known for its stability, security, flexibility, and excellent performance. It powers most web servers, cloud platforms, supercomputers, and many embedded devices around the world. Popular Linux distributions include Ubuntu, Debian, Fedora, Arch Linux, and Kali Linux. Developers, system administrators, and cybersecurity professionals prefer Linux because of its command-line tools, customization options, and strong community support. Learning Linux is highly valuable for careers in software development, cloud computing, DevOps, and cybersecurity.`
},

{
    id: 11,
    title: "What is Java?",
    category: "Programming",
    keywords: ["java"],
    difficulty: "Beginner",
    relatedTopics: ["Python","C++","JVM"],
    reply: `Java is a high-level, object-oriented programming language developed by Sun Microsystems, now owned by Oracle. It is designed to be platform-independent through the Java Virtual Machine (JVM), allowing the same program to run on different operating systems without modification. Java is widely used for Android application development, enterprise software, banking systems, desktop applications, and backend web development. Its reliability, security, and portability have made it one of the most popular programming languages for decades. Learning Java provides a strong foundation in object-oriented programming and software engineering.`
},

{
    id: 12,
    title: "What is C++?",
    category: "Programming",
    keywords: ["c++","cpp"],
    difficulty: "Beginner",
    relatedTopics: ["C","Java","Python"],
    reply: `C++ is a powerful programming language developed by Bjarne Stroustrup as an extension of the C language. It supports object-oriented, procedural, and generic programming, making it suitable for a wide range of applications. C++ is commonly used in game development, operating systems, embedded systems, robotics, and high-performance software because of its speed and efficiency. It provides direct control over system resources while still supporting modern programming concepts.`
},

{
    id: 13,
    title: "What is C Programming?",
    category: "Programming",
    keywords: ["c language","c programming","programming in c"],
    difficulty: "Beginner",
    relatedTopics: ["C++","Operating Systems"],
    reply: `C is one of the oldest and most influential programming languages. Developed by Dennis Ritchie at Bell Labs, it is widely used for operating systems, embedded systems, compilers, and system software. Many modern programming languages, including C++, Java, and Python, have been influenced by C. Learning C helps programmers understand memory management, pointers, and how software interacts with computer hardware.`
},

{
    id: 14,
    title: "What is SQL?",
    category: "Database",
    keywords: ["sql","structured query language"],
    difficulty: "Beginner",
    relatedTopics: ["MySQL","Database","NoSQL"],
    reply: `SQL, or Structured Query Language, is the standard language used to communicate with relational databases. It allows users to create, retrieve, update, and delete data efficiently. SQL is widely used in applications ranging from banking systems to e-commerce websites. Popular database systems such as MySQL, PostgreSQL, SQL Server, and Oracle Database all use SQL. Learning SQL is an essential skill for developers, analysts, and database administrators.`
},

{
    id: 15,
    title: "What is NoSQL?",
    category: "Database",
    keywords: ["nosql","non relational database"],
    difficulty: "Beginner",
    relatedTopics: ["MongoDB","SQL"],
    reply: `NoSQL refers to a category of databases designed to store and manage unstructured or semi-structured data. Unlike traditional relational databases, NoSQL databases offer greater flexibility and scalability. They are commonly used in modern web applications, big data systems, social media platforms, and cloud services. Popular NoSQL databases include MongoDB, Cassandra, Redis, and Firebase Firestore.`
},

{
    id: 16,
    title: "What is a Database?",
    category: "Database",
    keywords: ["database","db"],
    difficulty: "Beginner",
    relatedTopics: ["SQL","NoSQL"],
    reply: `A database is an organized collection of information that allows data to be stored, managed, and retrieved efficiently. Databases are used in almost every software application, including banking, hospitals, schools, e-commerce platforms, and social media. They ensure data remains secure, organized, and easily accessible when needed.`
},

{
    id: 17,
    title: "What is an API?",
    category: "Web Development",
    keywords: ["api","application programming interface"],
    difficulty: "Beginner",
    relatedTopics: ["REST API","JSON"],
    reply: `An API, or Application Programming Interface, is a set of rules that allows different software applications to communicate with each other. APIs enable developers to access services or data from other applications without needing to understand their internal implementation. They are widely used for payment gateways, weather services, authentication systems, AI services, maps, and countless other applications.`
},

{
    id: 18,
    title: "What is REST API?",
    category: "Web Development",
    keywords: ["rest api","restful api"],
    difficulty: "Beginner",
    relatedTopics: ["API","HTTP"],
    reply: `A REST API is a type of web API that follows the principles of Representational State Transfer (REST). It uses standard HTTP methods such as GET, POST, PUT, and DELETE to exchange information between clients and servers. REST APIs are widely used because they are simple, scalable, and compatible with almost every programming language and platform.`
},

{
    id: 19,
    title: "What is JSON?",
    category: "Web Development",
    keywords: ["json"],
    difficulty: "Beginner",
    relatedTopics: ["API","REST API"],
    reply: `JSON, or JavaScript Object Notation, is a lightweight format used for storing and exchanging data. It is easy for humans to read and easy for computers to process. JSON is the most common format used when APIs exchange information between applications and servers.`
},

{
    id: 20,
    title: "What is HTTP and HTTPS?",
    category: "Networking",
    keywords: ["http","https"],
    difficulty: "Beginner",
    relatedTopics: ["Internet","SSL","TLS"],
    reply: `HTTP stands for Hypertext Transfer Protocol and is used to transfer web pages between browsers and servers. HTTPS is the secure version of HTTP that encrypts communication using SSL/TLS, protecting sensitive information such as passwords and payment details. Modern websites use HTTPS to improve security and user trust.`
},

{
    id: 21,
    title: "What is Docker?",
    category: "DevOps",
    keywords: ["docker","container","containers"],
    difficulty: "Beginner",
    relatedTopics: ["Kubernetes","DevOps","Virtual Machine"],
    reply: `Docker is an open-source platform that allows developers to package applications along with all their dependencies into lightweight containers. A container ensures that an application runs the same way on every computer or server, eliminating compatibility issues. Docker is widely used in software development, cloud computing, DevOps, and microservices because it simplifies deployment, improves scalability, and speeds up development workflows. Learning Docker is valuable for developers who want to build and deploy applications efficiently.`
},

{
    id: 22,
    title: "What is Kubernetes?",
    category: "DevOps",
    keywords: ["kubernetes","k8s"],
    difficulty: "Intermediate",
    relatedTopics: ["Docker","Cloud Computing","DevOps"],
    reply: `Kubernetes, often called K8s, is an open-source platform used to manage, deploy, and scale containerized applications automatically. It works with Docker containers and helps organizations run applications reliably across multiple servers. Kubernetes provides features such as automatic scaling, load balancing, self-healing, and rolling updates, making it one of the most important tools in modern cloud infrastructure.`
},

{
    id: 23,
    title: "What is DevOps?",
    category: "DevOps",
    keywords: ["devops"],
    difficulty: "Beginner",
    relatedTopics: ["Docker","Kubernetes","CI/CD"],
    reply: `DevOps is a software development approach that combines development and IT operations to improve collaboration, automation, and software delivery. Instead of working separately, developers and operations teams work together throughout the software lifecycle. DevOps practices include automation, continuous integration, continuous delivery (CI/CD), monitoring, and infrastructure management, helping organizations release software faster and more reliably.`
},

{
    id: 24,
    title: "What is Version Control?",
    category: "Developer Tools",
    keywords: ["version control","source control"],
    difficulty: "Beginner",
    relatedTopics: ["Git","GitHub"],
    reply: `Version control is a system that tracks changes made to files over time. It allows developers to collaborate, restore previous versions, compare changes, and manage projects efficiently. Git is the most widely used version control system today. Using version control is considered a fundamental skill for every software developer because it improves teamwork and protects project history.`
},

{
    id: 25,
    title: "What is Git Branch?",
    category: "Developer Tools",
    keywords: ["git branch","branch"],
    difficulty: "Beginner",
    relatedTopics: ["Git","GitHub","Version Control"],
    reply: `A Git branch is an independent line of development within a Git repository. It allows developers to work on new features, bug fixes, or experiments without affecting the main codebase. Once the work is complete, the branch can be merged back into the main branch. Branching enables multiple developers to collaborate safely on the same project.`
},

{
    id: 26,
    title: "What is Node.js?",
    category: "Web Development",
    keywords: ["node","nodejs","node.js"],
    difficulty: "Beginner",
    relatedTopics: ["JavaScript","Express.js"],
    reply: `Node.js is an open-source JavaScript runtime environment that allows developers to run JavaScript outside a web browser. It is widely used to build backend servers, APIs, real-time applications, and scalable web services. Node.js is known for its speed, event-driven architecture, and ability to handle many simultaneous connections efficiently.`
},

{
    id: 27,
    title: "What is React?",
    category: "Web Development",
    keywords: ["react","reactjs","react.js"],
    difficulty: "Beginner",
    relatedTopics: ["JavaScript","Frontend","Node.js"],
    reply: `React is a JavaScript library developed by Meta for building modern user interfaces. It allows developers to create reusable components, making applications easier to develop and maintain. React is widely used for single-page applications, dashboards, and interactive websites because of its speed, flexibility, and large developer community.`
},

{
    id: 28,
    title: "What is Express.js?",
    category: "Web Development",
    keywords: ["express","express.js","expressjs"],
    difficulty: "Beginner",
    relatedTopics: ["Node.js","REST API"],
    reply: `Express.js is a lightweight web framework for Node.js that simplifies backend development. It provides tools for handling routes, requests, middleware, and APIs, allowing developers to build web servers quickly. Express is one of the most popular frameworks used for creating REST APIs and full-stack JavaScript applications.`
},

{
    id: 29,
    title: "What is MongoDB?",
    category: "Database",
    keywords: ["mongodb","mongo","mango db"],
    difficulty: "Beginner",
    relatedTopics: ["NoSQL","Database"],
    reply: `MongoDB is a popular NoSQL database that stores information in flexible, JSON-like documents instead of tables. It is designed to handle large amounts of unstructured data and is commonly used in modern web applications, cloud services, and real-time systems. MongoDB offers high performance, scalability, and flexibility for developers.`
},

{
    id: 30,
    title: "What is MySQL?",
    category: "Database",
    keywords: ["mysql"],
    difficulty: "Beginner",
    relatedTopics: ["SQL","Database"],
    reply: `MySQL is one of the world's most widely used relational database management systems. It stores information in tables and uses SQL to manage data. MySQL is commonly used in websites, business applications, e-commerce platforms, and content management systems because it is reliable, efficient, and easy to use.`
},

{
    id: 31,
    title: "What is an Operating System?",
    category: "Engineering",
    keywords: [
        "operating system",
        "os",
        "what is operating system"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Linux",
        "Windows",
        "Kernel"
    ],
    reply: `An Operating System (OS) is the most important software installed on a computer. It acts as a bridge between the user and the computer hardware, allowing applications to run smoothly. An operating system manages memory, storage, processors, files, security, and connected devices. Popular operating systems include Windows, Linux, macOS, Android, and iOS. Without an operating system, a computer cannot function properly because software would have no way to communicate with the hardware. Learning about operating systems is essential for anyone interested in programming, cybersecurity, cloud computing, or computer science.`
},

{
    id: 32,
    title: "What is a CPU?",
    category: "Engineering",
    keywords: [
        "cpu",
        "processor",
        "central processing unit"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "RAM",
        "Motherboard",
        "Computer Architecture"
    ],
    reply: `The CPU, or Central Processing Unit, is often called the brain of a computer. It executes instructions from programs, performs calculations, and controls the overall operation of the system. Every task you perform, from opening applications to playing games, involves the CPU. Modern processors contain multiple cores that allow them to perform several tasks simultaneously, improving performance and efficiency. Choosing the right CPU is important because it greatly affects the speed and capabilities of a computer.`
},

{
    id: 33,
    title: "What is RAM?",
    category: "Engineering",
    keywords: [
        "ram",
        "random access memory"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "CPU",
        "ROM",
        "Memory"
    ],
    reply: `RAM, or Random Access Memory, is temporary memory used by a computer to store data that is actively being used. It allows programs and the operating system to access information quickly. The more RAM a computer has, the more applications it can run smoothly at the same time. Unlike storage devices such as SSDs or hard drives, RAM loses its contents when the computer is turned off.`
},

{
    id: 34,
    title: "What is ROM?",
    category: "Engineering",
    keywords: [
        "rom",
        "read only memory"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "RAM",
        "BIOS"
    ],
    reply: `ROM, or Read-Only Memory, is permanent memory that stores important instructions required to start a computer. Unlike RAM, the data stored in ROM remains even after the computer is switched off. ROM contains firmware, such as the BIOS or UEFI, which helps initialize hardware and load the operating system during startup.`
},

{
    id: 35,
    title: "What is a Motherboard?",
    category: "Engineering",
    keywords: [
        "motherboard",
        "mainboard"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "CPU",
        "RAM",
        "Computer"
    ],
    reply: `A motherboard is the main circuit board inside a computer. It connects all major hardware components, including the CPU, RAM, storage devices, graphics card, and input/output ports. Every component communicates through the motherboard, making it one of the most essential parts of any computer system.`
},

{
    id: 36,
    title: "What is Computer Architecture?",
    category: "Engineering",
    keywords: [
        "computer architecture",
        "architecture"
    ],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "CPU",
        "Motherboard",
        "Operating System"
    ],
    reply: `Computer Architecture refers to the design and organization of a computer system, including its processor, memory, storage, and input/output devices. It determines how hardware components work together to execute instructions efficiently. Understanding computer architecture helps programmers optimize software and helps engineers design faster and more efficient computers.`
},

{
    id: 37,
    title: "What is a Compiler?",
    category: "Engineering",
    keywords: [
        "compiler",
        "compile"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Programming",
        "Interpreter"
    ],
    reply: `A compiler is software that translates source code written in a programming language into machine code that a computer can execute. Languages such as C and C++ use compilers. Compilers help detect programming errors, optimize code, and generate efficient executable programs.`
},

{
    id: 38,
    title: "What is an Algorithm?",
    category: "Engineering",
    keywords: [
        "algorithm",
        "algorithms"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Data Structure",
        "Programming"
    ],
    reply: `An algorithm is a step-by-step procedure used to solve a problem or perform a task. Algorithms are the foundation of computer programming and software development. Good algorithms improve efficiency, reduce execution time, and optimize the use of system resources. Learning algorithms is essential for coding interviews and software engineering careers.`
},

{
    id: 39,
    title: "What is a Data Structure?",
    category: "Engineering",
    keywords: [
        "data structure",
        "data structures"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Algorithm",
        "Programming"
    ],
    reply: `A data structure is a method of organizing and storing data so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, trees, graphs, and hash tables. Choosing the right data structure improves the performance of software applications and is a fundamental concept in computer science.`
},

{
    id: 40,
    title: "What is Software Engineering?",
    category: "Engineering",
    keywords: [
        "software engineering",
        "software engineer", "cs","CSE"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Programming",
        "SDLC"
    ],
    reply: `Software Engineering is the systematic process of designing, developing, testing, deploying, and maintaining software applications. It combines programming skills with engineering principles to build reliable, secure, and scalable software. Software engineers work in teams, use version control systems like Git, follow development methodologies, and continuously improve applications based on user needs.`
},

{
    id: 41,
    title: "What is Ethical Hacking?",
    category: "Cybersecurity",
    keywords: [
        "ethical hacking",
        "ethical hacker",
        "hacking"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Cybersecurity",
        "Penetration Testing",
        "Kali Linux"
    ],
    reply: `Ethical Hacking is the process of legally testing computer systems, networks, and applications to identify security vulnerabilities before malicious hackers can exploit them. Ethical hackers use the same techniques as attackers but always have permission from the organization. Their goal is to strengthen security by finding weaknesses and recommending solutions. Ethical hacking is widely used in banking, healthcare, government, and technology companies to protect sensitive information and improve cybersecurity.`
},

{
    id: 42,
    title: "What is Malware?",
    category: "Cybersecurity",
    keywords: [
        "malware",
        "malicious software"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Virus",
        "Ransomware",
        "Trojan"
    ],
    reply: `Malware is any software intentionally designed to damage, disrupt, or gain unauthorized access to computers and networks. Common types include viruses, worms, ransomware, spyware, and Trojans. Malware can steal personal information, encrypt files, slow down systems, or give attackers remote control over devices. Using antivirus software, updating systems regularly, and avoiding suspicious downloads are important ways to protect against malware.`
},

{
    id: 43,
    title: "What is Ransomware?",
    category: "Cybersecurity",
    keywords: [
        "ransomware"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Malware",
        "Cybersecurity"
    ],
    reply: `Ransomware is a type of malware that encrypts a victim's files or locks access to their computer until a ransom is paid. It is one of the most damaging cyber threats because it can stop businesses, hospitals, and government organizations from operating. Regular backups, strong security practices, and updated software help reduce the risk of ransomware attacks.`
},

{
    id: 44,
    title: "What is Phishing?",
    category: "Cybersecurity",
    keywords: [
        "phishing",
        "phishing attack"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Cybersecurity",
        "Email Security"
    ],
    reply: `Phishing is a cyber attack in which attackers pretend to be trusted individuals or organizations to trick people into revealing passwords, banking details, or other sensitive information. Phishing often occurs through fake emails, websites, text messages, or social media. Carefully checking links, verifying senders, and avoiding suspicious attachments are effective ways to stay protected.`
},

{
    id: 45,
    title: "What is Encryption?",
    category: "Cybersecurity",
    keywords: [
        "encryption",
        "encrypt"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "HTTPS",
        "Data Security"
    ],
    reply: `Encryption is the process of converting readable information into an unreadable format using mathematical algorithms. Only authorized users with the correct key can decrypt and access the original information. Encryption protects sensitive data during storage and transmission and is widely used in banking, messaging apps, online shopping, and secure websites.`
},

{
    id: 46,
    title: "What is a VPN?",
    category: "Cybersecurity",
    keywords: [
        "vpn",
        "virtual private network"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Networking",
        "Privacy"
    ],
    reply: `A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It helps protect your privacy by hiding your IP address and encrypting internet traffic. VPNs are commonly used to improve security on public Wi-Fi networks, access remote company resources, and enhance online privacy.`
},

{
    id: 47,
    title: "What is a Firewall?",
    category: "Cybersecurity",
    keywords: [
        "firewall"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Networking",
        "Cybersecurity"
    ],
    reply: `A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predefined security rules. It acts as a protective barrier between trusted internal networks and untrusted external networks such as the internet. Firewalls help prevent unauthorized access and protect systems from many types of cyber attacks.`
},

{
    id: 48,
    title: "What is Digital Forensics?",
    category: "Cybersecurity",
    keywords: [
        "digital forensics",
        "computer forensics"
    ],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Cybersecurity",
        "Incident Response"
    ],
    reply: `Digital Forensics is the process of collecting, preserving, analyzing, and presenting digital evidence after a cyber incident or crime. Investigators use specialized tools to recover deleted files, analyze system activity, and identify attackers. Digital forensics plays an important role in law enforcement, corporate investigations, and cybersecurity incident response.`
},

{
    id: 49,
    title: "What is Penetration Testing?",
    category: "Cybersecurity",
    keywords: [
        "penetration testing",
        "pentest",
        "pen testing"
    ],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Ethical Hacking",
        "Cybersecurity"
    ],
    reply: `Penetration Testing, often called Pentesting, is an authorized security assessment in which experts simulate real cyber attacks to identify vulnerabilities in systems, networks, or applications. The goal is to discover weaknesses before attackers do and provide recommendations for improving security. Regular penetration testing helps organizations maintain strong cybersecurity defenses.`
},

{
    id: 50,
    title: "What is Zero Trust Security?",
    category: "Cybersecurity",
    keywords: [
        "zero trust",
        "zero trust security"
    ],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Cybersecurity",
        "Authentication"
    ],
    reply: `Zero Trust Security is a modern cybersecurity approach based on the principle of "Never Trust, Always Verify." Every user, device, and application must continuously prove its identity before being granted access to resources. This approach reduces the risk of unauthorized access and has become a key security strategy for modern organizations and cloud environments.`
},

{
    id: 51,
    title: "What is Deep Learning?",
    category: "Artificial Intelligence",
    keywords: ["deep learning","dl"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["Machine Learning","Neural Networks"],
    reply: `Deep Learning is a branch of Machine Learning that uses artificial neural networks with multiple layers to learn patterns from large amounts of data. It powers technologies such as image recognition, speech recognition, language translation, self-driving cars, and modern AI chatbots. Deep Learning models improve automatically by analyzing large datasets and are the foundation of many advanced AI applications used today.`
},

{
    id: 52,
    title: "What is a Neural Network?",
    category: "Artificial Intelligence",
    keywords: ["neural network","neural networks","ann"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["Deep Learning","Machine Learning"],
    reply: `A Neural Network is a computer model inspired by the human brain. It consists of interconnected nodes called neurons that process information and learn patterns from data. Neural networks are widely used for image recognition, speech processing, recommendation systems, fraud detection, and generative AI. They form the core of modern deep learning systems.`
},

{
    id: 53,
    title: "What is a Large Language Model (LLM)?",
    category: "Artificial Intelligence",
    keywords: ["llm","large language model","language model"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["Generative AI","ChatGPT","Gemini"],
    reply: `A Large Language Model (LLM) is an advanced AI model trained on massive amounts of text to understand and generate human-like language. LLMs can answer questions, summarize information, translate languages, generate code, and assist with writing tasks. Examples include ChatGPT, Gemini, Claude, and Llama.`
},

{
    id: 54,
    title: "What is ChatGPT?",
    category: "Artificial Intelligence",
    keywords: ["chatgpt","gpt"],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: ["LLM","Generative AI","Gemini"],
    reply: `ChatGPT is an AI chatbot developed by OpenAI. It is powered by large language models and can understand natural language, answer questions, write code, summarize text, assist with learning, and generate creative content. ChatGPT is used by students, developers, businesses, and professionals worldwide for productivity and problem-solving.`
},

{
    id: 55,
    title: "What is Gemini?",
    category: "Artificial Intelligence",
    keywords: ["gemini","google gemini"],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: ["ChatGPT","LLM","Generative AI"],
    reply: `Gemini is Google's family of artificial intelligence models designed to understand and generate text, images, code, and other forms of information. Gemini powers many Google AI features and helps users with learning, programming, writing, research, and creative tasks.`
},

{
    id: 56,
    title: "What is Prompt Engineering?",
    category: "Artificial Intelligence",
    keywords: ["prompt engineering","prompt"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["LLM","Generative AI"],
    reply: `Prompt Engineering is the practice of writing clear and effective instructions for AI models to produce better responses. A well-designed prompt can significantly improve the quality, accuracy, and usefulness of AI-generated content. It has become an important skill for developers, researchers, and professionals working with modern AI systems.`
},

{
    id: 57,
    title: "What is Computer Vision?",
    category: "Artificial Intelligence",
    keywords: ["computer vision","vision ai"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["Deep Learning","Image Recognition"],
    reply: `Computer Vision is a field of Artificial Intelligence that enables computers to interpret and understand images and videos. It is used in facial recognition, medical imaging, autonomous vehicles, manufacturing, and security systems. Modern computer vision systems rely heavily on deep learning algorithms to achieve high accuracy.`
},

{
    id: 58,
    title: "What is Natural Language Processing (NLP)?",
    category: "Artificial Intelligence",
    keywords: ["nlp","natural language processing"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["LLM","Machine Learning"],
    reply: `Natural Language Processing (NLP) is a branch of Artificial Intelligence that enables computers to understand, process, and generate human language. NLP is used in chatbots, translation services, voice assistants, sentiment analysis, document summarization, and search engines. It allows people to communicate with computers using natural language.`
},

{
    id: 59,
    title: "What is Reinforcement Learning?",
    category: "Artificial Intelligence",
    keywords: ["reinforcement learning","rl"],
    difficulty: "Advanced",
    estimatedReadTime: "2 min",
    relatedTopics: ["Machine Learning","Deep Learning"],
    reply: `Reinforcement Learning is a type of Machine Learning in which an AI agent learns by interacting with an environment and receiving rewards or penalties for its actions. Over time, the agent improves its decision-making to maximize rewards. Reinforcement learning is widely used in robotics, gaming, recommendation systems, and autonomous vehicles.`
},

{
    id: 60,
    title: "What is Generative AI?",
    category: "Artificial Intelligence",
    keywords: ["generative ai","gen ai","genai"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["LLM","ChatGPT","Gemini"],
    reply: `Generative AI is a type of Artificial Intelligence that creates new content such as text, images, music, videos, and computer code. Unlike traditional AI systems that mainly analyze existing data, Generative AI produces original outputs based on patterns learned during training. It is transforming industries including education, software development, healthcare, marketing, and entertainment.`
},

{
    id: 61,
    title: "What is C#?",
    category: "Programming",
    keywords: ["c#","c sharp","csharp"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Java",".NET"],
    reply: `C# (pronounced C Sharp) is a modern, object-oriented programming language developed by Microsoft. It is widely used for desktop applications, web development, cloud services, game development with Unity, and enterprise software. C# is known for its clean syntax, strong security features, and excellent integration with the .NET platform. It is one of the most popular languages for building Windows applications and games.`
},

{
    id: 62,
    title: "What is PHP?",
    category: "Programming",
    keywords: ["php"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["HTML","MySQL"],
    reply: `PHP is a server-side scripting language mainly used for web development. It powers millions of websites, including many built with WordPress. PHP works together with HTML, CSS, JavaScript, and databases to create dynamic web applications. Its simplicity and large community make it a popular choice for backend development.`
},

{
    id: 63,
    title: "What is TypeScript?",
    category: "Programming",
    keywords: ["typescript","ts"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["JavaScript","Angular"],
    reply: `TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static typing. It helps developers catch errors during development, improve code quality, and build large applications more efficiently. TypeScript is widely used with modern frameworks such as Angular, React, and Vue.`
},

{
    id: 64,
    title: "What is Angular?",
    category: "Web Development",
    keywords: ["angular","angularjs"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["React","TypeScript"],
    reply: `Angular is a web application framework developed by Google. It is used to build fast, scalable, and feature-rich single-page applications. Angular uses TypeScript and provides built-in tools for routing, forms, dependency injection, and testing, making it suitable for enterprise-level projects.`
},

{
    id: 65,
    title: "What is Vue.js?",
    category: "Web Development",
    keywords: ["vue","vue.js","vuejs"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["React","Angular"],
    reply: `Vue.js is a progressive JavaScript framework used to build interactive user interfaces and web applications. It is known for its simplicity, flexibility, and excellent performance. Vue allows developers to gradually adopt its features, making it popular for both small projects and large applications.`
},

{
    id: 66,
    title: "What is Bootstrap?",
    category: "Web Development",
    keywords: ["bootstrap"],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: ["CSS","HTML"],
    reply: `Bootstrap is a popular front-end framework that helps developers create responsive and mobile-friendly websites quickly. It includes pre-designed components such as buttons, forms, navigation bars, and grids. Bootstrap reduces development time while maintaining a consistent design across devices.`
},

{
    id: 67,
    title: "What is Responsive Web Design?",
    category: "Web Development",
    keywords: ["responsive design","responsive website","responsive web design"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["CSS","Bootstrap"],
    reply: `Responsive Web Design is an approach to web development that ensures websites look and function well on desktops, tablets, and smartphones. It uses flexible layouts, media queries, and scalable images to adapt content to different screen sizes. Responsive design improves user experience and is an essential practice in modern web development.`
},

{
    id: 68,
    title: "What is Frontend Development?",
    category: "Web Development",
    keywords: ["frontend","front end","frontend development"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["HTML","CSS","JavaScript"],
    reply: `Frontend Development focuses on the parts of a website or application that users see and interact with directly. It involves creating layouts, buttons, forms, animations, and responsive interfaces using technologies such as HTML, CSS, JavaScript, and frameworks like React or Vue. A frontend developer aims to create attractive, fast, and user-friendly experiences.`
},

{
    id: 69,
    title: "What is Backend Development?",
    category: "Web Development",
    keywords: ["backend","back end","backend development"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["API","Database","Node.js"],
    reply: `Backend Development involves building the server-side logic of applications. It manages databases, authentication, APIs, and business logic that users do not see directly. Backend developers commonly use languages such as Java, Python, PHP, C#, and JavaScript with Node.js to create secure and scalable applications.`
},

{
    id: 70,
    title: "What is Full Stack Development?",
    category: "Web Development",
    keywords: ["full stack","full stack development","fullstack"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Frontend","Backend"],
    reply: `Full Stack Development combines both frontend and backend development. A full stack developer can design user interfaces, build server-side logic, manage databases, and integrate APIs. Full stack developers understand the complete software development process and are capable of building entire web applications from start to finish.`
},

{
    id: 71,
    title: "What is AWS?",
    category: "Cloud Computing",
    keywords: ["aws","amazon web services"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Cloud Computing","Azure","Google Cloud"],
    reply: `Amazon Web Services (AWS) is the world's largest cloud computing platform provided by Amazon. It offers hundreds of services including virtual servers, storage, databases, artificial intelligence, networking, and security. Businesses use AWS because it is reliable, scalable, secure, and allows organizations to pay only for the resources they use. AWS powers millions of websites, mobile applications, startups, and enterprise systems across the world.`
},

{
    id: 72,
    title: "What is Microsoft Azure?",
    category: "Cloud Computing",
    keywords: ["azure","microsoft azure"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["AWS","Google Cloud"],
    reply: `Microsoft Azure is a cloud computing platform developed by Microsoft. It provides services for computing, storage, networking, artificial intelligence, databases, analytics, and application development. Azure is widely used by businesses because it integrates well with Windows Server, Microsoft 365, and enterprise applications while providing secure and scalable cloud infrastructure.`
},

{
    id: 73,
    title: "What is Google Cloud Platform?",
    category: "Cloud Computing",
    keywords: ["gcp","google cloud","google cloud platform"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["AWS","Azure"],
    reply: `Google Cloud Platform (GCP) is Google's cloud computing platform that provides services such as virtual machines, cloud storage, artificial intelligence, machine learning, databases, networking, and data analytics. GCP is known for its strong AI capabilities, high-performance infrastructure, and integration with Google's global network.`
},

{
    id: 74,
    title: "What is SaaS?",
    category: "Cloud Computing",
    keywords: ["saas","software as a service"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["PaaS","IaaS"],
    reply: `Software as a Service (SaaS) is a cloud computing model where software applications are delivered over the internet instead of being installed on a local computer. Users simply access the software through a web browser. Examples include Gmail, Google Docs, Microsoft 365, Zoom, and Salesforce. SaaS reduces installation, maintenance, and infrastructure costs.`
},

{
    id: 75,
    title: "What is PaaS?",
    category: "Cloud Computing",
    keywords: ["paas","platform as a service"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["SaaS","IaaS"],
    reply: `Platform as a Service (PaaS) is a cloud computing model that provides developers with a complete platform for building, testing, deploying, and managing applications without managing the underlying infrastructure. Popular PaaS providers include Google App Engine, Azure App Service, and Heroku.`
},

{
    id: 76,
    title: "What is IaaS?",
    category: "Cloud Computing",
    keywords: ["iaas","infrastructure as a service"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["SaaS","PaaS"],
    reply: `Infrastructure as a Service (IaaS) is a cloud computing model where cloud providers offer virtual servers, storage, networking, and computing resources over the internet. Organizations can quickly deploy and scale infrastructure without purchasing physical hardware. AWS EC2, Azure Virtual Machines, and Google Compute Engine are common IaaS services.`
},

{
    id: 77,
    title: "What is the Internet?",
    category: "Networking",
    keywords: ["internet"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Networking","DNS","IP Address"],
    reply: `The Internet is a worldwide network that connects billions of computers, smartphones, servers, and other devices. It allows people to communicate, share information, browse websites, stream videos, and access online services. The Internet works using communication protocols such as TCP/IP, enabling devices across the globe to exchange data reliably.`
},

{
    id: 78,
    title: "What is an IP Address?",
    category: "Networking",
    keywords: ["ip","ip address","ipv4","ipv6"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["DNS","Internet"],
    reply: `An IP Address (Internet Protocol Address) is a unique numerical identifier assigned to every device connected to a network. It allows devices to locate and communicate with each other over the internet. There are two main versions: IPv4 and IPv6. IP addresses are essential for routing data between computers, websites, and online services.`
},

{
    id: 79,
    title: "What is DNS?",
    category: "Networking",
    keywords: ["dns","domain name system"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Internet","IP Address"],
    reply: `The Domain Name System (DNS) is often called the phonebook of the Internet. Instead of remembering numerical IP addresses, users type domain names such as google.com. DNS translates those domain names into IP addresses so browsers can locate and connect to the correct servers quickly and efficiently.`
},

{
    id: 80,
    title: "What is Bandwidth?",
    category: "Networking",
    keywords: ["bandwidth","network bandwidth"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Internet","Networking"],
    reply: `Bandwidth refers to the maximum amount of data that can be transmitted over a network connection within a given period of time. It is usually measured in bits per second (bps), Mbps, or Gbps. Higher bandwidth allows faster downloads, smoother video streaming, and better performance for online applications, although speed also depends on factors such as latency and network congestion.`
},

{
    id: 81,
    title: "What is GitLab?",
    category: "Developer Tools",
    keywords: ["gitlab"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Git","GitHub","Version Control"],
    reply: `GitLab is a web-based DevOps platform that provides Git repository hosting along with tools for Continuous Integration (CI), Continuous Deployment (CD), issue tracking, code review, and project management. It helps development teams collaborate efficiently while automating software development workflows. GitLab is widely used by organizations to build, test, and deploy applications from a single platform.`
},

{
    id: 82,
    title: "What is CI/CD?",
    category: "Developer Tools",
    keywords: ["ci","cd","ci/cd","continuous integration","continuous deployment"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["GitLab","DevOps","GitHub"],
    reply: `CI/CD stands for Continuous Integration and Continuous Deployment (or Continuous Delivery). It is a software development practice that automates building, testing, and deploying applications. CI ensures developers frequently merge code into a shared repository, while CD automatically delivers tested code to production or staging environments. CI/CD improves software quality, reduces deployment errors, and speeds up development cycles.`
},

{
    id: 83,
    title: "What is PostgreSQL?",
    category: "Database",
    keywords: ["postgresql","postgres","pgsql"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["MySQL","SQL","Database"],
    reply: `PostgreSQL is a powerful open-source relational database management system known for reliability, security, and advanced features. It supports complex queries, transactions, indexing, and large-scale applications. PostgreSQL is widely used in enterprise software, financial systems, GIS applications, and modern web platforms because of its stability and performance.`
},

{
    id: 84,
    title: "What is Redis?",
    category: "Database",
    keywords: ["redis"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["Database","Caching","MongoDB"],
    reply: `Redis is an in-memory data store used as a database, cache, and message broker. Because it stores data in memory instead of on disk, Redis delivers extremely fast performance. Developers commonly use Redis for caching, session management, real-time analytics, leaderboards, and high-speed applications.`
},

{
    id: 85,
    title: "What is Firebase?",
    category: "Cloud & Database",
    keywords: ["firebase"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Google Cloud","Database","Backend"],
    reply: `Firebase is a Backend-as-a-Service (BaaS) platform developed by Google. It provides services such as authentication, cloud databases, cloud storage, hosting, analytics, and push notifications. Firebase enables developers to build web and mobile applications quickly without managing traditional backend servers.`
},

{
    id: 86,
    title: "What is Supabase?",
    category: "Database",
    keywords: ["supabase"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Firebase","PostgreSQL"],
    reply: `Supabase is an open-source backend platform built on PostgreSQL. It provides authentication, real-time databases, storage, APIs, and serverless functions. Many developers choose Supabase as an alternative to Firebase because it uses SQL databases and is open source, making it flexible and developer-friendly.`
},

{
    id: 87,
    title: "What is Visual Studio Code?",
    category: "Developer Tools",
    keywords: ["vs code","vscode","visual studio code","code editor","source code editor","vs"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Programming","Extensions"],
    reply: `Visual Studio Code (VS Code) is a free source code editor developed by Microsoft. It supports hundreds of programming languages and offers features such as IntelliSense, debugging, Git integration, extensions, and terminal support. VS Code is one of the most popular code editors because it is lightweight, fast, and highly customizable.`
},

{
    id: 88,
    title: "What is IntelliSense?",
    category: "Developer Tools",
    keywords: ["intellisense","code completion"],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: ["VS Code","Programming"],
    reply: `IntelliSense is a code-completion feature available in many development environments such as Visual Studio and VS Code. It suggests variables, methods, classes, and functions while you type, helping developers write code faster, reduce errors, and improve productivity.`
},

{
    id: 89,
    title: "What is an IDE?",
    category: "Developer Tools",
    keywords: ["ide","integrated development environment"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["VS Code","Programming"],
    reply: `An Integrated Development Environment (IDE) is software that provides everything needed to develop applications in one place. An IDE typically includes a code editor, compiler, debugger, terminal, and project management tools. Popular IDEs include Visual Studio, IntelliJ IDEA, Eclipse, Android Studio, and PyCharm.`
},

{
    id: 90,
    title: "What is API Testing?",
    category: "Developer Tools",
    keywords: ["api testing","postman","api test"],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: ["API","REST API","Postman"],
    reply: `API Testing is the process of verifying that an Application Programming Interface (API) functions correctly, securely, and efficiently. Developers use tools like Postman, Insomnia, and automated testing frameworks to send requests, validate responses, and identify issues before applications are released. API testing improves software reliability and helps ensure systems communicate correctly.`
},

{
    id: 91,
    title: "What is Blockchain?",
    category: "Emerging Technology",
    keywords: ["blockchain","block chain"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Cryptocurrency","Bitcoin"],
    reply: `Blockchain is a distributed digital ledger that securely records transactions across multiple computers. Instead of storing information in one central location, blockchain keeps copies on many systems, making it difficult to alter or delete data. Blockchain technology is widely used in cryptocurrencies, supply chain management, healthcare, finance, and digital identity systems because it provides transparency, security, and trust without relying on a central authority.`
},

{
    id: 92,
    title: "What is Cryptocurrency?",
    category: "Emerging Technology",
    keywords: ["cryptocurrency","crypto","digital currency"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Blockchain","Bitcoin"],
    reply: `Cryptocurrency is a digital form of money that uses cryptography to secure transactions. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized blockchain networks. Bitcoin, Ethereum, and Solana are among the most popular cryptocurrencies. They are used for online payments, investments, decentralized finance, and blockchain-based applications.`
},

{
    id: 93,
    title: "What is Bitcoin?",
    category: "Emerging Technology",
    keywords: ["bitcoin","btc"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Blockchain","Cryptocurrency"],
    reply: `Bitcoin is the world's first decentralized cryptocurrency, introduced in 2009 by an individual or group using the name Satoshi Nakamoto. Bitcoin allows people to send and receive digital money without relying on banks or governments. Transactions are verified using blockchain technology, making Bitcoin secure, transparent, and resistant to tampering.`
},

{
    id: 94,
    title: "What is Internet of Things (IoT)?",
    category: "Engineering",
    keywords: ["iot","internet of things"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Sensors","Cloud Computing"],
    reply: `The Internet of Things (IoT) refers to a network of physical devices connected to the internet that can collect, exchange, and process data. Examples include smart homes, fitness trackers, connected vehicles, industrial sensors, and smart city systems. IoT improves automation, efficiency, and real-time monitoring across many industries.`
},

{
    id: 95,
    title: "What is Robotics?",
    category: "Engineering",
    keywords: ["robotics","robot"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Artificial Intelligence","Automation"],
    reply: `Robotics is a field of engineering and computer science focused on designing, building, and programming robots. Modern robots are used in manufacturing, healthcare, agriculture, logistics, space exploration, and research. Many robots combine sensors, artificial intelligence, and automation to perform complex tasks with high accuracy and efficiency.`
},

{
    id: 96,
    title: "What is Quantum Computing?",
    category: "Emerging Technology",
    keywords: ["quantum computing","quantum computer"],
    difficulty: "Advanced",
    estimatedReadTime: "2 min",
    relatedTopics: ["Computer Science","Artificial Intelligence"],
    reply: `Quantum Computing is an advanced computing technology that uses quantum bits, or qubits, instead of traditional binary bits. Unlike classical computers, quantum computers can process multiple possibilities simultaneously for certain types of problems. Quantum computing has the potential to revolutionize cryptography, scientific research, optimization, artificial intelligence, and drug discovery.`
},

{
    id: 97,
    title: "What is Big Data?",
    category: "Data Science",
    keywords: ["big data"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Data Science","Artificial Intelligence"],
    reply: `Big Data refers to extremely large and complex datasets that cannot be processed efficiently using traditional methods. Organizations analyze big data to discover patterns, improve decision-making, predict trends, and optimize business operations. Big data technologies are widely used in healthcare, finance, e-commerce, social media, and scientific research.`
},

{
    id: 98,
    title: "What is Data Science?",
    category: "Data Science",
    keywords: ["data science"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Machine Learning","Big Data"],
    reply: `Data Science is an interdisciplinary field that combines statistics, mathematics, programming, and machine learning to extract meaningful insights from data. Data scientists collect, analyze, visualize, and interpret data to help organizations make informed decisions. It plays an important role in artificial intelligence, business analytics, healthcare, finance, and scientific research.`
},

{
    id: 99,
    title: "What is Augmented Reality (AR)?",
    category: "Emerging Technology",
    keywords: ["augmented reality","ar"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Virtual Reality","Mixed Reality"],
    reply: `Augmented Reality (AR) is a technology that overlays digital information such as images, text, or 3D objects onto the real world using smartphones, tablets, or AR glasses. AR is widely used in gaming, education, healthcare, retail, and industrial training to create interactive and immersive experiences.`
},

{
    id: 100,
    title: "What is Virtual Reality (VR)?",
    category: "Emerging Technology",
    keywords: ["virtual reality","vr"],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: ["Augmented Reality","Metaverse"],
    reply: `Virtual Reality (VR) is a technology that creates a fully immersive digital environment using specialized headsets and controllers. Unlike Augmented Reality, VR completely replaces the real-world view with a computer-generated environment. VR is widely used in gaming, education, medical training, engineering simulations, military training, and virtual collaboration.`
},

{
    id: 101,
    title: "What is Python?",
    category: "Programming",
    keywords: [
        "python",
        "python language"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Programming",
        "AI",
        "Machine Learning"
    ],
    reply: `Python is a high-level, interpreted programming language known for its simple syntax and readability. It is widely used in web development, artificial intelligence, machine learning, automation, data science, cybersecurity, and scripting. Python has a large ecosystem of libraries and is considered one of the best languages for beginners.`
},

{
    id: 102,
    title: "What is Java?",
    category: "Programming",
    keywords: [
        "java",
        "java language"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "OOP",
        "Android Development",
        "Programming"
    ],
    reply: `Java is a powerful object-oriented programming language designed to run on any platform using the Java Virtual Machine (JVM). It is widely used for enterprise software, Android app development, web applications, and backend systems due to its reliability, portability, and security.`
},

{
    id: 103,
    title: "What is JavaScript?",
    category: "Programming",
    keywords: [
        "javascript",
        "js",
        "java script"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "HTML",
        "CSS",
        "Web Development"
    ],
    reply: `JavaScript is the programming language of the web. It enables websites to become interactive by handling user input, animations, dynamic content, and communication with servers. JavaScript is also used on the server side through Node.js, making it a full-stack programming language.`
},

{
    id: 104,
    title: "What is C?",
    category: "Programming",
    keywords: [
        "c",
        "c language"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Programming",
        "Operating Systems",
        "Memory Management"
    ],
    reply: `C is one of the oldest and most influential programming languages. It provides low-level access to memory, making it highly efficient for developing operating systems, embedded systems, device drivers, and performance-critical applications.`
},

{
    id: 105,
    title: "What is C++?",
    category: "Programming",
    keywords: [
        "c++",
        "cpp",
        "cplusplus"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Object-Oriented Programming",
        "Game Development",
        "DSA"
    ],
    reply: `C++ is an extension of the C programming language that supports object-oriented programming, templates, and advanced memory management. It is commonly used in competitive programming, game development, high-performance applications, and system software.`
},

{
    id: 106,
    title: "What is C#?",
    category: "Programming",
    keywords: [
        "c#",
        "c sharp",
        "csharp"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        ".NET",
        "Unity",
        "Programming"
    ],
    reply: `C# is a modern object-oriented programming language developed by Microsoft. It is mainly used for Windows applications, web development using ASP.NET, cloud services, and game development with the Unity game engine.`
},

{
    id: 107,
    title: "What is Go?",
    category: "Programming",
    keywords: [
        "go",
        "golang"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Backend Development",
        "Cloud Computing",
        "Concurrency"
    ],
    reply: `Go, also known as Golang, is an open-source programming language developed by Google. It is designed for simplicity, speed, and concurrency, making it ideal for cloud computing, backend APIs, networking software, and distributed systems.`
},

{
    id: 108,
    title: "What is Rust?",
    category: "Programming",
    keywords: [
        "rust",
        "rust language"
    ],
    difficulty: "Intermediate",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "Memory Safety",
        "Systems Programming",
        "Performance"
    ],
    reply: `Rust is a modern systems programming language focused on memory safety, speed, and concurrency. It prevents many common programming errors without using a garbage collector, making it popular for operating systems, web services, and security-sensitive software.`
},

{
    id: 109,
    title: "What is PHP?",
    category: "Programming",
    keywords: [
        "php",
        "php language"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Backend Development",
        "Web Development",
        "Laravel"
    ],
    reply: `PHP is a server-side scripting language designed for web development. It powers millions of websites and content management systems such as WordPress. PHP is commonly used to create dynamic websites, APIs, and backend services.`
},

{
    id: 110,
    title: "What is Swift?",
    category: "Programming",
    keywords: [
        "swift",
        "swift language"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "iOS Development",
        "Apple",
        "Mobile Development"
    ],
    reply: `Swift is Apple's modern programming language for developing applications on iOS, macOS, watchOS, and tvOS. It is designed to be fast, safe, and easy to read while supporting modern programming practices.`
},

{
    id: 111,
    title: "What is HTML?",
    category: "Programming",
    keywords: [
        "html",
        "hypertext markup language",
        "what is html",
        "html language",
        "html basics",
        "learn html"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "2 min",
    relatedTopics: [
        "CSS",
        "JavaScript",
        "Web Development"
    ],
    reply: `HTML (HyperText Markup Language) is the standard markup language used to create web pages and web applications. It defines the structure of a webpage using elements such as headings, paragraphs, images, links, tables, forms, and more.

HTML works together with CSS and JavaScript:
• HTML provides the structure.
• CSS controls the design and layout.
• JavaScript adds interactivity and dynamic behavior.

Every website on the internet uses HTML as its foundation, making it one of the first languages beginners learn in web development.`
},

{
    id: 112,
    title: "What is Cybersecurity?",
    category: "Technology",
    keywords: [
        "cybersecurity",
        "cyber security",
        "network security",
        "cybersecurity",
        "security",
        "cyber"
    ],
    difficulty: "Beginner",
    estimatedReadTime: "1 min",
    relatedTopics: [
        "Ethical Hacking",
        "Networking",
        "Linux"
    ],
    reply: `Cybersecurity is the practice of protecting computers, networks, applications, and data from cyber threats such as hacking, malware, phishing, and ransomware. It combines technologies, security policies, and best practices to keep digital systems secure and protect sensitive information.`
},

];