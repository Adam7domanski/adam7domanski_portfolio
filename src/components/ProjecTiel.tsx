import React from 'react';
import styles from '../styles/ProjectTiel.module.css';
import MyButton from './MyButton';

interface ProjectTielProps {
    media: string;
    title: string;
    description: string;
    techstackElements: string;
    githubLink?: string | undefined;
    websiteLink?: string | undefined;
}

export default function ProjecTiel({ media, title, description, techstackElements, githubLink, websiteLink }: ProjectTielProps) {
    return (
        <div className={styles.projectTiel}>
            <img src={media} alt={title} className={styles.projectMedia} />
            <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDescription}>{description}</p>
                <div className={styles.projectTechStack}>
                    {techstackElements.split(',').map((tech, index) => (
                        <span key={index} className={styles.techStackElement}>
                            {tech.trim()}
                        </span>
                    ))}
                </div>
                <div className={styles.projectLinks}>
                    {githubLink && (
                        <MyButton icon="github.svg" name="GitHub" link={githubLink} />
                    )}
                    {websiteLink && (
                        <MyButton icon="website.svg" name="Website" link={websiteLink} />
                    )}

                </div>
            </div>
        </div>
    );
}
