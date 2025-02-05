// import React, { Component } from 'react';
import styles from '../styles/ProjectTiel.module.css';

interface ProjectTielProps {
    media: string;
    title: string;
    description: string;
    techstackElements: string;
}

export default function ProjecTiel({ media, title, description, techstackElements }: ProjectTielProps) {
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
            </div>
        </div>
    );
}
