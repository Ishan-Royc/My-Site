import Markdown from 'react-markdown';
import HomeMd from './markdown/Home.md?raw';
import extractSection from './scripts/parser.ts';

function Home({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    setAct(0);

    return (<>
        <Markdown>{extractSection(HomeMd, lang)}</Markdown>
    </>);
}

export default Home;