import Markdown from 'react-markdown';
import CreditsMd from './markdown/Credits.md?raw';
import extractSection from './scripts/parser.ts';
import { useEffect } from 'react';
import Footer from './pageComponents/Footer.tsx';
import './Credits.css';

function Credits({lang, setAct}:{lang: string, setAct: (act: number) => void}){
    useEffect(() => {
        setAct(3);
    }, [setAct]);
    return (
        <div>
            <div id="credits">
                <Markdown>{CreditsMd}</Markdown>
            </div>
            <div className="filler"></div>
            <Footer />
        </div>
    )
}

export default Credits;