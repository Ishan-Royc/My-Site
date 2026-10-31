import { Children, useEffect, useState, type ReactNode } from 'react';
import Markdown from 'react-markdown';
import HomeMd from './markdown/Home.md?raw';
import extractSection from './scripts/parser.ts';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import './Home.css'

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

const sections: Record<string, string[]> = {
    "en":[
        'Overview',
        'Education',
        'Employment',
        'Research',
        'Skills'
    ],
    "hi":[
        'चिन्हवाई',
        'सिखावन',
        'नौकरी',
        'खोजें',
        'पेशे'
    ],
    "bn":[
        'পরিচয়',
        'শিক্ষা',
        'চাকরী',
        'Research',
        'দক্ষতা'
    ]
}

function Home({setAct, lang}:{setAct: (act: number) => void, lang: string}){
    useEffect(() => {
        setAct(0);
    }, [setAct]);

    return (<div id="HomePage">
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
                <Link to='/Experience#education'>
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
                    <Link to='/Experience#work'>
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
                    <Link to='/Experience#research'>
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
                    ul: RandomizedSkillsList
                }}>
                {extractSection(HomeMd, sections[lang][4])}
            </Markdown>
        </div>
    </div>);
}

export default Home;