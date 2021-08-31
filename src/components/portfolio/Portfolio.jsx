import "./portfolio.scss";


export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
                <h3>Check out some of my works</h3>
                <div className="container">
                    <a href="https://drive.google.com/drive/folders/1Zy6rSS7CLswr8FERlEI6HVQw4W1Jq5lj?usp=sharing">
                    <div className="item">
                        <img src="assets/Compiler.png" alt=""/>
                        <h3>Compiler Project</h3>
                    </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1GWx9kQlmfpk79x_P1_KZFQgIOFXF53mp?usp=sharing">
                    <div className="item">
                        <img src="assets/DatabaseProject.png" alt=""/>
                        <h3>Database Project</h3>
                    </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1vwCF8b0TjWtA1reHWOLqAbR3cII0_TQZ?usp=sharing">
                    <div className="item">
                        <img src="assets/UX_Design.png" alt=""/>
                        <h3>UX Design Project</h3>
                    </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/13a6XvmBZWR7RYiq_wpukVRhbbLFtSZar?usp=sharing">
                    <div className="item">
                        <img src="assets/Data_Analysis.png" alt=""/>
                        <h3>Data Analysis Project</h3>
                    </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1izPJtOChq3oI7ukGBYw6Sv4TVI6rNk1h?usp=sharing">
                        <div className="item">
                            <img src="assets/Network.png" alt=""/>
                            <h3>Network Project</h3>
                        </div>
                    </a>
                </div>
        </div>
    );
}

