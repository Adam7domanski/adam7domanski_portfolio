import React, { useEffect, useState } from 'react';
import aboutData from '../data/aboutData.json';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import workIcon  from '../resources/workIcon.svg';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/About.module.css';

interface AboutData {
    dateFrom: string;
    dateTo: string;
    title: string;
    description: string;
}

const typedAboutData: AboutData[] = aboutData as AboutData[];

const About: React.FC = () => {
    const [data, setData] = useState<AboutData[]>([]);

    useEffect(() => {
        const sortedData = typedAboutData.sort((a: AboutData, b: AboutData) => new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime());
        setData(sortedData);
    }, []);

    return (
<VerticalTimeline>
    {data.map((item, index) => (
        <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={`${item.dateFrom} - ${item.dateTo}`}
            iconStyle={{ background: 'rgb(33, 150, 243)'}}
            icon={<img src={workIcon} className={styles['work-icon']} alt="work-icon1"/>}
        >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p>{item.description}</p>
        </VerticalTimelineElement>
    ))}
</VerticalTimeline>
    );
};

export default About;