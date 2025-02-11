import React, { useState, useEffect } from 'react';
import ProjecTiel from './ProjecTiel';
import projectsData from '../data/projectsData.json';
import styles from '../styles/Projects.module.css';

interface Project {
    media: string;
    title: string;
    description: string;
    techstackElements: string;
    githubLink?: string | undefined;
    websiteLink?: string | undefined;
}

export default function Projects() {
    const[projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);


    return (
        <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
                <ProjecTiel
                    key={index}
                    media={require('../resources/' + project.media)}
                    title={project.title}
                    description={project.description}
                    techstackElements={project.techstackElements}
                    githubLink={project.githubLink}
                    websiteLink={project.websiteLink}
                />
            ))}
        </div>
    );
}

