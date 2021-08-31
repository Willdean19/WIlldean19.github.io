import "./contact.scss";

export default function Contact() {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
            <div className="contact" id="contact">
                <div className="left">
                    <div className="handshake">
                        <img src="assets/handshake.png" alt=""/>
                    </div>
                </div>
                <div className="right">
                   <h2>Contact.</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email"/>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                    <h2>Find me on.</h2>
                    <div className="container">
                        <a href="https://github.com/Willdean19">
                            <img src="assets/github.png" alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/will-d-a065831bb/">
                            <img src="assets/linkedin.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

