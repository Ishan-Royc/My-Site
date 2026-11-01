import { useEffect } from 'react';
import Markdown from 'react-markdown';
import ExMd from './markdown/Experience.md?raw';
import Footer from './Footer.tsx';
import extractSection from './scripts/parser.ts';
import './Experience.css'

const work: Record<string,string[]> = {
    "en":[
        'Springfield Jewish Community Center',
        'Summer 2027 Whatever'
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
        'NARA'
    ],
    "hi":[],
    "bn":[]
}

const education: Record<string,string[]> = {
    "en":[
        'Longmeadow High School',
        'UMass Amherst'
    ],
    "hi":[],
    "bn":[]
}

function Experience({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    console.log(lang);
    useEffect(() => {
        setAct(2);
    }, [setAct]);

    return (<>
                <div id="education-xp">
                    <h1>Education</h1>
                    {education[lang].map((title) => (
                        <article className="xp-card slide-in-element" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <div id="work-xp">
                    <h1>Work Experience</h1>
                    {work[lang].map((title) => (
                        <article className="xp-card slide-in-element" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown>{extractSection(ExMd, title)}</Markdown>
                        </article>
                    ))}
                </div>
                <div id="research-xp">
                    <h1>Research</h1>
                </div>
                <div id="volunteering-xp">
                    <h1>Volunteering</h1>
                </div>
                <div id="awards-xp">
                    <h1>Awards and Recognition</h1>
                </div>
                <div className="filler"></div><Footer />
            </>);
}

export default Experience;