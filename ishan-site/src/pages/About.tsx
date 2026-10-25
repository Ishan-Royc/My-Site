import { useEffect } from 'react';
import Markdown from 'react-markdown';
import AboutMd from './markdown/About.md?raw';
import extractSection from './scripts/parser';



function About({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    useEffect(() => {
        setAct(1);
    }, [setAct]);

    return (<>
        <Markdown
            components={{
                h1: ({ children }) => (
                <h1 className="text-4xl font-bold md:text-5xl">{children}</h1>
                ),
            }}>
        {extractSection(AboutMd, lang)}
        </Markdown>
    </>);
}

export default About;