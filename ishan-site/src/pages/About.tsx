import { useEffect} from 'react';
import Footer from './Footer';

function About({setAct, lang}:{setAct: (act: number) => void; lang: string}){
    useEffect(() => {
        setAct(4);
    }, [setAct]);
    console.log(lang);

    return (<>
        <h1>About this Site</h1>
        <div className="filler"></div>
        <Footer />
    </>);
}

export default About;