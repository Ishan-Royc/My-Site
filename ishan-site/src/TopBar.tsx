function TopBar({ active }: { active: number }) {
    //
    return (<>
        <div>
            <a href='/' className = {active === 0 ? 'active': ''}>Home</a>
        </div>
    </>);
}

export default TopBar;