import React, { Component } from 'react';
import ProjecTiel from './ProjecTiel';
import projectsData from '../data/projectsData.json';
import styles from '../styles/Projects.module.css';

interface Project {
    media: string;
    title: string;
    description: string;
    techstackElements: string;
}

interface ProjectsState {
    projects: Project[];
}

class Projects extends Component<{}, ProjectsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.setState({ projects: projectsData });
    }

    render() {
        const { projects } = this.state;

        return (
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <ProjecTiel
                        key={index}
                        media={require('../resources/' + project.media)}
                        title={project.title}
                        description={project.description}
                        techstackElements={project.techstackElements}
                    />
                ))}
            </div>
        );
    }
}

export default Projects;