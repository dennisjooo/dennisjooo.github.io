export type Certification = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    link: string;
}

export const certifications: Certification[] = [
    {
        id: 1,
        title: 'Mastering AI Bootcamp',
        issuer: 'Ruangguru Engineering Academy',
        date: '2023',
        description: 'A 2-month bootcamp covering practical Machine Learning and deployment using Fast.API and Gradio.',
        link: 'https://drive.google.com/drive/folders/1ZhPL2rmv7qES_NUtJy53kmB0AfFgfdQS?usp=sharing'
    },
    {
        id: 2,
        title: 'DataCamp Courses',
        issuer: 'DataCamp',
        date: '2023',
        description: 'Completed courses on Big Data with PySpark, Deep Learning with Python, and Applied Finance in Python.',
        link: 'https://drive.google.com/file/d/1Z0oWPLLrxiswjgU1D2YLkz4_8Bup5uU2/view?usp=sharing'
    },
    {
        id: 3,
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI',
        date: '2022',
        description: 'Comprehensive course on Neural Networks and their architectures.',
        link: 'https://drive.google.com/drive/folders/1dR0Id6HJRQvMP2OZdYzTBjJwgvfRIuFw?usp=sharing'
    },
    {
        id: 4,
        title: 'DataQuest Tracks',
        issuer: 'DataQuest',
        date: '2021',
        description: 'Completed tracks: Data Scientist in Python, Data Engineer in Python, and Data Analyst in R.',
        link: 'https://drive.google.com/drive/folders/1iQiY_0XJAm0dwE9q-IYNedT-ZDhaTWCJ?usp=sharing'
    },
    {
        id: 5,
        title: 'Python for Everybody',
        issuer: 'Coursera',
        date: '2020',
        description: 'First online course series, covering Python basics, Web APIs, and web scraping.',
        link: 'https://drive.google.com/drive/folders/1gpnY9sZo-KbcK-G-oA4yG1eLQzRVoqnv?usp=sharing'
    },
];