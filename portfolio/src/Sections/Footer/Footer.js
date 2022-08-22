import "./footerStyles.css"
import logo from "../../Assets/icode-logo.png"

const Footer = () => {
    return (
        <footer>
            <p>@ 2022 - Diogo Bomfim</p>
            <div className="pwrdby">
                <p>Powered by</p>
                <img src={logo}/>
            </div>
        </footer>
    )
}

export default Footer;