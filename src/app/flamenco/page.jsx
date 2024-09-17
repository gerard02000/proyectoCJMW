import { Header } from "../../components/header"
import Footer from "../../components/footer"
import Carrusel from "../../components/ComponentesHome/carrusel"
import NewCollection from "../../components/ComponentesBrands/cardNewCollection"
import { CartProvider } from '../../components/CartContext';
import ColeccionesMarcas from "../../components/colecciones/ColeccionesMarcas"

function FlamencoHome() {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const marca = 'FLA';

    const images = [
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20KUKULKAN.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20PUMMERIN.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20PERRAULT.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20TOPKAPI.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20ZAHARA%2002.jpg",
    ]

    const imagesNewCollections = [
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20KUKULKAN.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20PUMMERIN.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/FLAMENCO/1200%20FLAMENCO%20PERRAULT.jpg",
    ]
    const titles = [
        "KUKULKAN",
        "PUMMERIN",
        "PERRAULT",

    ]

    return (
        <>
            <CartProvider>
                <Header />
                <Carrusel images={shuffleArray([...images])} />
                <body className="">
                    <div className=" flex items-center justify-center h-full mt-3">
                        <img src="https://cjmw.eu/ImagenesTelasCjmw/Iconos/logoFlamenco.png" alt="" className=" lg:w-[30%] lg:h-[20%] w-[40%] h-[30%] max-w-full max-h-full " />
                    </div>
                
                <NewCollection images={imagesNewCollections} titles={titles} />
                <ColeccionesMarcas marca={marca} />
                </body>
                <Footer />
            </CartProvider>
        </>
    )
}
export default FlamencoHome