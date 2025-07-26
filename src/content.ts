// Content configuration file - Expanded version for portfolio content
export const siteConfig = {
  name: "Yaganti Lohithnath Reddy",
  title: "Research Intern at IIT Delhi | Frontend Developer | GenAI Enthusiast",
  location: "Hyderabad, Telangana, India",
  email: "lohithnath2910@gmail.com",
  phone: "+91-9059226084",
  bio:  "Budding and aspiring CSE student passionate about AI/ML, full-stack software development, technology, and leadership — driven to grow into a well-rounded and impactful engineer.",
  aboutbio: [
    "Hello! I’m Lohith, a 3rd-year Computer Science (Core) undergraduate at VIT Vellore, passionate about building impactful, intelligent, and user-focused technology. My interests span software engineering, AI/ML, full-stack development, and creative leadership.",

"I’m currently a Research Intern at IIT Delhi, working on deep learning models to solve real-world problems through applied AI. Previously, I interned as a Frontend Developer at Scientiflow (Biotech), where I helped develop neat and clean interfaces for scientific platforms.",

"Outside of academics, I serve as the Vice Chairperson of VIT’s Animation Club, where I lead tech-driven storytelling and design initiatives. I thrive in collaborative environments, enjoy mentoring peers, and love learning by building.",

"I'm proficient in Python, C++, JavaScript, React.js, Next.js, Node.js, TensorFlow, PyTorch, and OpenCV. Whether it’s crafting user-centric interfaces or exploring GenAI systems, I’m always excited to take on meaningful challenges.",

"As a budding engineer, I aspire to grow into a well-rounded professional—someone who builds with clarity, leads with creativity, and learns with purpose."
  ]
,
  // Navigation items
  navigation: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],

  // Skills data (flattened for home page use)
  skills: [
    { name: "Python" },
    { name: "C++" },
    { name: "JavaScript" },
    { name: "R" },
    { name: "C" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "OpenCV" },
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "Express.js" },
    { name: "Bootstrap" },
    { name: "Tailwind" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Jupyter" },
    { name: "Colab" },
    { name: "Docker" },
    { name: "Linux" },
    { name: "Figma" },
    { name: "Blender" },
    { name: "Photoshop" },
    { name: "DaVinci Resolve" },
    { name: "English" },
    { name: "Telugu" },
    { name: "Hindi" },
    { name: "Kannada" },
    { name: "Problem Solving" },
    { name: "Adaptability" },
    { name: "Communication" },
    { name: "Team Management" },
    { name: "Critical Thinking" },
    { name: "Leadership" },
  ],

  // Experience data
  experience: [
    {
      company: "IIT Delhi",
      title: "Research Intern",
      period: "April 2025 – Present",
      description: [
        "As a Research Intern at IIT Delhi, I work at the intersection of deep learning, computer vision, and data engineering. My responsibilities and contributions include:",
        "Developing and optimizing deep learning models using PyTorch and TensorFlow, with a focus on real-world performance, accuracy, and scalability.",
        "Streamlining research workflows by building reproducible and modular pipelines that support rapid experimentation and collaborative development.",
        "Managing large-scale data curation by collecting and processing video streams from over 5,000 CCTV camera feeds deployed across the VIT campus.",
        "Designing automated data processing pipelines for cleaning, annotation, and transformation, enabling efficient training of computer vision models.",
        "Benchmarking model performance across diverse scenarios to support research in surveillance intelligence, scene understanding, and anomaly detection.",
        "Collaborating with PhD researchers and faculty to align model development with academic goals and deployment feasibility."
      ],
      location: "IIT Delhi, New Delhi",
      highlighted: true,
    },
    {
      company: "Scientiflow (Biotech), VIT Vellore",
      title: "Frontend Developer Intern",
      period: "May 2025 – July 2025",
      description: [
        "As a frontend developer at Scientiflow, I contributed to building user-centric tools that simplify complex biotech workflows. Key responsibilities and achievements include:",
        "Designed and developed interactive dashboards to streamline biotech data analysis for researchers and end-users.",
        "Improved overall UI/UX usability by 65% by implementing intuitive design principles and user feedback loops.",
        "Integrated complex backend APIs to ensure seamless data flow and responsive frontends.",
        "Collaborated with cross-functional teams including designers, backend engineers, and scientists to reduce delivery bottlenecks by 30%.",
        "Contributed to code modularity and documentation, accelerating onboarding and long-term scalability of the codebase."
      ],
      location: "Scientiflow, VIT Vellore",
      highlighted: false,
    },
    {
      company: "Animation Club, VIT Vellore",
      title: "Vice Chairperson",
      period: "January 2025 – Present",
      description: [
        "As Vice Chairperson of one of VIT’s most active creative clubs, I combine leadership with a passion for design and mentorship. My contributions include:",
        "Mentoring a group of 30+ students in tools such as Blender, Figma, and Photoshop, supporting both technical growth and creative confidence.",
        "Leading and organizing workshops and events that boosted club engagement by 40%, expanding participation across departments.",
        "Spearheading the planning and execution of five major design showcases, each attracting 300+ attendees from across the institute.",
        "Encouraging a project-based learning culture within the club, resulting in increased member retention and portfolio-quality work output.",
        "Managing team coordination, resource planning, and club operations to sustain a consistent creative pipeline and collaborative spirit."
      ],
      location: "Animation Club, VIT Vellore",
      highlighted: false,
    },
  ],

  // Projects data
  projects: [
    {
      id: "01",
      title: "Inferra – PDF Q&A Chatbot",
      description:
        "Inferra is an AI-powered PDF chatbot that enables intelligent, conversational interaction with uploaded documents. It leverages LLaMA 3 language models—accessed via the IBM watsonx API—and utilizes ChromaDB for fast and efficient vector-based semantic search. Documents are processed using semantic chunking, allowing the chatbot to provide highly accurate, context-aware responses (90%+ accuracy). The system is built with a robust full-stack architecture using Next.js and Tailwind CSS, delivering a smooth and responsive user experience.",
      technologies: ["FastAPI", "ChromaDB", "LLMs", "Next.js"],
      liveUrl: "https://github.com/Lohithnath2910/Inferra",
      githubUrl: "https://github.com/Lohithnath2910/Inferra",
    },
    {
      id: "02",
      title: "SwiftBites – Campus Food Ordering",
      description:
        "SwiftBites is a campus-focused web platform designed to streamline food ordering and reduce queue times for over 5,000 students at VIT. I developed a real-time user interface that handles ordering, transactions, and live analytics, improving both user experience and operational efficiency. The platform also incorporated mess workflow analysis to optimize food delivery services across the institution.",
      technologies: ["React.js", "HTML", "CSS"],
      liveUrl: "https://swift-bites-project.vercel.app/",
      githubUrl: "https://swift-bites-project.vercel.app/",
    },
    {
      id: "03",
      title: "Smart Traffic Control System",
      description:
        "This project applies real-time computer vision and machine learning to optimize urban traffic flow. I led a team that engineered adaptive traffic signal logic using OpenCV, resulting in a 45% reduction in congestion. The system dynamically responds to traffic density, offering a scalable solution for smart city infrastructure. This project was awarded Best Civil Team at the Yantra Hackathon 2025..",
      technologies: ["OpenCV", "CV", "ML"],
      liveUrl: "https://github.com/SukrutaNadkarni/Advanced-Traffic-Control-System-for-Urban-Road-Network",
      githubUrl: "https://github.com/SukrutaNadkarni/Advanced-Traffic-Control-System-for-Urban-Road-Network",
    },
  ],

  // Social media links
  socialLinks: [
    {
      icon: "/social-icon.svg",
      url: "https://www.linkedin.com/in/yaganti-lohithnath-reddy-40a36728b/",
      label: "LinkedIn",
    },
    {
      icon: "/social-icon-3.svg",
      url: "https://github.com/lohithnath2910",
      label: "GitHub",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "IBM GenAI Developer",
      role: "Certification",
      text: "Successfully completed IBM's GenAI Developer Program, gaining in-depth knowledge of prompt engineering and foundation model deployment techniques.",
    },
    {
      id: 2,
      name: "Yantra Hackathon Winner",
      role: "Award",
      text: "Won the Best Civil Team Award at the Yantra Hackathon 2025 for developing an AI-based traffic control system using computer vision and adaptive logic.",
    },
  ],
};