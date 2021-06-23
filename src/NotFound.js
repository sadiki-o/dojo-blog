const { Link } = require("react-router-dom")

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY</h2>
            <p>The page you request cannot be found .</p>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;
<div></div>