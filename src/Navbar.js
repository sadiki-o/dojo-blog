import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>dojo block</h1>
        <div className="links">
            <Link to="/" style={{color:"white", backgroundColor: "black", borderRadius: "8px"}}>Home </Link>
            <Link to="/create" style={{color:"white", backgroundColor: "black", borderRadius: "8px"}}>New block</Link>
        </div>
    </nav> );
}
 
export default Navbar;