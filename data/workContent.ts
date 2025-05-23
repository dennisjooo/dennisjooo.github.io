export interface TimelineItemData {
    date: string;
    title: string;
    company: string;
    imageSrc: string;
    responsibilities: string[];
}

export const workExperienceData: TimelineItemData[] = [
    {
        date: "February 2024 - Now",
        title: "Analytics, AI, & ML Staff",
        company: "Sinarmas Land",
        imageSrc: "/images/work/sinarmas.svg",
        responsibilities: [
            "Spearheaded the optimization of OCR pipelines, leading to significant enhancements in document information extraction accuracy and processing velocity.",
            "Architected and successfully deployed an innovative AI-powered document summarization system, which drastically reduced sales letter review durations.",
            "Developed and seamlessly integrated automated OCR services for invoices and tax documents, achieving high-accuracy document processing at a significant scale.",
            "Experimented with and implemented cutting-edge AI models for document processing, including OCR, LLMs, and RAG, to enhance the company's data extraction and analysis capabilities.",
            "Engineered a robust enterprise agentic chatbot utilizing LangChain and OpenAI, effectively streamlining internal communications across diverse departments.",
        ],
    },
    {
        date: "November 2023 - January 2024",
        title: "ML/AI Developer and Tester Intern",
        company: "Sinarmas Land",
        imageSrc: "/images/work/sinarmas.svg",
        responsibilities: [
            "Actively contributed to the maintenance and advancement of the company's proprietary machine learning pipelines, with a primary focus on OCR systems for document information detection and extraction.",
            "Collaborated in the creation of novel OCR pipelines specifically designed for Vehicle Registration Number (VRN) detection and extraction.",
        ],
    },
    {
        date: "August - December 2022",
        title: "Business Intelligence Analyst Intern",
        company: "Vidio.com",
        imageSrc: "/images/work/vidio.svg",
        responsibilities: [
            "Played a key role in generating actionable insights and fostering a deeper understanding of platform user behaviors and product analytics through SQL and advanced visualization tools.",
            "Conducted in-depth research on user funneling progression, customer retention strategies, and cancellation patterns.",
        ],
    },
    {
        date: "January - February 2020",
        title: "Marketing Research Intern",
        company: "Universitas Prasetiya Mulya",
        imageSrc: "/images/work/prasmul.svg",
        responsibilities: [
            "Assisted in identifying and evaluating potential strategic partners for the successful launch of Universitas Prasetiya Mulya's Master's program in Business Analytics.",
            "Performed comprehensive competitor research to pinpoint opportunities for enhancing and optimizing marketing initiatives.",
        ],
    },
    {
        date: "August 2019 - August 2023",
        title: "Bachelor of Mathematics",
        company: "Universitas Prasetiya Mulya",
        imageSrc: "/images/work/prasmul.svg",
        responsibilities: [
            "Graduated with a distinguished GPA of 3.88.",
            "Authored a thesis on \"Predictive Modelling of Changes in GOTO Stock Prices using Historical and Exogenous Data with LSTM and SARIMAX\".",
            "Honored as a beneficiary of the prestigious Young Scholar Indonesia Scholarship.",
        ],
    },
];