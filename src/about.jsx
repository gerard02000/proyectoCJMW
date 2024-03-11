import {Header} from  "./header"

function About(){

    return (
        <>
        <Header />
        <section className="py-10 bg-gray-800 lg:py-0">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 ">
            <div className="h-full pr-12 lg:order-2 lg:mb-40 ">
                <div className="relative h-full lg:h-auto ">
                    <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top ">
                        <img className="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                    </div>
                    <div className="relative lg:-top-12 h-full ">
                        <img className=" mt-20" src="imagenAbout2.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 mt-24 md:mt-3  lg:py-24 xl:py-48">
                <div>
                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Porque deberias elejirnos?</p>
                    <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Trabajamos muy bien, y rapido!</h2>
                    <p className="text-xl leading-relaxed text-gray-200 mt-9">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                    <p className="mt-6 text-xl leading-relaxed text-gray-200">Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.</p>
                   
                </div>
            </div>
        </div>
    </div>
</section>
</>
    )
}
export default  About;