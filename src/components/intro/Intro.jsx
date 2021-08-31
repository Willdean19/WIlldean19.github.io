import "./intro.scss"

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot.png" alt=""/>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm </h2>
                    <h1>Will Dean</h1>
                    <h3>Welcome to my portfolio website</h3>
                    <h4>see some of my recent work below</h4>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>

        </div>
    )
}

