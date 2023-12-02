import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home grid">
            <div className="home-text">
                <h5 className="H5-size white h5-sh2-nav-text-fnt H5-letter-spacing">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="H1-size white h1-to-h4-and-sh1-fnt">SPACE</h1>
                <p className="p white ">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            
            <Link to="/destination" className="home-button white H5-size SH2-letter-spacing grid">EXPLORE</Link>

        </div>
    );
};

export default Home;