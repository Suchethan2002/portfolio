
export default function About(){
    return(
        <><div className="Main-title">
            <div className="Main-title-header">
                <h2>
                    ABOUT
                    <span> ME</span>
                    <span className="Span-Style"></span>
                </h2>
                <div className="about-container">
                    <p> I have a passion for learning about and using new technologies.
                        I enjoy trying new things, which is how I discovered that working on hydroponic systems is what I want to do with my life. Additionally, I enjoy playing badminton and cricket in my spare time.
                    </p>
                </div>
                <div className="Skill-Style">
                <h4 className="Skill">
                    MY SKILLS
                </h4>
                <div className="Skills">

                    <a className='Skill-Name'> Java </a>
                    <a className='Skill-Name'> JavaScript </a>
                    <a className='Skill-Name'> ReactJs </a>
                    <a className='Skill-Name'> Python </a>
                    <a className='Skill-Name'> HTML</a>
                    <a className='Skill-Name'> CSS</a>
                    <a className='Skill-Name'> Web Development</a>
                    <a className='Skill-Name'> C</a>
                    <a className='Skill-Name'> NodeJs</a>
                </div>

                <h4 className="Skill">
                MY PROJECTS </h4>
        </div><div className="Portfolios">
                <div className="Portfolio-item">
                    <div className="item">
                        <h3>Movie Recommendation System</h3>
                        <p>Recommendation System crafted with the help of Machine Learning Algorithms.</p>
                    </div>
                </div>
                <div className="Portfolio-item">
                    <div className="item">
                        <h3>Smart Hydroponic Systems</h3>
                        <p>A technology implemetation for Soil Less Farming.</p>
                    </div>
                </div>
                <div className="Portfolio-item">
                    <div className="item">
                        <h3>Shop<span>4</span>Home</h3>
                        <p>An Ecommerce website build using MERN Stack.</p>
                    </div>
                </div>
            </div>

            </div>

           
            </div></>
    )
}