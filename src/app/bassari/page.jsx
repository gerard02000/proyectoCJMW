import { Header } from "../../components/header"
import Footer from "../../components/footer"
import Carrusel from "../../components/ComponentesHome/carrusel"
import NewCollection from "../../components/ComponentesBrands/cardNewCollection"
import { CartProvider } from '../../components/CartContext';
import ColeccionesMarcas from "../../components/colecciones/ColeccionesMarcas"

function BassariHome() {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    

    const marca = 'BAS';

    const images = [
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/KASSUMAY/Mejor%20calidad/BASSARI%20KASSUMAY%20IWOL%20ARGILE%20(COLCHA)%20WOLOF%20SAVANE%20(CORTINA)%20LOMPOUL%20ARGILE%20(COJINES%20TRASEROS)%20KAOLACK%20ARGILE(COJINES%20DELANTEROS).jpg",
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/KASSUMAY/Mejor%20calidad/BASSARI%20KASSUMAY%20YEMBE%20.jpg",
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/UNIVERS/Buena%20Calidad/BASSARI%20UNIVERS%20MARTIEN%20SAUGE%20ET%20VERT%20EMPIRE.jpg",
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/TRIBAL/Buena%20calidad/BASSARI%20TRIBAL%20INDEFELO%20LA%20MER%20.jpg",
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/TRIBAL/Buena%20calidad/BASSARI%20TRIBAL%20DANDE%20ARGILE%20(COJ%C3%8DN%20PEQUE%C3%91O).jpg",
    ]

    const imagesNewCollections = [
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/TRIBAL/Baja%20calidad/BASSARI%20TRIBAL%20BEDICK%20VERT%20(CORTINA).jpg",
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/UNIVERS/Baja%20Calidad/BASSARI%20UNIVERS%20MARTIEN%20SAUGE%20ET%20VERT%20EMPIRE.jpg",
        "https://bassari.eu/ImagenesTelasCjmw/Carruseles/BASSARI/KASSUMAY/baja%20calidad/BASSARI%20KASSUMAY%20KARABANE%20ARGILE%20II.jpg",
    ]

    const titles = [
        "TRIBAL",
        "UNIVERS",
        "KASSUMAY",
    ]

    const CodProduBas = [
        "BAS00058",
        "BAS00241",
        "BAS00128"
    ]

    return (
        <>
            <CartProvider>
                <Header />
                <Carrusel images={shuffleArray([...images])} />
                <body className=" bg-gradient-to-b-from">
                    <div className=" flex items-center justify-center h-full mt-[2%]">
                        <img src="https://bassari.eu/ImagenesTelasCjmw/Iconos/LOGOBASSARI_01.png" alt="" className=" lg:w-[30%] lg:h-[20%] w-[40%] h-[30%] max-w-full max-h-full " />
                    </div>
                </body>
                <NewCollection images={imagesNewCollections} titles={titles} productCodes={CodProduBas} />
                <ColeccionesMarcas marca={marca}/>
                <Footer />
            </CartProvider>
        </>
    )
}
export default BassariHome