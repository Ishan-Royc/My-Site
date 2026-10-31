import { useEffect } from 'react';

function Experience({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    console.log(lang);
    useEffect(() => {
        setAct(3);
    }, [setAct]);
    return (<>
                <h1>Hello World</h1>
                <div id="work"></div>
                <div id="research"></div>
                <div id="volunteering"></div>
            </>);
}

export default Experience;