import React, { useEffect, useState } from 'react';
import aboutData from '../data/aboutData.json';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import workIcon from '../resources/workIcon.svg';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/About.module.css';

interface AboutData {
    dateFrom: string;
    dateTo: string;
    title: string;
    description: string;
}

const typedAboutData: AboutData[] = aboutData as AboutData[];

export default function AboutSection() {
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
                    contentStyle={{ background: 'var(--clr-surface-a10)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--clr-primary-a10)' }}
                    date={`${item.dateFrom} - ${item.dateTo}`}
                    iconStyle={{ background: 'var(--clr-primary-a20)' }}
                    icon={<img src={workIcon} className={styles['work-icon']} alt="work-icon1" />}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <p>{item.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}