import React from 'react';
import whatsapp from './../img/whatsapp.svg'
import instagram from './../img/instagram.svg'

const Footer = ({fecha}) => (
        <footer className="bg-dark text-light p-5">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <p>Todos los derechos reservados &copy; {fecha}</p>
                </div>

                <div className="col-md-5 col-sm-12">
                    <p><strong>Redes Sociales</strong></p>
                    <p>
                        <img className="redesSociales" src={whatsapp} alt="whatsapp" />&nbsp;
                        <a className="link-light text-decoration-none" href="https://wa.me/+573217071969/?text=%C2%A1Hola%21+Quiere+obtener+m%C3%A1s+informaci%C3%B3n." target="_blank" rel="noreferrer">Escribanos para más información.</a>
                    </p>
                    <hr />
                    <p>
                        <img className="redesSociales" src={instagram} alt="instagram" />&nbsp;
                        <a className="link-light text-decoration-none" href="https://www.instagram.com/freyja.studios" target="_blank" rel="noreferrer">Síguenos para más información.</a>
                    </p>
                </div>
            </div>
        </footer>
);

 
export default Footer;