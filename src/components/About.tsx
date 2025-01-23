import React, { useEffect, useState } from 'react';
import aboutData from '../data/aboutData.json';
import '../styles/About.module.css';

interface AboutData {
    dateFrom: string;
    dateTo: string;
    title: string;
    description: string;
}

// Explicitly type the imported data
const typedAboutData: AboutData[] = aboutData as AboutData[];

const About: React.FC = () => {
    const [data, setData] = useState<AboutData[]>([]);

    useEffect(() => {
        // Assuming aboutData.json is already imported and contains the data
        const sortedData = typedAboutData.sort((a: AboutData, b: AboutData) => new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime());
        setData(sortedData);
    }, []);

    return (
        <div className="about-container">
            <div className="timeline">
                {data.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{item.dateFrom} - {item.dateTo}</h3>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;