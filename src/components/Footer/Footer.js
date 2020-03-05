import React from 'react';
import '../Footer/Footer.css'


const Footer = ()=> {
    return(
        <div className='footer-wrapper'>
            <div className="footer-container container">
                <div className="footer-logo">
                <a className='footer-logo-url' href='https://www.lavanguardia.com'>
                <figure className='footer-logo-img' alt='La Vanguardia'>
                    <img src='https://rsc.lavanguardia.com/img/logo-image-v1000486.svg' className='img-responsive1' alt='La Vanguardia' rel='logo'></img>
                </figure>
                </a>
                </div>
                
                <p className="footer-copyright">© La Vanguardia Ediciones Todos los derechos reservados</p>
                <ul className="footer-list">
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/quienes-somos" title="Quiénes somos">Quiénes somos <span className='bar'>| </span></a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/contacto" title="Contacto">Contacto <span className='bar'>| </span> </a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/avisolegal" title="Aviso legal">Aviso legal <span className='bar'>| </span></a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/ayuda" title="Ayuda">Ayuda <span className='bar'>| </span> </a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/cookies_privacy_LV_popup.html" title="Política de cookies">Política de cookies <span className='bar'>| </span> </a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/otras-webs" title="Otras webs">Otras webs <span className='bar'>| </span></a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="https://www.lavanguardia.com/politica-privacidad" title="Política de privacidad">Política de privacidad <span className='bar'>| </span></a></li>
                    <li className="footer-item"><a className="footer-item-link" target="_self" href="javascript:Didomi.preferences.show()" title="Área de privacidad">Área de privacidad <span className='bar'>| </span></a></li>
                    </ul>
            </div>
    </div>
    )
}
export default Footer