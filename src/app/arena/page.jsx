import { Header } from "../../components/header"
import Footer from "../../components/footer"
import Carrusel from "../../components/ComponentesHome/carrusel"
import NewCollection from "../../components/ComponentesBrands/cardNewCollection"
import { CartProvider } from '../../components/CartContext';
import ArenaColecciones from "../colecciones/arenaColeccion"

function ArenaHome() {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const images = [
        "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENT/1200%20ARENA%20ANTILLA%20VELVET%2002.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENT/1200%20ARENA%20COTE%20D%20AZUR%2002.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENT/1200%20ARENA%20PERSIAN%20MOOD.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel4.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENT/1200%20ARENA%20GRANITE%2002.jpg",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel1.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel2.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel3.webp",
    ]

    const titles = [
        "1200ARENADUNE01.jpg",
        "ANTILLA VELVET",
        "COTE D AZUR",
        "PERSIAN MOOD"
    ]

    return (
        <>
            <CartProvider>
                <Header />
                <Carrusel images={shuffleArray([...images])} />
                <body className=" bg-gradient-to-b-from">
                    <div className=" flex items-center justify-center h-full">
                        <img src="https://cjmw.eu/ImagenesTelasCjmw/Iconos/logoArena.png" alt="" className=" lg:w-[30%] lg:h-[20%] w-[40%] h-[30%] max-w-full max-h-full " />
                    </div>
                </body>
                <NewCollection images={images} titles={titles} />
                <ArenaColecciones />
                <Footer />
            </CartProvider>
        </>
    )
}
export default ArenaHome