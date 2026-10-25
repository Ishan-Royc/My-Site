import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import './TopBar.css';

enum Language{
    en = 'Language',
    bn = 'ভাষা',
    hi = 'बोली'
}

function TopBar({ active, language, changeLanguage }: { active: number, language: string, changeLanguage: (value:string) => void }) {
    let home: string, about: string, projects: string;

    switch(language){
        case 'en':
            home = "Home";
            about = "About Me";
            projects = "Projects";
            break;
        case 'hi':
            home = 'मूल पन्ना';
            about = 'मेरे बारे में';
            projects = 'मेरे काज';
            break;
        case 'bn':
            home = 'মুখ্য পৃষ্ঠ';
            about = 'আমার ব্যাপারে';
            projects = 'আমার কার্য';
            break;
        default:
            home = 'Home';
            about = 'About';
            projects= 'Projects';
    }

    const languageLabel = Language[language as keyof typeof Language] ?? Language.en;

    return (<>
        <motion.div id="topBar" className={`lang-${language}`}>
            <Link to='/' aria-current={active === 0 ? 'page' : undefined} className={`lang-${language} topbar-link`}>
                <span className="topbar-link-label">{home}</span>
                {active === 0 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <Link to='/About' aria-current={active === 1 ? 'page' : undefined} className={`lang-${language} topbar-link`}>
                <span className="topbar-link-label">{about}</span>
                {active === 1 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <Link to='/Projects' aria-current={active === 2 ? 'page' : undefined} className={`lang-${language} topbar-link`}>
                <span className="topbar-link-label">{projects}</span>
                {active === 2 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <div id = "spacing-language" className="w-16 md:w-32 lg:w-48"></div>
            <label htmlFor="lang">{languageLabel}: </label>
            <select id="lang" name="lang" onChange={(event) => changeLanguage(event.target.value)}>
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
            </select>
        </motion.div>
    </>);
}

export default TopBar;