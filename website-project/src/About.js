import "./About.css"

function AboutMe(){
    return(
        <div className="container">
            <div className="text">
                <h1>Hi there, I'm 
                a fullstack web
                developer
                </h1>
            </div>
           
            <div className="image"><img src=".\developer.webp" className="about-image" alt="developer in action"></img>
            </div>
            
        </div>
    )
};
// add a hi wave img to the intro

export default AboutMe;