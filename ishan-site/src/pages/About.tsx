import { useEffect} from 'react';
import Footer from './pageComponents/Footer.tsx';
import extractSection from './scripts/parser.ts';
import Markdown from 'react-markdown';
import AboutMd from './markdown/About.md?raw';

function About({setAct, lang}:{setAct: (act: number) => void; lang: string}){
    useEffect(() => {
        setAct(4);
    }, [setAct]);
    console.log(lang);

    return (<>
        <div className="about-content">
            <Markdown>
                {extractSection(AboutMd, lang)}
            </Markdown>
        </div>
        <div className="filler"></div>
        <Footer />
    </>);
}

export default About;