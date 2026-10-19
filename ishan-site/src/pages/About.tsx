import Markdown from 'react-markdown';
import AboutMd from './markdown/About.md?raw';

function About({setAct}:{setAct: (act: number) => any}){
    setAct(1);
    return (<>
        <Markdown>{AboutMd}</Markdown>
    </>);
}

export default About;