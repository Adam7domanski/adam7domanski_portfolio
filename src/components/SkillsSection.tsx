import React, { useState, useEffect } from 'react';
import skillsData from '../data/skillsData.json';
import styles from '../styles/SkillsSection.module.css';

interface Skill {
    name: string;
    icon: string;
    level: string;
}

interface SkillsData {
    [key: string]: Skill[];
}

export default function SkillsSection() {
    const [skills, setSkills] = useState<SkillsData>({});

    useEffect(() => {
        setSkills(skillsData);
    }, []);

    const renderStars = (level: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < level ? styles.filledStar : styles.emptyStar}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className={styles.skillsContainer}>
            {Object.keys(skills).map((category, index) => (
                <div key={index} className={styles.skillTiel}>
                    <h3 className={styles.skillTitle}>{category}</h3>
                    <hr className={styles.horizontalSeparator}/>
                    <div className={styles.skillGrid}>
                        {skills[category].map((skill, skillIndex) => (
                            <div key={skillIndex} className={styles.skillItem}>
                                <img src={require(`../resources/${skill.icon}`)} alt={skill.name} className={styles.skillIcon} />
                                <p className={styles.skillName}>{skill.name}</p>
                                <div className={styles.skillLevel}>
                                    {renderStars(parseFloat(skill.level))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}