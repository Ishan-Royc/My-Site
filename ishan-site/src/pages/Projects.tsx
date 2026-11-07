import { useEffect } from 'react';
import Footer from './Footer.tsx';
import ProjectsMD from './markdown/Projects.md?raw';
import extractSection from './scripts/parser.ts';
import Markdown from 'react-markdown';
import './Projects.css';

const projects: Record<string, string[]> = {
    "en": [
        'Darwin Neural Network',
        'Project 2',
        'Project 3'
    ],
    "hi": [],
    "bn": []
}

function Projects({setAct, lang}:{setAct: (act: number) => void; lang: string}){
    useEffect(() => {
        setAct(1);
    }, [setAct]);
    console.log(lang);

    return (<>
                <h1>Projects</h1>
                <div className="projects">
                    {projects[lang].map((project, index) => {
                        return (
                            <div className="project" key={index}>
                                <h2>{project}</h2>
                                <Markdown>{extractSection(ProjectsMD, project)}</Markdown>
                            </div>
                        );
                    })}
                </div>
                <div className="filler"></div>
                <Footer />
            </>);
}

export default Projects;