import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/Group" style={{
                    color : 'white',
                    backgroundColor :' #f1356d',
                    borderRadius : '8px'
                }}>Group</Link>
                <Link to="/About" style={{
                    color : 'white',
                    backgroundColor :' #f1356d',
                    borderRadius : '8px'
                }}>About</Link>
                <Link to="/Profile" style={{
                    color : 'white',
                    backgroundColor :' #f1356d',
                    borderRadius : '8px'
                }}>Profile</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;