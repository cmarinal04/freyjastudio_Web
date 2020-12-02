import React, {Fragment} from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
     <Fragment>
        <Header 
          titulo='Freyja Studios'
        />

        <Footer 
          fecha={fecha}
        />
      </Fragment>
  );
}

export default App;
