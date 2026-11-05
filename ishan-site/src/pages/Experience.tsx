import { useEffect } from 'react';
import Markdown from 'react-markdown';
import ExMd from './markdown/Experience.md?raw';
import Footer from './Footer.tsx';
import extractSection from './scripts/parser.ts';
import { useLocation } from 'react-router-dom';
import './Experience.css'

const work: Record<string,string[]> = {
    "en":[
        'Summer 2027 Whatever',
        'Springfield Jewish Community Center'
    ],
    "hi":[],
    "bn":[]
}
const research: Record<string,string[]> = {
    "en":[
        'Spring 2027 Whatever'
    ],
    "hi":[],
    "bn":[]
}
const volunteering: Record<string,string[]> = {
    "en":[
        'Akshaya Patra',
        'National Archives and Records Administration (NARA) Citizen Archivist'
    ],
    "hi":[],
    "bn":[]
}

const education: Record<string,string[]> = {
    "en":[
        'UMass Amherst',
        'Longmeadow High School'
    ],
    "hi":[],
    "bn":[]
}

const awards: Record<string,string[]> = {
    "en":[
        'National Latin Exam (NLE) Summa Cum Laude / Gold Medalist',
        'John and Abigail Adams Scholarship',
        'National Merit Scholarship Commended Student',
        'Seal of Biliteracy With Distinction in Latin',
        'Seal of Biliteracy in Hindi'
    ],
    "hi":[],
    "bn":[]
}

function Experience({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    console.log(lang);
    useEffect(() => {
        setAct(2);
    }, [setAct]);

    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = decodeURIComponent(location.hash.slice(1));
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [location.pathname, location.hash]);

    return (<div className={`experience-page text-${lang}`}>
                <div id="education-xp" className="xp">
                    <h1 className="slide-in-element">Education</h1>
                    {education[lang].map((title) => (
                        <article className="xp-card slide-in-element ed" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <div id="work-xp" className="xp">
                    <h1 className="slide-in-element">Work Experience</h1>
                    {work[lang].map((title) => (
                        <article className="xp-card slide-in-element arbeit" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <div id="research-xp" className="xp">
                    <h1 className="slide-in-element">Research</h1>
                    {research[lang].map((title) => (
                        <article className="xp-card slide-in-element research" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <div id="volunteering-xp" className="xp">
                    <h1 className="slide-in-element">Volunteering</h1>
                    {volunteering[lang].map((title) => (
                        <article className="xp-card slide-in-element volunteer" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <div id="awards-xp" className="xp">
                    <h1 className="slide-in-element">Awards and Recognition</h1>
                    {awards[lang].map((title) => (
                        <article className="xp-card slide-in-element award" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <Footer />
            </div>);
}

export default Experience;