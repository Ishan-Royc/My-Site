import { useEffect } from 'react';
import Footer from './Footer.tsx';

function Experience({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    console.log(lang);
    useEffect(() => {
        setAct(2);
    }, [setAct]);
    return (<>
                <h1>Hello World</h1>
                <div id="work"></div>
                <div id="research"></div>
                <div id="volunteering"></div>
                <div className="filler"></div><Footer />
            </>);
}

export default Experience;