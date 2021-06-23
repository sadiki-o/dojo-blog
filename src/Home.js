import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    //run npx json-server --watch data/db.json --port 8000
    console.log(useFetch("http://localhost:8000/blogs"));
    return ( 
        <div className="home">
            <div className="name" style={{color: "purple", fontSize: "20px", fontWeight: "1000"}}>
                Blog Names
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default Home;