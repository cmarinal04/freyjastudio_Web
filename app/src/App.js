import Header from './Component/Header';
import Index from './Component/Index/Index';
import Footer from './Component/Footer';
import "./App.css"

function App() {
    //Obtener la fecha
    const fecha = new Date().getFullYear();
    return (
        <div>
            <Header titulo='Freyja Studios' />

            <Index />

            <Footer fecha={fecha} />
        </div>
    );
}

export default App;
