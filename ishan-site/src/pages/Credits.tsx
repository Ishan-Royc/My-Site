import Markdown from 'react-markdown';
import CreditsMd from './markdown/Credits.md?raw';
import extractSection from './scripts/parser.ts';
import { useEffect } from 'react';

function Credits({lang, setAct}:{lang: string, setAct: (act: number) => void}){
    useEffect(() => {
        setAct(3);
    }, [setAct]);
    return (
        <>
            <div id="credits">
                <Markdown>{extractSection(CreditsMd, lang)}</Markdown>
            </div>
        </>
    )
}

export default Credits;