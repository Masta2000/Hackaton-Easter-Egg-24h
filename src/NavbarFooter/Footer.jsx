import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

function Footer(props) {
    return(
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="link col-4">
                        <h5>Nos liens</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"Acceuil></a></li>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Notre collection</a></li>
                        </ul>
                    </div>
                    <div className="adress col-4">
                        <h5>Nos Coordonnées</h5>
                        9 Allée Serr<br />
                        33100 Bordeaux<br />
                        <i className="fa fa-phone fa-lg"></i>05 54 36 67 51<br />
                        <i className="fa fa-envelope fa-lg"></i>Easter and Co..com<br />
                    </div>
                    <div className="col-4">
                        <div className="text-center">
                            <SocialIcon url="http://twitter.com/jaketrent" />
                            <SocialIcon url="http://facebook.com" />
                            <SocialIcon url="http://linkedin.com" />
                            <SocialIcon url="http://instagram.com" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>@ Copyright 2019 Easter and Co.</p>
                </div>
            </div>   
        </div>
    );
}

export default Footer;

