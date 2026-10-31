import { useEffect } from 'react';

function Projects({setAct}:{setAct: (act: number) => void}){
    useEffect(() => {
        setAct(1);
    }, [setAct]);

    return (<><h1>Projects</h1></>);
}

export default Projects;