import { useEffect } from 'react';
import Footer from './Footer.tsx';
import ProjectsMD from './markdown/Projects.md?raw';
import extractSection from './scripts/parser.ts';
import Markdown from 'react-markdown';
import './Projects.css';

const projects: Record<string, string[]> = {
    "en": [
        'Darwin Neural Network',
        'Portfolio Website',
        'Project 3'
    ],
    "hi": [],
    "bn": []
}

const contributedProjects: Record<string, string[]> = {
    "en": [
        'Aksharnama',
        'Contributed Project 2'
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
                <br/>
                <div id="made" className="slide-in-element projects">
                    <h2>Projects that I've made</h2>
                    <div>
                        {projects[lang].map((project, index) => {
                            return (
                                <div className="project slide-in-element" key={index}>
                                    <h3>{project}</h3>
                                    <Markdown
                                        components={{
                                            a: ({ href, children }) => {
                                                const tooltip = href?.includes('github.com')
                                                    ? 'GitHub'
                                                    : 'Open in New Tab';

                                                return (
                                                    <a
                                                        href={href}
                                                        className={tooltip ? 'tooltip-trigger' : undefined}
                                                        data-tooltip={tooltip}
                                                        target="_blank"
                                                    >
                                                        {children}
                                                    </a>
                                                );
                                            },
                                        }}
                                    >
                                        {extractSection(ProjectsMD, project)}
                                    </Markdown>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br/>
                <div id="contributed" className="slide-in-element projects">
                    <h2>Projects that I've contributed to</h2>
                    <div className="projects">
                        {contributedProjects[lang].map((project, index) => {
                            return (
                                <div className="project slide-in-element" key={index}>
                                    <h3>{project}</h3>
                                    <Markdown
                                        components={{
                                            a: ({ href, children }) => {
                                                const tooltip = href?.includes('github.com')
                                                    ? 'GitHub'
                                                    : 'Open in New Tab';

                                                return (
                                                    <a
                                                        href={href}
                                                        className={tooltip ? 'tooltip-trigger' : undefined}
                                                        data-tooltip={tooltip}
                                                        target="_blank"
                                                    >
                                                        {children}
                                                    </a>
                                                );
                                            },
                                        }}
                                    >
                                        {extractSection(ProjectsMD, project)}
                                    </Markdown>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="filler"></div>
                <Footer />
            </>);
}

export default Projects;