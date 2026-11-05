import { Children, useEffect, useState, type ReactNode } from 'react';
import Markdown from 'react-markdown';
import HomeMd from './markdown/Home.md?raw';
import extractSection from './scripts/parser.ts';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Footer from './Footer.tsx';
import './Home.css';
import remarkGfm from 'remark-gfm';

function RandomizedSkillsList({ children }: { children?: ReactNode }) {
  const [items] = useState(() => {
    const shuffled = Children.toArray(children);

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  });

  return <ul className="skillz">{items}</ul>;
}

const titles: Record<string, string> = {
    "en":"Hi, I'm Ishan",
    "bn":"নমস্কার, আমি ঈশান",
    "hi":"नमस्ते, मैं ईशान हूँ"
}

const up_to: Record<string, string> = {
    "en":"What I'm up to right now:",
    "hi":"अभी जो मैं कर रहा हूँ:",
    "bn":"আমি যা এখন করছি:"
}

const sections: Record<string, string[]> = {
    "en":[
        'Overview',
        'Education',
        'Employment',
        'Research',
        'Skills',
        'Contact Me',
        'Projects'
    ],
    "hi":[
        'चिन्हवाई',
        'सिखावन',
        'नौकरी',
        'खोजें',
        'पेशे',
        'मुझसे बात करने की जानकारी',
        'काज'
    ],
    "bn":[
        'পরিচয়',
        'শিক্ষা',
        'চাকরী',
        'Research',
        'দক্ষতা',
        'আমার সঙ্গে কথা বলুন',
        ''
    ]
}

const languages: Record<string,string[]> = {
    "en":[
        'English',
        'Hindi',
        'Bengali',
        'Latin'
    ],
    "hi":[
        'अंग्रेज़ी',
        'हिंदी',
        'बंगाली',
        'लैटिन'
    ],
    "bn":[
        'ইংরেজি',
        'হিন্দি',
        'বাংলা',
        'ল্যাটিন'
    ]
}

function Home({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    useEffect(() => {
        setAct(0);
    }, [setAct]);

    return (<div id="HomePage" className={`text-${lang}`}>
        <h1 className="intro font-bold" id='header'>{titles[lang]}</h1>
        <div id="re-me" className="slide-in-element">
            <Markdown
                components={{
                    h3: ({ children }) => (
                    <h1 className="text-4xl font-bold md:text-5xl">{children}</h1>
                    ),
                }}>
                {extractSection(HomeMd, sections[lang][0])}
            </Markdown>
            <div id="current-activities">
                <h1 className="text-2xl font-bold md:text-3xl" id="up-to">{up_to[lang]}</h1>
                <Link to='/Experience#education-xp'>
                    <motion.div
                        id="education"
                        className="activity"
                        whileHover={{ scale: 1.04, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <h1 className="text-xl font-bold md:text-2xl">{sections[lang][1]}: </h1>
                        <Markdown>{extractSection(HomeMd, sections[lang][1])}</Markdown>
                    </motion.div>
                </Link>
                <div id="workexp">
                    <Link to='/Experience#work-xp'>
                        <motion.div
                            id="employment"
                            className="activity"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <h1 className="text-xl font-bold md:text-2xl">{sections[lang][2]}: </h1>
                            <Markdown>{extractSection(HomeMd, sections[lang][2])}</Markdown>
                        </motion.div>
                    </Link>
                    <Link to='/Experience#research-xp'>
                        <motion.div
                            id="research"
                            className="activity"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <h1 className="text-xl font-bold md:text-2xl">{sections[lang][3]}: </h1>
                            <Markdown>{extractSection(HomeMd, sections[lang][3])}</Markdown>
                        </motion.div>
                    </Link>
                    <Link to='/Projects'>
                        <motion.div
                            id="projects"
                            className="activity"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <h1 className="text-xl font-bold md:text-2xl">{sections[lang][6]}: </h1>
                            <Markdown>{extractSection(HomeMd, sections[lang][6])}</Markdown>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
        <div id="skillz" className="slide-in-element">
            <Markdown
                key={lang}
                components={{
                    h2: ({ children }) => (
                    <h1 className="text-4xl font-bold md:text-5xl">{children}</h1>
                    ),
                    li: ({ children }) =>(
                        <li className="skill">{children}</li>
                    ),
                    ul: RandomizedSkillsList,
                    img: ({ src, alt, ...props }) => (
                        <img
                            {...props}
                            src={src}
                            alt={alt ?? ''}
                            id={src === '/Cloudflare_Logo.svg' ? 'cf' : undefined}
                        />
                    )
                }}>
                {extractSection(HomeMd, sections[lang][4])}
            </Markdown>
        </div>
        <div id="language-xp">
                    <h1 className="slide-in-element">Languages (the human kind)</h1>
                    {languages[lang].map((title) => (
                        <article className="xp-card slide-in-element" key={title} id={title.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{title}</h2>
                            <Markdown remarkPlugins={[remarkGfm]}>{extractSection(HomeMd, title)}</Markdown>
                        </article>
                    ))}
        </div>
        <div id="contact" className="slide-in-element">
            <h1 className="text-xl font-bold md:text-2xl">{sections[lang][5]}:</h1>
            <div id='contact-links'>
                <a href="https://github.com/Ishan-Royc" id="github" data-tooltip="GitHub" className="tooltip-trigger">
                    <img src="/GitHub_Invertocat_Black.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/ishan-roychowdhury-a65b76300/" id="linkedin" data-tooltip="LinkedIn" className="tooltip-trigger">
                    <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="mailto:isroych@gmail.com" id="gmail" data-tooltip="Email" className="tooltip-trigger">
                    <img src="/email.svg" alt="Email" />
                </a>
            </div>
        </div>
        <br/>
        <Footer />
    </div>);
}

export default Home;