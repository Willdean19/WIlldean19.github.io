import "./about.scss";
import { SkillBars } from 'react-skills';

export default function About() {
    return (
        <div className="about" id="about">
           <h1>About Me.</h1>
            <div className="wrapper">
                <p>I am a recent graduate of Montana State University with a BS in Computer Science. I have a passion for Web Development and UX Design. I have experience coding in Java, JavaScript, HTML, CSS, Python, and JavaScript Libraries including React.
                    I also have experience with Microsoft Office and Adobe Creative Cloud apps. I am looking for entry-level positions/internships in the tech field.
                </p>
            </div>
            <br/>
            <br/>

            <div className="skills">
                <h2> My Technical Skills.</h2>
                <ul className="box">
                    <li>
                        <h5>HTML (95%)</h5>
                        <span className="bar bar1"></span>
                    </li>
                    <li>
                        <h5>CSS (85%)</h5>
                        <span className="bar bar2"></span>
                    </li>
                    <li>
                        <h5>JavaScript (55%)</h5>
                        <span className="bar bar3"></span>
                    </li>
                    <li>
                        <h5>SQL (40%)</h5>
                        <span className="bar bar4"></span>
                    </li>
                    <li>
                        <h5>Python (65%)</h5>
                        <span className="bar bar5"></span>
                    </li>
                    <li>
                        <h5>Java (75%)</h5>
                        <span className="bar bar6"></span>
                    </li>
                </ul>
            </div>

        </div>
    );
}