import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar({ active }: { active: number }) {
    //
    return (<>
        <div>
            <Link to='/' className = {active === 0 ? 'active': ''}>Home</Link>
            <Link to='/About' className = {active === 1 ? 'active': ''}>About</Link>
            <Link to='/Projects' className = {active === 2 ? 'active': ''}>Projects</Link>
        </div>
    </>);
}

export default TopBar;