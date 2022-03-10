import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="Playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>FlipChart</h1>
                <p>This is my first MERN Stack Project</p>
                <p>Copyrights 2022 &copy; Anubhav Kumar</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/kumaranubhav7">Instagram</a>
                <a href="https://www.youtube.com/channel/UCabb8qhUaBHz-0h-MJHR4Bw/featured">Youtube</a>
                <a href="http://Facebook.com/kumaranubhav07">Facebook</a>
            </div>
        </footer>

    );
};

export default Footer;
