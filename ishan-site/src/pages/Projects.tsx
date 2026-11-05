import { useEffect } from 'react';
import Footer from './Footer.tsx';

function Projects({setAct, lang}:{setAct: (act: number) => void; lang: string}){
    useEffect(() => {
        setAct(1);
    }, [setAct]);

    return (<><h1>Projects</h1><div className="filler"></div><Footer /></>);
}

export default Projects;