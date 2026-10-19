import Markdown from 'react-markdown';
import HomeMd from './markdown/Home.md?raw';

function Home({setAct}:{setAct: (act: number) => void}){
    setAct(0);

    return (<>
        <Markdown>{HomeMd}</Markdown>
    </>);
}

export default Home;