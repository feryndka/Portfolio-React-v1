import './Home.css'
import profile from '../assets/profile.png'

export default function Home() {
    return(
        <>
            <div id="home">
                <div className="img"><img src={profile} alt="profile picture" /></div>
                <div className="content">
                    <h1 className="hello">
                        HELLO!
                    </h1>
                    <p className="paragraf">
                        I'm Fery Andika, <br />a web Designer.
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </>
    )
}