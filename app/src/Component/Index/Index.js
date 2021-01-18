import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fondo from './../../img/fondo_1.jpg'

function Index(){

    return(
        <div>
            <div className="card text-center">
                <img src={Fondo} class="card-img-top" alt="Fondo" />
                <div className="card-body card-img-overlay" id="central">
                    <h1 className="card-title">Trabaja con Nosotros.</h1>
                    <p className="card-text">Genera ingresos extras como <strong>modelo webcam</strong>.</p>
                    <p className="card-text">¡Es tú oportunidad!</p>
                </div>
            </div>
        </div>
    )
}


export default Index;