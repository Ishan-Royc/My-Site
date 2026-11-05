import { useEffect} from 'react';

function About({setAct, lang}:{setAct: (act: number) => void; lang: string}){
    useEffect(() => {
        setAct(4);
    }, [setAct]);
    console.log(lang);

    return (<>
        <h1>About this Site</h1>
    </>);
}

export default About;