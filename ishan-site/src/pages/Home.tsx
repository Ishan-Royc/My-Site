import { useEffect } from 'react';
import Markdown from 'react-markdown';
import HomeMd from './markdown/Home.md?raw';
import extractSection from './scripts/parser.ts';

function Home({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    useEffect(() => {
        setAct(0);
    }, [setAct]);

    return (<>
        <Markdown
            components={{
                h1: ({ children }) => (
                <h1 className="text-4xl font-bold md:text-5xl">{children}</h1>
                ),
            }}>
            {extractSection(HomeMd, lang)}
        </Markdown>
    </>);
}

export default Home;