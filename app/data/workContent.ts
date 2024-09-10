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
      "Improved existing OCR pipelines for detecting and extracting information from documents",
      "Created auto-summarising app for extracting key information from lengthy sales letters that incorporates Generative AI and OCR."
    ]
  },
  {
    date: "November 2023 - January 2024",
    title: "ML/AI Developer and Tester Intern",
    company: "Sinarmas Land",
    imageSrc: "/images/work/sinarmas.svg",
    responsibilities: [
      "Contributed to the maintenance and development of the company's in-house machine learning pipelines, primarily OCR pipelines for detecting and extracting information from documents.",
      "Co-created new OCR pipelines for Vehicle Registration Number (VRN) detection and extraction."
    ]
  },
  {
    date: "August - December 2022",
    title: "Business Intelligence Analyst Intern",
    company: "Vidio.com",
    imageSrc: "/images/work/vidio.svg",
    responsibilities: [
      "Contributed to gaining insights and understandings regarding the platform's user behaviours and product analytics using SQL and visualisation tools",
      "Conducted some research on user funnelling progression, retention, and cancellation"
    ]
  },
  {
    date: "January - February 2020",
    title: "Marketing Research Intern",
    company: "Universitas Prasetiya Mulya",
    imageSrc: "/images/work/prasmul.svg",
    responsibilities: [
      "Aided in finding potential suitors for the launch of Universitas Prasetiya Mulya's Business Analytics masters' programme",
      "Conducted competitor research to identify opportunities for improving marketing efforts"
    ]
  },
  {
    date: "August 2019 - August 2023",
    title: "Bachelor of Mathematics",
    company: "Universitas Prasetiya Mulya",
    imageSrc: "/images/work/prasmul.svg",
    responsibilities: [
      "GPA: 3.88",
      "Thesis on \"Predictive Modelling of Changes in GOTO Stock Prices using Historical and Exogenous Data with LSTM and SARIMAX\"",
      "Beneficiary of the Young Scholar Indonesia Scholarship"
    ]
  }
];