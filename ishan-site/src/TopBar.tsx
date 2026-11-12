import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import './TopBar.css';

enum Language{
    en = 'Language',
    bn = 'ভাষা',
    hi = 'बोली'
}

function TopBar({ active, language, changeLanguage }: { active: number, language: string, changeLanguage: (value:string) => void }) {
    let home: string, credits: string, projects: string, experience: string, about: string;

    switch(language){
        case 'en':
            home = "Home";
            projects = "Projects";
            experience = "Experience";
            credits = 'Credits and Attribution';
            about = "About";
            break;
        case 'hi':
            home = 'मूल पन्ना';
            projects = 'मेरे काज-नक्शे';
            experience = "बीतियाँ";
            credits = 'Credits';
            about = "मेरे बारे में";
            break;
        case 'bn':
            home = 'মুখ্য পৃষ্ঠ';
            projects = 'আমার করা কাজ';
            experience = "অভিজ্ঞতা";
            credits = 'Credits';
            about = "আমার ব্যাপারে";
            break;
        default:
            home = 'Home';
            projects= 'Projects';
            experience = 'Experience';
            credits = 'Credits';
            about = "About";
    }

    const languageLabel = Language[language as keyof typeof Language] ?? Language.en;

    return (<>
        <motion.div id="topBar" className={`lang-${language}`}>
            <Link to="/">
                <img
                    className="logo"
                    src="/old-but-gold-v0-uwp9flcax68g1.jpeg"
                    alt="Home"
                />
            </Link>
            <Link to='/' aria-current={active === 0 ? 'page' : undefined} className={`lang-${language} topbar-link`} id={active === 0 ? 'active' : ''}>
                <span className="topbar-link-label">{home}</span>
                {active === 0 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <Link to='/Projects' aria-current={active === 1 ? 'page' : undefined} className={`lang-${language} topbar-link`} id={active === 1 ? 'active' : ''}>
                <span className="topbar-link-label">{projects}</span>
                {active === 1 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <Link to='/Experience' aria-current={active === 2 ? 'page' : undefined} className={`lang-${language} topbar-link`} id={active === 2 ? 'active' : ''}>
                <span className="topbar-link-label">{experience}</span>
                {active === 2 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <Link to='/Credits' aria-current={active === 3 ? 'page' : undefined} className={`lang-${language} topbar-link`} id={active === 3 ? 'active' : ''}>
                <span className="topbar-link-label">{credits}</span>
                {active === 3 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <Link to='/About' aria-current={active === 4 ? 'page' : undefined} className={`lang-${language} topbar-link`} id={active === 4 ? 'active' : ''}>
                <span className="topbar-link-label">{about}</span>
                {active === 4 && <motion.span className="topbar-active-indicator" layoutId="topbar-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />}
            </Link>
            <div className="flex justify-between w-full" id="languageSelector">
                <div id="leftItem"></div>
                <div className="ml-auto">
                    <label htmlFor="lang">{languageLabel}: </label>
                    <select id="lang" name="lang" onChange={(event) => changeLanguage(event.target.value)}>
                        <option value="en">English</option>
                        <option value="hi">हिंदी</option>
                        <option value="bn">বাংলা</option>
                    </select>
                </div>
            </div>
        </motion.div>
    </>);
}

export default TopBar;