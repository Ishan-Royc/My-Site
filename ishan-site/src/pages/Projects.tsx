import { Children, isValidElement, useEffect } from 'react';
import Footer from './Footer.tsx';
import ProjectsMD from './markdown/Projects.md?raw';
import extractSection from './scripts/parser.ts';
import Markdown from 'react-markdown';
import './Projects.css';

const headers: Record<string, string[]> = {
    "en": [
        "Projects",
        "Projects that I've made",
        "Projects that I've contributed to"
    ],
    "hi": [
        "काज",
        "मैंने जो काज बनाये हैं",
        "मैं जिन काजों में शामिल था"
    ],
    "bn": [
        "Projects",
        "Projects that I've made",
        "Projects that I've contributed to"
    ]
}

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
                <h1>{headers[lang][0]}</h1>
                <br/>
                <div id="made" className="slide-in-element projects">
                    <h2>{headers[lang][1]}</h2>
                    <div>
                        {projects[lang].map((project, index) => {
                            return (
                                <div className="project slide-in-element" key={index}>
                                    <h3>{project}</h3>
                                    <Markdown
                                        components={{
                                            a: ({ href, children }) => {
                                                const isActionLink = Children.toArray(children).some(
                                                    child => isValidElement(child) && child.type === 'img'
                                                );

                                                const tooltip = isActionLink
                                                    ? (href?.includes('github.com') ? 'GitHub' : 'Open in New Tab')
                                                    : undefined;

                                                return (
                                                    <a
                                                        href={href}
                                                        className={isActionLink ? 'project-action-link tooltip-trigger' : undefined}
                                                        data-tooltip={tooltip}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
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
                    <h2>{headers[lang][2]}</h2>
                    <div className="projects">
                        {contributedProjects[lang].map((project, index) => {
                            return (
                                <div className="project slide-in-element" key={index}>
                                    <h3>{project}</h3>
                                    <Markdown
                                        components={{
                                            a: ({ href, children }) => {
                                                const isActionLink = Children.toArray(children).some(
                                                    child => isValidElement(child) && child.type === 'img'
                                                );

                                                const tooltip = isActionLink
                                                    ? (href?.includes('github.com') ? 'GitHub' : 'Open in New Tab')
                                                    : undefined;

                                                return (
                                                    <a
                                                        href={href}
                                                        className={isActionLink ? 'project-action-link tooltip-trigger' : undefined}
                                                        data-tooltip={tooltip}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
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
                <Footer />
            </>);
}

export default Projects;