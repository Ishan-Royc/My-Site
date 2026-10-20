import { Link } from 'react-router-dom';
import { useState } from 'react';
import './TopBar.css';

function TopBar({ active, language, changeLanguage }: { active: number, language: string, changeLanguage: (value:string) => void }) {
    let home: string, about: string, projects: string;

    switch(language){
        case 'en':
            home = "Home";
            about = "About";
            projects = "Projects";
            break;
        case 'hi':
            home = 'मूल पन्ना';
            about = 'यह क्या है?';
            projects = '';
            break;
        case 'bn':
            home = 'মুখ্য পৃষ্ঠ';
            about = 'ব্যাপারটা কী?';
            projects = '';
            break;
        default:
            home = 'Home';
            about = 'About';
            projects= 'Projects';
    }

    return (<>
        <div>
            <Link to='/' className = {active === 0 ? 'active': ''}>{home}</Link>
            <Link to='/About' className = {active === 1 ? 'active': ''}>{about}</Link>
            <Link to='/Projects' className = {active === 2 ? 'active': ''}>{projects}</Link>

            <select id="lang" name="lang" onChange={(event) => changeLanguage(event.target.value)}>
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
            </select>
        </div>
    </>);
}

export default TopBar;