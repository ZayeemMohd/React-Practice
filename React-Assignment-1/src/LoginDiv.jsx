import "./LoginDiv.css";
import google from './assets/google.png'
import facebook from './assets/facebook.png'

function LoginDiv(){
    return(
        <>
            <div className="Container">
                <h2 className="Masuk">Masuk</h2>
                <div className="daftar">Daftar</div>
                <input type="text" placeholder="Nomor Ponsel atau Email" className="UserName"/>
                <input type="text" placeholder="Kata Sandi" className="Password"/>
                <button className="MasukBtn">Masuk</button>
                <p className="Lupa">Lupa kata sandi? <span className="Klik">Klik disini</span></p>
                <p className="atau">&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; atau masuk dengan &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;</p>
                <button className="Google"><p>Google</p></button>
                <button className="Facebook"><p>Facebook</p></button>
            </div>
        </>
    )
}

export default LoginDiv;

